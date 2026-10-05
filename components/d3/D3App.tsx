// @ts-nocheck – Logik 1:1 aus dem Prototyp portiert (Zustände, Layout, Programm, 3D, Preloader, Frag D3).
// Die Typisierung folgt schrittweise; Ansicht (D3View + modules/) und Daten (lib/d3/) sind bereits getypt.
'use client';

import { Component } from 'react';
import D3View from './D3View';
import { LAYOUT } from '@/lib/d3/layout';
import { FORMATS, ROOMS, SESSIONS, SPEAKER_PHOTOS } from '@/lib/d3/program';
import './d3.css';

type D3Props = { phase?: 'Phase 1' | 'Phase 2'; tour?: boolean; grain?: boolean; intro?: boolean };

export default class D3App extends Component<D3Props, any> {
  constructor(props) {
    super(props);
    this.state = { intro: 3, st: 'home', bp: 'desk', mx: 0, my: 0, hover: null, tour: 0, sel: null, now: 645, botQ: '', botA: null, ffmt: 'all', ftopic: 'all', spk: 0 };
    this._last = {};
    this._lock = 0;
    var self = this;
    this._rootRef = function (el) {
      if (self._ro) { self._ro.disconnect(); self._ro = null; }
      if (!el || typeof ResizeObserver === 'undefined') return;
      self._ro = new ResizeObserver(function (en) {
        var w = en[0].contentRect.width;
        var bp = w < 640 ? 'mob' : (w < 1100 ? 'tab' : 'desk');
        if (bp !== self.state.bp) self.setState({ bp: bp });
      });
      self._ro.observe(el);
      self._root = el;
    };
    this._stageRef = function (el) { self._stage = el; };
    this._ilogoRef = function (el) { self._ilogo = el; };
    this._jrRef = function (el) { self._jr = el; };
    this._jScrollRef = function (el) { self._js = el; };
  }
  componentDidMount() {
    var self = this;
    try { this.init3D(); } catch (e) {}
    this._key = function (e) { if (e.key === 'Escape' && self.state.sel) self.closeExp(); };
    if (typeof document !== 'undefined') document.addEventListener('keydown', this._key);
    /* Kein Preloader mehr (05.10.): die Seite startet direkt im Ruhezustand */
    this._t = setInterval(function () {
      var rm = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!rm && (self.props.tour ?? true) && self.state.st === 'home' && !self.state.hover) self.setState({ tour: self.state.tour + 1 });
    }, 2800);
  }
  componentDidUpdate(pp, ps) {
    var self = this;
    if (ps.st !== this.state.st) {
      if (this._stage) this._stage.scrollTop = 0;
      if (this._3d && this._3d.release) this._3d.release();
      if (this.state.st === 'program') setTimeout(function () { self.scrollToNow(!self.state.sel); }, 380);
    }
    if (ps.sel !== this.state.sel && this.state.sel && !this._closing) {
      var inn = this._jr && this._jr.querySelector('.jx-in'); if (inn) inn.scrollTop = 0;
      this.animExp(ps.sel ? 'swap' : 'open');
    }
    if (ps.now !== this.state.now && this._js) {
      var el = this._js, x = (this.state.now - 540) * this.ppm();
      if (x < el.scrollLeft + el.clientWidth * 0.12 || x > el.scrollLeft + el.clientWidth * 0.88) el.scrollLeft = Math.max(0, x - el.clientWidth * 0.5);
    }
  }
  rm() { return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
  ppm() { var el = this._js; if (!el) return 4; var v = parseFloat(getComputedStyle(el).getPropertyValue('--ppm')); return v || 4; }
  scrollToNow(smooth) {
    var el = this._js; if (!el) return;
    var x = (this.state.now - 540) * this.ppm() - el.clientWidth * 0.3;
    if (el.scrollTo) el.scrollTo({ left: Math.max(0, x), behavior: smooth && !this.rm() ? 'smooth' : 'auto' }); else el.scrollLeft = x;
  }
  /* Shared Element: Der Programmpunkt wächst aus seiner Zelle auf die volle Fläche – und fällt beim Schließen dorthin zurück */
  expFrom(id) {
    var jr = this._jr; if (!jr) return null;
    var c = jr.querySelector('.jc[data-id="' + id + '"]'); if (!c) return null;
    var m = jr.getBoundingClientRect(), r = c.getBoundingClientRect();
    var cl = function (v, max) { return Math.max(0, Math.min(max, v)); };
    return 'inset(' + cl(r.top - m.top, m.height) + 'px ' + cl(m.right - r.right, m.width) + 'px ' + cl(m.bottom - r.bottom, m.height) + 'px ' + cl(r.left - m.left, m.width) + 'px)';
  }
  animExp(mode) {
    var jr = this._jr; if (!jr || this.rm()) return;
    var ex = jr.querySelector('.j-exp'), inn = jr.querySelector('.jx-in');
    if (!ex || !ex.animate) return;
    if (mode === 'swap') { inn.animate([{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }], { duration: 320, easing: 'cubic-bezier(.2,.7,.1,1)' }); return; }
    var from = this.expFrom(this.state.sel) || 'inset(50% 50% 50% 50%)';
    ex.animate([{ clipPath: from }, { clipPath: 'inset(0px 0px 0px 0px)' }], { duration: 560, easing: 'cubic-bezier(.75,0,.2,1)' });
    inn.animate([{ opacity: 0, transform: 'translateY(18px)' }, { opacity: 0, transform: 'translateY(18px)', offset: 0.5 }, { opacity: 1, transform: 'none' }], { duration: 760, easing: 'ease-out' });
  }
  closeExp() {
    var self = this, jr = this._jr, id = this.state.sel;
    if (!id) return;
    var done = function () { self._closing = false; self.setState({ sel: null }); };
    var ex = jr && jr.querySelector('.j-exp');
    if (!ex || !ex.animate || this.rm()) { done(); return; }
    /* Zielzelle sichtbar machen, damit der Rückweg dort landet */
    var c = jr.querySelector('.jc[data-id="' + id + '"]'), el = this._js;
    if (c && el) {
      var l = c.offsetLeft, w = c.offsetWidth;
      if (l < el.scrollLeft || l + w > el.scrollLeft + el.clientWidth) el.scrollLeft = Math.max(0, l - el.clientWidth * 0.3);
    }
    this._closing = true;
    var to = this.expFrom(id) || 'inset(50% 50% 50% 50%)';
    jr.querySelector('.jx-in').animate([{ opacity: 1 }, { opacity: 0 }], { duration: 160, fill: 'forwards' });
    var a = ex.animate([{ clipPath: 'inset(0px 0px 0px 0px)' }, { clipPath: to }], { duration: 460, easing: 'cubic-bezier(.75,0,.2,1)', fill: 'forwards' });
    a.onfinish = function () { done(); setTimeout(function () { ex.getAnimations && ex.getAnimations().forEach(function (x) { x.cancel(); }); var i = jr.querySelector('.jx-in'); i.getAnimations && i.getAnimations().forEach(function (x) { x.cancel(); }); }, 30); };
  }
  init3D() {
    var self = this, root = this._root;
    if (!root || this._3d || typeof window === 'undefined') return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var P3 = {"keynote":{"top":"M0,50c0,-27.61424 22.38576,-50 50,-50c27.61424,0 50,22.38576 50,50h-20c0,-16.56854 -13.43146,-30 -30,-30c-16.56854,0 -30,13.43146 -30,30z","kern":"M32,50c0,-9.94113 8.05887,-18 18,-18c9.94113,0 18,8.05887 18,18z","bot":"M16,50c0,18.77768 15.22232,34 34,34c18.77768,0 34,-15.22232 34,-34h-16c0,9.94113 -8.05887,18 -18,18c-9.94113,0 -18,-8.05887 -18,-18z"},"case":{"starx":"M50,0l6.35485,16.59287c-2.05869,-0.38923 -4.18299,-0.59287 -6.35485,-0.59287v68c2.17186,0 4.29616,-0.20364 6.35485,-0.59287l-6.35485,16.59287l-9.95,-25.98l-25.41,11.34l11.34,-25.41l-25.98,-9.95l25.98,-9.95l-11.34,-25.41l25.41,11.34zM85.36,14.64l-7.24518,16.23457c-2.40598,-3.53 -5.4594,-6.58341 -8.98939,-8.98939zM100,50l-16.59287,6.35485c0.38923,-2.05869 0.59287,-4.18299 0.59287,-6.35485c0,-2.17186 -0.20364,-4.29616 -0.59287,-6.35485zM85.36,85.36l-16.23457,-7.24518c3.53,-2.40598 6.58341,-5.4594 8.98939,-8.98939z","dx":"M59.95,74.02l9.17543,4.09482c-3.78026,2.57655 -8.10707,4.41061 -12.77058,5.29231zM74.02,59.95l9.38713,-3.59515c-0.88171,4.66351 -2.71576,8.99032 -5.29231,12.77058zM74.02,40.05l4.09482,-9.17543c2.57655,3.78026 4.41061,8.10707 5.29231,12.77058zM59.95,25.98l-3.59515,-9.38713c4.66351,0.88171 8.99032,2.71576 12.77058,5.29231z"},"master":{"olx":"M0,33.5c19.98585,0 37.89689,8.88336 50,22.91698c-4.41417,5.11825 -8.05579,10.92157 -10.74376,17.22884c-8.40745,-12.73989 -22.85018,-21.14582 -39.25624,-21.14582zM66,99.5h-13c0,-9.55133 2.84909,-18.43722 7.74376,-25.85418c3.38373,7.93986 5.25624,16.67835 5.25624,25.85418z","il":"M0,65.5c18.77768,0 34,15.22232 34,34h-16c0,-9.94113 -8.05887,-18 -18,-18z","orx":"M100,52.5c-16.40605,0 -30.84879,8.40593 -39.25624,21.14582c-2.68797,-6.30728 -6.3296,-12.11059 -10.74376,-17.22884c12.10311,-14.03362 30.01415,-22.91698 50,-22.91698zM34,99.5c0,-9.17583 1.8725,-17.91431 5.25624,-25.85418c4.89468,7.41695 7.74376,16.30285 7.74376,25.85418z","ir":"M100,65.5c-18.77768,0 -34,15.22232 -34,34h16c0,-9.94113 8.05887,-18 18,-18z","d1":"M43,7.5c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7c-3.86599,0 -7,3.13401 -7,7z","d2":"M30.5,20c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7c-3.86599,0 -7,3.13401 -7,7z","d3":"M55.5,20c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7c-3.86599,0 -7,3.13401 -7,7z","d4":"M43,32.5c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7c-3.86599,0 -7,3.13401 -7,7z"},"net":{"ax":"M32,18c6.67442,0 12.87157,2.04339 18,5.53872c-8.45108,5.75991 -14,15.46258 -14,26.46128c0,10.9987 5.54892,20.70137 14,26.46128c-5.12843,3.49532 -11.32558,5.53872 -18,5.53872c-17.67311,0 -32,-14.32689 -32,-32c0,-17.67311 14.32689,-32 32,-32z","bx":"M68,18c17.67311,0 32,14.32689 32,32c0,17.67311 -14.32689,32 -32,32c-6.67442,0 -12.87157,-2.04339 -18,-5.53872c8.45108,-5.75991 14,-15.46258 14,-26.46128c0,-10.9987 -5.54892,-20.70137 -14,-26.46128c5.12843,-3.49532 11.32558,-5.53872 18,-5.53872z"},"expo":{"bowl":"M100,49.5c0,11.38476 -3.80499,21.88082 -10.21265,30.28585c-4.85334,-17.41119 -20.82851,-30.18585 -39.78735,-30.18585c-18.95884,0 -34.93401,12.77466 -39.78735,30.18585c-6.40766,-8.40503 -10.21265,-18.90109 -10.21265,-30.28585z","dome":"M50,68.8c13.46316,0 24.38999,10.85935 24.49917,24.29676c-7.24004,4.07728 -15.59798,6.40324 -24.49917,6.40324c-8.90119,0 -17.25913,-2.32596 -24.49917,-6.40324c0.10919,-13.4374 11.03601,-24.29676 24.49917,-24.29676z","head":"M27.4,22.6c0,12.48164 10.11836,22.6 22.6,22.6c12.48164,0 22.6,-10.11836 22.6,-22.6c0,-12.48164 -10.11836,-22.6 -22.6,-22.6c-12.48164,0 -22.6,10.11836 -22.6,22.6z"}};
    var SPEC = {
      fk: ['keynote', [['top', '--d3-bg', 0], ['bot', '--d3-bg', -1], ['kern', '--d3-green', 1]]],
      fc: ['case', [['starx', '--d3-black', 0], ['dx', '--d3-black', 1.2]]],
      fm: ['master', [['olx', '--d3-black', 0], ['il', '--d3-black', 0], ['orx', '--d3-black', 1], ['ir', '--d3-black', 1], ['d1', '--d3-green', 2], ['d2', '--d3-black', 2], ['d3', '--d3-black', 2], ['d4', '--d3-black', 2]]],
      fn: ['net', [['ax', '--d3-white', 0], ['bx', '--d3-white', 1.3]]],
      fs: ['expo', [['bowl', '--d3-bg', 0], ['dome', '--d3-bg', 1], ['head', '--d3-bg', 2]]]
    };
    var DEPTH = 15, LAYER = 9;
    var S = this._3d = { cur: null, t: { d: 0, rx: 0, ry: 0 }, g: { d: 0, rx: 0, ry: 0 }, mx: 0, my: 0, raf: 0 };
    var load = function (src) { return new Promise(function (res, rej) { var s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); }); };
    var ready = null;
    var ensure = function () {
      if (!ready) ready = (window.THREE ? Promise.resolve() : load('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'))
        .then(function () { return THREE.SVGLoader ? 0 : load('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/SVGLoader.js'); })
        .then(function () { return THREE.RoomEnvironment ? 0 : load('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/environments/RoomEnvironment.js'); })
        .then(setup);
      return ready;
    };
    var geo = {};
    function setup() {
      var r = S.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      r.outputEncoding = THREE.sRGBEncoding;
      var c = S.canvas = r.domElement; c.className = 'body3d';
      S.scene = new THREE.Scene();
      var pm = new THREE.PMREMGenerator(r); S.env = pm.fromScene(new THREE.RoomEnvironment(), .04).texture;
      S.scene.add(new THREE.HemisphereLight(0xffffff, 0x8a8798, .45));
      var key = new THREE.DirectionalLight(0xffffff, .75); key.position.set(-160, 120, 120); S.scene.add(key);
      S.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, -1000, 1000); S.cam.position.z = 400;
      S.root = new THREE.Group(); S.scene.add(S.root);
      S.flip = new THREE.Group(); S.flip.scale.set(1, -1, 1); S.flip.position.set(-50, 50, 0); S.root.add(S.flip);
      S.loader = new THREE.SVGLoader();
    }
    function geomFor(name, part) {
      var id = name + '.' + part; if (geo[id]) return geo[id];
      var data = S.loader.parse('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill-rule="evenodd" d="' + P3[name][part] + '"/></svg>');
      var shapes = []; data.paths.forEach(function (p) { shapes = shapes.concat(THREE.SVGLoader.createShapes(p)); });
      return (geo[id] = new THREE.ExtrudeGeometry(shapes, { depth: 1, bevelEnabled: false, curveSegments: 28 }));
    }
    function col(v) { var c = new THREE.Color(getComputedStyle(root).getPropertyValue(v).trim() || '#1E1B36'); c.convertSRGBToLinear(); return c; }
    function side(c) { var h = {}; var s = c.clone(); s.getHSL(h); if (h.l < .08) s.offsetHSL(0, -h.s * .6, .09); else s.offsetHSL(0, 0, -.1); return s; }
    function mat(c) {   // Material B: beschichtet, leicht reflektierend, nicht glänzend
      return new THREE.MeshPhysicalMaterial({ color: c, roughness: .5, clearcoat: .5, clearcoatRoughness: .35, envMap: S.env, envMapIntensity: .22, side: THREE.DoubleSide });
    }
    function build(k) {
      while (S.flip.children.length) { var o = S.flip.children.pop(); o.material.forEach(function (m) { m.dispose(); }); }
      var sp = SPEC[k];
      S.meshes = sp[1].map(function (q) { var c = col(q[1]); var m = new THREE.Mesh(geomFor(sp[0], q[0]), [mat(c), mat(side(c))]); m.userData.lvl = q[2]; S.flip.add(m); return m; });
    }
    function place(mod) {
      var sh = mod.querySelector('.sh'); if (!sh) return false;
      var a = sh.getBoundingClientRect(), m = mod.getBoundingClientRect(); if (!a.width) return false;
      var pad = a.width * .4, w = a.width + 2 * pad, h = a.height + 2 * pad;
      var c = S.canvas; c.style.left = (a.left - m.left - pad) + 'px'; c.style.top = (a.top - m.top - pad) + 'px';
      S.renderer.setSize(w, h);
      var u = 100 / a.width; S.cam.left = -w / 2 * u; S.cam.right = w / 2 * u; S.cam.top = h / 2 * u; S.cam.bottom = -h / 2 * u; S.cam.updateProjectionMatrix();
      if (c.parentNode !== mod) mod.appendChild(c);
      return true;
    }
    function frame() {
      S.raf = 0; if (!S.renderer) return; var moving = false;
      ['d', 'rx', 'ry'].forEach(function (k) { var d = S.t[k] - S.g[k]; if (Math.abs(d) > .001) { S.g[k] += d * .14; moving = true; } else S.g[k] = S.t[k]; });
      var dz = Math.max(.02, S.g.d * DEPTH);
      (S.meshes || []).forEach(function (m) { m.scale.z = dz; m.position.z = m.userData.lvl * LAYER * S.g.d; });
      S.root.rotation.set(S.g.rx * Math.PI / 180, S.g.ry * Math.PI / 180, 0);
      S.renderer.render(S.scene, S.cam);
      if (!S.want && !moving && S.cur) { S.cur.classList.remove('is3d'); if (S.canvas.parentNode) S.canvas.parentNode.removeChild(S.canvas); S.cur = null; return; }
      if (moving) S.raf = requestAnimationFrame(frame);
    }
    function kick() { if (!S.raf) S.raf = requestAnimationFrame(frame); }
    function aim() { var on = !!S.want; S.t.d = 1; S.t.rx = 11 + (on ? S.my * 4 : 0); S.t.ry = -14 + (on ? S.mx * 6 : 0); kick(); }
    S.activate = function (mod) {
      var k = (mod.className.match(/\bk-(f[kcmns])\b/) || [])[1]; if (!k) return;
      S.want = mod;
      ensure().then(function () {
        if (S.want !== mod) return;
        if (S.cur && S.cur !== mod) { S.cur.classList.remove('is3d'); }
        if (!place(mod)) return;
        if (S.cur !== mod) { build(k); S.g = { d: 1, rx: 11, ry: -14 }; }
        S.cur = mod; mod.classList.add('is3d'); aim();
      }).catch(function () { S.failed = true; });
    };
    S.release = function () { S.want = null; aim(); };
    root.addEventListener('pointerover', function (e) {
      if (e.pointerType !== 'mouse' || self.state.bp === 'mob') return;
      var mod = e.target.closest && e.target.closest('.fmt'); if (mod && mod !== S.want && !mod.classList.contains('off')) S.activate(mod);
    });
    root.addEventListener('pointerout', function (e) {
      if (!S.want) return; var to = e.relatedTarget; if (to && S.want.contains(to)) return;
      if (e.target.closest && e.target.closest('.fmt') === S.want) S.release();
    });
    root.addEventListener('pointermove', function (e) {
      if (!S.want) return; var r = S.want.getBoundingClientRect();
      S.mx = (e.clientX - r.left) / r.width * 2 - 1; S.my = (e.clientY - r.top) / r.height * 2 - 1; aim();
    });
  }
  endIntro() {
    var self = this;
    if (this.state.intro >= 2) return;
    clearTimeout(this._it1);
    var lg = this._ilogo, root = this._root;
    var mark = root && root.querySelector('.lock-mark');
    if (lg && mark && lg.animate) {
      var a = lg.getBoundingClientRect(), b = mark.getBoundingClientRect();
      var sc = b.height / a.height, dx = (b.left + b.width / 2) - (a.left + a.width / 2), dy = (b.top + b.height / 2) - (a.top + a.height / 2);
      lg.animate([{ transform: 'none' }, { transform: 'translate(' + dx + 'px,' + dy + 'px) scale(' + sc + ')' }], { duration: 700, easing: 'cubic-bezier(.75,0,.2,1)', fill: 'forwards' });
    }
    this.setState({ intro: 2 });
    this._it2 = setTimeout(function () { self.setState({ intro: 3 }); }, 900);
  }
  componentWillUnmount() {
    if (this._key && typeof document !== 'undefined') document.removeEventListener('keydown', this._key);
    clearTimeout(this._it1); clearTimeout(this._it2); clearInterval(this._t); if (this._ro) this._ro.disconnect(); if (this._raf) cancelAnimationFrame(this._raf); }
  lay() {
    return LAYOUT;
  }
  edPath(angs) {
    return angs.map(function (a) {
      var r = a * Math.PI / 180;
      var x = (0.16 + 10.06 * Math.sin(r)).toFixed(3), y = (10.05 - 10.06 * Math.cos(r)).toFixed(3);
      return 'M0.160,10.050 L' + x + ',' + y + ' A5.030,5.030 0 0 1 0.160,10.050 Z';
    }).join(' ');
  }
  go(st, extra, src) {
    var s = { st: st, hover: null };
    if (extra) for (var k in extra) s[k] = extra[k];
    var self = this, mod = src && src.closest ? src.closest('.mod') : null;
    if (!mod || !this._stage || this.rm() || st === this.state.st || typeof document === 'undefined' || !document.body.animate) { this.setState(s); return; }
    /* Die Fläche der Quelle wächst über die Bühne; währenddessen wechselt der Zustand darunter */
    var r = mod.getBoundingClientRect(), b = this._stage.getBoundingClientRect();
    var g = document.createElement('div');
    g.className = 'ghost';
    g.style.cssText = 'left:' + b.left + 'px;top:' + b.top + 'px;width:' + b.width + 'px;height:' + b.height + 'px;background:' + getComputedStyle(mod).backgroundColor;
    document.body.appendChild(g);
    var from = 'inset(' + Math.max(0, r.top - b.top) + 'px ' + Math.max(0, b.right - r.right) + 'px ' + Math.max(0, b.bottom - r.bottom) + 'px ' + Math.max(0, r.left - b.left) + 'px)';
    var grow = g.animate([{ clipPath: from }, { clipPath: 'inset(0px 0px 0px 0px)' }], { duration: 420, easing: 'cubic-bezier(.75,0,.2,1)', fill: 'forwards' });
    grow.onfinish = function () {
      self.setState(s);
      var out = g.animate([{ clipPath: 'inset(0px 0px 0px 0px)' }, { clipPath: 'inset(0px 0px 0px 100%)' }], { duration: 480, delay: 120, easing: 'cubic-bezier(.75,0,.2,1)', fill: 'forwards' });
      out.onfinish = function () { if (g.parentNode) g.parentNode.removeChild(g); };
    };
  }
  renderVals() {
    var self = this, s = this.state, bp = s.bp;
    var p2 = (this.props.phase ?? 'Phase 1') === 'Phase 2';
    var cols = { desk: 12, tab: 8, mob: 4 }[bp], base = { desk: 6, tab: 8, mob: 8 }[bp], minrow = { desk: '104px', tab: '96px', mob: '86px' }[bp];
    var L = this.lay()[bp][s.st];
    var rows = 0;
    Object.keys(L).forEach(function (k) { rows = Math.max(rows, L[k][1] + L[k][3]); });
    var keys = ['d3', 'brand', 'theme', 'why', 'hero', 'pc', 's2', 's3', 's4', 's5', 's6', 'fk', 'fc', 'fm', 'fn', 'fs', 'next', 'date', 'cta', 'cta2', 'hint', 'xhead', 'board', 'spkhead', 'sdetail', 'phead2', 'logos', 'editions', 'about', 'faq'];
    var P = {};
    keys.forEach(function (k) {
      var p = L[k], vis = !!p;
      if (vis) self._last[k] = p; else p = self._last[k] || [0, 0, 1, 1];
      P[k] = { c: p[0], r: p[1], w: p[2], h: p[3], cls: vis ? '' : 'off', d: vis ? ((p[0] + p[1]) * (s.intro === 2 ? 70 : 30) + (s.intro === 2 ? 350 : 0)) + 'ms' : '0ms' };
    });
    var order = ['home', 'explore', 'program', 'speaker', 'partner'];
    var names = { home: 'Home', explore: 'Formate', program: 'Programm', speaker: 'Speaker*innen', partner: 'Mitmachen' };
    var idx = order.indexOf(s.st);
    var navTo = function (st, extra) { return function (e) { if (e && e.preventDefault) e.preventDefault(); self.go(st, extra); }; };

    /* sessions */
    var SP = SPEAKER_PHOTOS;
    var F = FORMATS;
    var R = ROOMS;
    var S = SESSIONS;
    var times = ['09:00', '09:30', '09:40', '10:30', '11:15', '12:00', '13:00', '14:00', '15:00', '15:30'];
    var cont = { '11:15': [[2, 'Masterclass läuft bis 12:00']], '14:00': [[2, 'Masterclass läuft bis 14:30']] };
    var fam = { keynote: 'keynote', vortrag: 'keynote', case: 'case', panel: 'case', master: 'master', net: 'net' };
    var match = function (x) { return (s.ffmt === 'all' || fam[x.f] === s.ffmt) && (s.ftopic === 'all' || x.topic === s.ftopic); };
    var mins = function (t) { var q = t.split(':'); return +q[0] * 60 + +q[1]; };
    var hhmm = function (m) { return ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + (m % 60)).slice(-2); };
    var T0 = 540, T1 = 930, now = s.now;
    var SM = S.map(function (x) { return { x: x, a: mins(x.t), b: mins(x.e) }; });
    var open = function (id) { return function () { if (self.state.sel === id) self.closeExp(); else self.setState({ sel: id }); }; };
    var jItems = SM.map(function (o, i) {
      var x = o.x, alone = !SM.some(function (y) { return y !== o && y.a < o.b && y.b > o.a; });
      var live = o.a <= now && now < o.b, past = o.b <= now, d = o.b - o.a;
      return {
        id: x.id, i: i, sh: F[x.f][1], fmtLabel: F[x.f][0], title: x.title, who: x.who, time: x.t, live: live,
        l: 'calc(' + (o.a - T0) + ' * var(--ppm) + 2px)', w: 'calc(' + d + ' * var(--ppm) - 4px)',
        t: alone ? '2px' : 'calc(' + (x.room * 25) + '% + 2px)', h: alone ? 'calc(100% - 4px)' : 'calc(25% - 4px)',
        cls: ['f-' + x.f, alone ? 'plen' : '', d <= 15 ? 'thin' : '', live ? 'live' : '', past ? 'past' : '', match(x) ? '' : 'dim'].join(' '),
        aria: x.t + ' bis ' + x.e + ', ' + F[x.f][0] + ', ' + (alone ? 'alle Räume' : R[x.room]) + ': ' + x.title,
        pick: open(x.id)
      };
    });
    var jTicks = [];
    for (var m = T0; m <= T1; m += 30) jTicks.push({ l: 'calc(' + (m - T0) + ' * var(--ppm))', label: hhmm(m), cls: m % 60 ? 'half' : '' });
    var liveL = SM.filter(function (o) { return o.a <= now && now < o.b; });
    var upA = SM.filter(function (o) { return o.a > now; }).map(function (o) { return o.a; }).sort(function (p, q) { return p - q; })[0];
    var nextL = SM.filter(function (o) { return o.a === upA; });
    var where = function (o) { return SM.some(function (y) { return y !== o && y.a < o.b && y.b > o.a; }) ? R[o.x.room] : 'Alle Räume'; };
    var inMin = function (d) { return d < 60 ? 'in ' + d + ' min' : 'in ' + Math.floor(d / 60) + ' h' + (d % 60 ? ' ' + (d % 60) + ' min' : ''); };
    var jn = {
      time: hhmm(now), val: now, l: 'calc(' + (now - T0) + ' * var(--ppm))',
      clockLab: p2 ? 'Jetzt' : 'Jetzt · Vorschau',
      set: function (e) { self.setState({ now: +e.target.value }); },
      liveCls: liveL.length ? '' : 'idle',
      liveLab: liveL.length ? (liveL.length > 1 ? 'Läuft · ' + liveL.length + ' parallel' : 'Läuft gerade') : (now < T0 ? 'Noch nicht gestartet' : now >= T1 ? 'Vorbei' : 'Pause'),
      liveTitle: liveL.length ? liveL[0].x.title + (liveL.length > 1 ? ' + ' + (liveL.length - 1) + ' weitere' : '') : (now >= T1 ? 'Bis zur nächsten Ausgabe' : 'Gleich geht es weiter'),
      liveMeta: liveL.length ? F[liveL[0].x.f][0] + ' · ' + where(liveL[0]) + ' · bis ' + liveL[0].x.e : '',
      liveGo: function () { if (liveL.length) self.setState({ sel: liveL[0].x.id }); },
      nextCls: nextL.length ? '' : 'idle',
      nextLab: nextL.length ? 'Als Nächstes · ' + inMin(upA - now) : 'Als Nächstes',
      nextTitle: nextL.length ? nextL[0].x.title + (nextL.length > 1 ? ' + ' + (nextL.length - 1) + ' weitere' : '') : 'Ende des Tages',
      nextMeta: nextL.length ? nextL[0].x.t + ' · ' + F[nextL[0].x.f][0] + ' · ' + where(nextL[0]) : '',
      nextGo: function () { if (nextL.length) self.setState({ sel: nextL[0].x.id }); }
    };
    var cur = S.filter(function (x) { return x.id === s.sel; })[0];
    var MASK = { keynote: 'h-fk', vortrag: 'h-fk', case: 'h-fc', panel: 'h-fc', master: 'h-fm', net: 'h-fn' };
    var ex = cur ? {
      cls: 'open', hidden: false, tone: fam[cur.f] === 'keynote' && cur.f === 'keynote' ? 'tone-k' : (cur.f === 'net' ? 'tone-n' : ''),
      meta: cur.t + '–' + cur.e + ' · ' + where(SM[S.indexOf(cur)]), title: cur.title, topic: cur.topic, sh: F[cur.f][1], fmt: F[cur.f][0],
      desc: cur.f === 'net' ? 'Kleine Runden zu den Themen des Tages. Du wählst den Raum und bleibst, so lange du willst.' : '[Kurzbeschreibung: worum es geht, was du mitnimmst.]',
      img: cur.spk !== undefined ? SP[cur.spk] : '', mask: MASK[cur.f],
      who: cur.who, role: cur.spk !== undefined ? '[Funktion · Organisation]' : '', hasSpk: cur.spk !== undefined,
      toSpk: function () { self.go('speaker', { spk: cur.spk, sel: null }); },
      rel: cur.f === 'case' ? 'Artikel zum Case auf amtshelden.de' : 'Weiterführend auf amtshelden.de',
      close: function () { self.closeExp(); },
      prev: function () { var i = S.indexOf(cur); self.setState({ sel: S[(i - 1 + S.length) % S.length].id }); },
      next: function () { var i = S.indexOf(cur); self.setState({ sel: S[(i + 1) % S.length].id }); }
    } : { cls: '', hidden: true, tone: '', meta: '', title: '', topic: '', sh: '', fmt: '', desc: '', img: '', mask: '', who: '', role: '', hasSpk: false, toSpk: null, rel: '', close: function () {}, prev: function () {}, next: function () {} };
    var fList = [['all', 'Alle Formate', ''], ['keynote', 'Keynote & Vortrag', 's-circle'], ['case', 'Case & Panel', 's-burst'], ['master', 'Masterclass', 's-diag'], ['net', 'Networking', 's-net']];
    var tList = ['all', 'KI', 'Cybersecurity', 'Tools', 'Führung', 'Transformation & Kultur', 'Prozesse', 'Infrastruktur', 'Datenschutz & Recht'];

    /* format modules */
    var FM = [
      { k: 'fk', verb: 'Vortrag ansehen', f: 'keynote', name: 'Keynotes & Vorträge', desc: 'Impulse für die Verwaltung von morgen.', time: '09:40', bg: 'var(--d3-black)', dark: 'dark', ink: 'var(--d3-orange)' },
      { k: 'fc', verb: 'Cases kennenlernen', f: 'case', name: 'Cases & Panels', desc: 'Echte Lösungen aus echten Behörden.', time: '10:30', bg: 'var(--d3-bg-2)', dark: '', ink: '' },
      { k: 'fm', verb: 'Masterclass mitmachen', f: 'master', name: 'Master­classes', desc: 'Wissen vertiefen und anwenden.', time: '', bg: 'var(--d3-white)', dark: '', ink: 'var(--d3-black)' },
      { k: 'fn', verb: 'Leute treffen', f: 'net', name: 'Networking', desc: 'Menschen und Perspektiven verbinden.', time: '', bg: 'var(--d3-green)', dark: 'dark', ink: 'var(--d3-white)' },
      { k: 'fs', verb: 'Stände besuchen', f: 'stand', name: 'Stände', desc: 'Technologien und Lösungen entdecken.', time: '', bg: 'var(--d3-black)', dark: 'dark', ink: 'var(--d3-bg)' }
    ];
    var STILL = {"fk": "/bildwelt/d3-3d-fk.png", "fc": "/bildwelt/d3-3d-fc.png", "fm": "/bildwelt/d3-3d-fm.png", "fn": "/bildwelt/d3-3d-fn.png", "fs": "/bildwelt/d3-3d-fs.png"};
    var fmts = FM.map(function (m) {
      var is = {}; is[m.k] = true;
      return { still: STILL[m.k], is: is, k: m.k, verb: m.verb, P: P[m.k], name: m.name, desc: m.desc, time: m.time, short: F[m.f][0], sh: F[m.f][1], bg: m.bg, dark: m.dark, ink: m.ink || 'inherit',
        st0: (m.k === 'fk' && s.st === 'home') ? 'st0' : '', aria: F[m.f][0] + ': ' + m.name,
        hover: function () { if (self.state.st !== 'program' && self.state.hover !== m.k) self.setState({ hover: m.k }); },
        tap: function (e) {
          var st = self.state.st;
          var mod = e && e.currentTarget && e.currentTarget.closest ? e.currentTarget.closest('.fmt') : null;
          var touch = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: none)').matches;
          if (touch && self._3d && !self._3d.failed && mod && self._3d.want !== mod) { self._3d.activate(mod); return; }
          if (m.f === 'stand') { if (st === 'partner') return; self.go('partner', null, mod); return; }
          if (st === 'home') { self.go('explore', { hover: m.k }); return; }
          self.go('program', { ffmt: m.f, sel: null }, mod);
        } };
    });

    /* du */
    var tourKeys = ['fk', 'fn', 'fm', 'fs', 'fc'];
    var spkKeys = ['pc', 's2', 's3', 's4', 's5', 's6'];
    var tgt = null;
    if (s.st === 'home') tgt = s.hover || tourKeys[s.tour % tourKeys.length];
    else if (s.st === 'explore') tgt = s.hover || 'fk';
    else if (s.st === 'speaker') tgt = spkKeys[s.spk];
    else if (s.st === 'partner') tgt = 'fs';
    var heroPlace = (s.st === 'home' || s.st === 'explore') && tgt && tgt.charAt(0) === 'f' ? tgt : 'fk';
    var heroVerbs = { fk: 'Vortrag ansehen', fc: 'Cases kennenlernen', fm: 'Masterclass mitmachen', fn: 'Leute treffen', fs: 'Stände besuchen' };
    var heroTimes = { fk: '09:40', fc: '10:30', fm: '10:30', fn: '12:00', fs: '12:00' };
    var caps = { fk: '09:40 · Vortrag ansehen', fc: '10:30 · Cases kennenlernen', fm: '10:30 · Masterclass mitmachen', fn: '12:00 · Leute treffen', fs: '12:00 · Stände besuchen' };
    var tp = tgt && L[tgt];

    /* ctas */
    var ctaDefs = {
      home: p2 ? ['Anmelden', 'über Let’s Get Digital', null] : ['Partner werden', '', 'partner'],
      explore: ['Programm ansehen', '', 'program'],
      speaker: p2 ? ['Anmelden', 'über Let’s Get Digital', null] : ['Partner werden', '', 'partner'],
      partner: p2 ? ['Anmelden', 'über Let’s Get Digital', null] : ['Partner werden', '', null],
      program: p2 ? ['Anmelden', 'über Let’s Get Digital', null] : ['Partner werden', '', 'partner']
    };
    var cta2Defs = {
      home: p2 ? ['Programm', '', 'program'] : ['Speaker*in werden', '', 'partner'],
      speaker: p2 ? ['Programm', '', 'program'] : ['Speaker*in werden', '', 'partner'],
      partner: ['Speaker*in werden', '', null]
    };
    var faqReg = p2 ? 'Über Let’s Get Digital. Dort bekommst du Bestätigung und Zugang.' : 'Die Anmeldung startet [Datum]. Organisiert wird sie über Let’s Get Digital.';

    /* Frag D3: fester Katalog, Stichwort-Abgleich. [Klammern] = Platzhalter wie im Rest der Seite. */
    var KB = [
      { k: ['wer', 'für wen', 'zielgruppe', 'behörde', 'verwaltung', 'kommune', 'teilnehm', 'mitarbeit'], q: 'Für wen ist der Deep Dive Day?', a: 'Für Menschen aus Behörden und öffentlichen Organisationen, die die Verwaltung mit KI und neuen Arbeitsweisen verändern wollen.' },
      { k: ['ablauf', 'läuft', 'tag ab', 'uhr', 'uhrzeit', 'dauer', 'wie lange', 'beginn', 'ende'], q: 'Wie läuft der Tag ab?', a: 'Von 09:00 bis 15:30, komplett im Browser. Du wechselst zwischen Keynotes, Vorträgen, Cases, Masterclasses, Networking und Ständen.', act: ['Programm ansehen', 'program'] },
      { k: ['anmeld', 'registr', 'ticket', 'let’s get digital', "let's get digital", 'teilnahme sichern', 'platz'], q: 'Wie melde ich mich an?', a: faqReg },
      { k: ['kost', 'preis', 'gebühr', 'kostenlos', 'bezahl', 'euro', '€'], q: 'Was kostet die Teilnahme?', a: '[Antwort folgt: Kosten der Teilnahme.] Alles Weitere zur Anmeldung läuft über Let’s Get Digital.' },
      { k: ['technik', 'software', 'browser', 'install', 'app', 'zoom', 'teams', 'kamera', 'mikro'], q: 'Brauche ich Software?', a: 'Nein. Der Deep Dive Day läuft im Browser, du brauchst nur einen aktuellen Browser und eine stabile Verbindung. [Plattform wird ergänzt.]' },
      { k: ['aufzeichn', 'mediathek', 'nachschau', 'später', 'video', 'verpass'], q: 'Gibt es Aufzeichnungen?', a: 'Nach jeder Ausgabe wird das Programm zur Mediathek. Cases erscheinen zusätzlich als Artikel auf amtshelden.de.' },
      { k: ['raum', 'räume', 'parallel', 'wechsel', 'gleichzeitig'], q: 'Was heißt viele Räume?', a: 'Vier Räume laufen parallel: Main Stage, Raum 2, Werkstatt und Lounge. Du wechselst, wann du willst.', act: ['Zur Tagesstrecke', 'program'] },
      { k: ['format', 'keynote', 'vortrag', 'case', 'panel', 'masterclass', 'workshop'], q: 'Welche Formate gibt es?', a: 'Keynotes und Vorträge für Impulse, Cases und Panels mit echten Lösungen aus Behörden, Masterclasses zum Vertiefen, dazu Networking und Stände.', act: ['Formate ansehen', 'explore'] },
      { k: ['netzwerk', 'networking', 'kennenlern', 'leute', 'austausch', 'kontakt knüpf'], q: 'Kann ich Leute treffen?', a: 'Ja. In den Networking-Runden und Themenräumen sprichst du in kleinen Gruppen mit anderen aus der Verwaltung.' },
      { k: ['partner', 'sponsor', 'ausstell', 'stand ', 'stände', 'unternehmen'], q: 'Wie werde ich Partner?', a: 'Amtshelden sucht Partner und Aussteller für die erste Ausgabe. Melde dich über Mitmachen.', act: ['Partner werden', 'partner'] },
      { k: ['speaker', 'sprech', 'einreich', 'call for', 'vortragen', 'referent'], q: 'Kann ich sprechen?', a: 'Ja, wir suchen Speaker*innen mit echten Erfahrungen aus der Verwaltung. Einreichen über Mitmachen.', act: ['Speaker*in werden', 'partner'] },
      { k: ['thema', 'themen', ' ki', 'ki ', 'künstlich', 'transformation', 'ausgabe'], q: 'Worum geht es?', a: 'Ausgabe 01 heißt KI + Transformation. Ausgabe 02 widmet sich der Kommunikation [Datum].' },
      { k: ['wann', 'datum', 'termin', 'findet'], q: 'Wann ist der Deep Dive Day?', a: '[TT.MM.2027], 09:00 bis 15:30, digital.' },
      { k: ['amtshelden', 'veranstalt', 'wer steckt', 'organisier'], q: 'Wer steckt dahinter?', a: 'Der Deep Dive Day ist das digitale Konferenzformat von Amtshelden.', act: ['Über den Deep Dive Day', 'partner'] }
    ];
    var norm = function (t) { return (' ' + String(t || '').toLowerCase().replace(/[?!.,;:„“"()]/g, ' ').replace(/\s+/g, ' ') + ' '); };
    var ask = function (text) {
      var n = norm(text), best = null, sc = 0;
      KB.forEach(function (e) { var h = 0; e.k.forEach(function (w) { if (n.indexOf(w) >= 0) h += w.length > 4 ? 2 : 1; }); if (h > sc) { sc = h; best = e; } });
      self.setState({ botQ: '', botA: { q: String(text).trim(), e: sc > 0 ? best : null } });
    };
    var BA = s.botA;
    var bot = {
      q: s.botQ,
      type: function (e) { self.setState({ botQ: e.target.value }); },
      submit: function (e) { if (e && e.preventDefault) e.preventDefault(); if (String(self.state.botQ).trim()) ask(self.state.botQ); },
      has: !!BA, asked: BA ? BA.q : '', tone: BA && !BA.e ? 'miss' : '',
      a: BA ? (BA.e ? BA.e.a : 'Dazu habe ich noch keine Antwort. Schreib uns an [Kontakt-Adresse] – oder probier eine der Fragen unten.') : '',
      act: !!(BA && BA.e && BA.e.act), actLabel: BA && BA.e && BA.e.act ? BA.e.act[0] : '',
      actGo: function (e) { if (BA && BA.e && BA.e.act) self.go(BA.e.act[1], null, e && e.currentTarget); },
      chips: ['Was kostet die Teilnahme?', 'Brauche ich Software?', 'Gibt es Aufzeichnungen?', 'Wie werde ich Partner?'].map(function (c) { return { label: c, ask: function () { ask(c); } }; })
    };
    var mk = function (d) { d = d || ['', '', null]; return { label: d[0], note: d[1], go: function (e) { if (d[2]) self.go(d[2], null, e && e.currentTarget); } }; };
    var cta = mk(ctaDefs[s.st]), cta2 = mk(cta2Defs[s.st]);
    var nxt = order[idx + 1];
    var hint = nxt ? { label: names[nxt], go: function (e) { self.go(nxt, null, e && e.currentTarget); } } : { label: 'Zum Start', go: function (e) { self.go('home', null, e && e.currentTarget); } };

    var step = function (dir) {
      var now = Date.now();
      if (now < self._lock) return;
      var i = order.indexOf(self.state.st) + dir;
      if (i < 0 || i >= order.length) return;
      self._lock = now + 1300;
      self.go(order[i]);
    };
    var spkSel = {}, spkPick = {};
    [0, 1, 2, 3, 4, 5].forEach(function (i) {
      spkSel[i] = (s.st === 'speaker' && s.spk === i) ? 'sel' : '';
      spkPick[i] = function () { if (self.state.st !== 'speaker') self.go('speaker', { spk: i }); else self.setState({ spk: i }); };
    });
    var spkSess = ['09:40 · Keynote', '10:30 · Case', '10:30 · Masterclass', '11:15 · Panel', '10:30 · Vortrag', '15:00 · Abschluss-Keynote'];
    var spkSessId = ['c', 'd', 'f', 'h', 'e', 'n'];

    return {
      st: s.st, bp: bp, cols: cols, rows: rows, base: base, minrow: minrow,
      rootRef: this._rootRef, stageRef: this._stageRef,
      introCls: s.intro === 0 ? '' : (s.intro === 2 ? 'out' : 'out gone'), bootCls: s.intro < 2 ? 'booting' : '', skipIntro: function () { self.endIntro(); }, ilogoRef: this._ilogoRef,
      depthCls: (bp === 'desk' && !(typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) ? 'depth' : '',
      lockSpan: bp === 'desk' ? 4 : (bp === 'tab' ? 5 : 3), ctaSpan: bp === 'mob' ? 1 : 2, ctaBarLabel: bp === 'mob' ? (p2 ? 'Anmelden' : 'Partner') : (p2 ? 'Anmelden' : 'Partner werden'), idxSpan: bp === 'desk' ? 1 : 1,
      P: P, fmts: fmts, heroPlace: heroPlace, heroMeta: heroTimes[heroPlace] + ' · ' + { fk: 'Keynote', fc: 'Case', fm: 'Masterclass', fn: 'Networking', fs: 'Stände' }[heroPlace], heroVerb: heroVerbs[heroPlace],
      stNo: '0' + (idx + 1), stName: names[s.st],
      on: { home: s.st === 'home' ? 'on' : '', explore: s.st === 'explore' ? 'on' : '', program: s.st === 'program' ? 'on' : '', speaker: s.st === 'speaker' ? 'on' : '', partner: s.st === 'partner' ? 'on' : '' },
      nav: { home: navTo('home'), explore: navTo('explore'), program: navTo('program'), speaker: navTo('speaker'), partner: navTo('partner') },
      ctaBar: p2 ? { label: 'Anmelden', go: function (e) { if (e && e.preventDefault) e.preventDefault(); } } : { label: 'Partner werden', go: navTo('partner') },
      cta: cta, cta2: cta2, hint: hint,
      progNote: p2 ? 'Der Tag als Strecke: links nach rechts die Zeit, untereinander die Räume. Tippe auf einen Programmpunkt.' : 'Vorläufiger Ablauf, Zeiten ab 10:30 und Themen sind exemplarisch. Schieb die Uhr, um den Tag live zu sehen.',
      spkNote: p2 ? 'Alle Speaker*innen des Tages.' : 'Die ersten Stimmen. Weitere folgen.',
      partnerNote: p2 ? 'Partner und Aussteller der Ausgabe 01.' : 'Amtshelden sucht Partner, Aussteller und Speaker*innen für die erste Ausgabe.',
      faqReg: faqReg, bot: bot,
      logos: [0, 1, 2, 3, 4, 5, 6, 7].map(function (i) { return p2 ? { label: '[Partner-Logo]', bg: 'transparent' } : { label: i === 0 ? 'Hier entsteht der Partnerbereich der Ausgabe 01.' : '', bg: i === 0 ? 'var(--d3-white)' : (i % 3 === 1 ? 'var(--d3-bg)' : 'transparent') }; }),
      jItems: jItems, jTicks: jTicks, jn: jn, ex: ex, jrRef: this._jrRef, jScrollRef: this._jScrollRef,
      jWheel: function (e) {
        var el = e.currentTarget, ax = Math.abs(e.deltaX) > Math.abs(e.deltaY), d = ax ? e.deltaX : e.deltaY, max = el.scrollWidth - el.clientWidth;
        if ((d > 0 && el.scrollLeft < max - 1) || (d < 0 && el.scrollLeft > 0)) { if (!ax) el.scrollLeft += d; e.stopPropagation(); }
      },
      fFilters: fList.map(function (f) { var on = s.ffmt === f[0]; return { label: f[1], sh: f[2], on: on ? 'on' : '', pressed: on, pick: function () { self.setState({ ffmt: f[0] }); } }; }),
      tFilters: tList.map(function (t) { var on = s.ftopic === t; return { label: t === 'all' ? 'Alle Themen' : t, on: on ? 'on' : '', pressed: on, pick: function () { self.setState({ ftopic: t }); } }; }),
      spkSel: spkSel, spkPick: spkPick,
      sd: { no: '0' + (s.spk + 1), session: spkSess[s.spk] + ' im Programm', toProg: function (e) { self.go('program', { sel: spkSessId[self.state.spk], ffmt: 'all', ftopic: 'all' }, e && e.currentTarget); } },
      grainDisplay: (this.props.grain ?? true) ? 'block' : 'none',
      stopWheel: function (e) {
        var el = e.currentTarget, down = e.deltaY > 0;
        if ((down && el.scrollTop + el.clientHeight < el.scrollHeight - 1) || (!down && el.scrollTop > 0)) e.stopPropagation();
      },
      onWheel: function (e) {
        if (Math.abs(e.deltaY) < 30) return;
        var st = self._stage, down = e.deltaY > 0;
        if (st && ((down && st.scrollTop + st.clientHeight < st.scrollHeight - 2) || (!down && st.scrollTop > 2))) return;
        step(down ? 1 : -1);
      },
      onMove: function (e) {
        if (self.state.bp === 'mob') return;
        var r = e.currentTarget.getBoundingClientRect();
        var nx = ((e.clientX - r.left) / r.width) * 2 - 1, ny = ((e.clientY - r.top) / r.height) * 2 - 1;
        self._nx = nx; self._ny = ny;
        if (self._raf) return;
        self._raf = requestAnimationFrame(function () { self._raf = 0; if (self._root) { self._root.style.setProperty('--mx', self._nx.toFixed(3)); self._root.style.setProperty('--my', self._ny.toFixed(3)); } });
      }
    };
  }

  render() {
    return <D3View v={this.renderVals()} />;
  }
}

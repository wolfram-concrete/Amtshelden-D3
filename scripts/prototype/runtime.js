/* Minimaler Renderer für das .dc.html-Template-Format (Holes, sc-for, sc-if) auf React. */
(function(){
  var h=React.createElement;
  var EV={onclick:'onClick',onmouseenter:'onMouseEnter',onmouseleave:'onMouseLeave',onwheel:'onWheel',onmousemove:'onMouseMove',onsubmit:'onSubmit',ontouchstart:'onTouchStart',ontouchend:'onTouchEnd',onchange:'onChange',oninput:'onInput'};
  var KEEP=/^(aria-|data-)/;
  function camel(s){return s.replace(/-([a-z])/g,function(m,c){return c.toUpperCase();});}
  function lookup(path,scope){
    path=path.trim();
    if(path==='true')return true; if(path==='false')return false; if(path==='null')return null;
    if(/^-?\d+(\.\d+)?$/.test(path))return parseFloat(path);
    if(/^'.*'$/.test(path))return path.slice(1,-1);
    var parts=path.split('.'),v=scope;
    for(var i=0;i<parts.length;i++){ if(v==null)return undefined; v=v[parts[i]]; }
    return v;
  }
  var HOLE=/\{\{\s*([^}]+?)\s*\}\}/g, WHOLE=/^\{\{\s*([^}]+?)\s*\}\}$/;
  function interp(str,scope){ return str.replace(HOLE,function(m,p){var v=lookup(p,scope);return v==null?'':String(v);}); }
  function val(str,scope){ var m=str.match(WHOLE); return m?lookup(m[1],scope):interp(str,scope); }
  function styleObj(s){
    var o={}; s.split(';').forEach(function(d){ var i=d.indexOf(':'); if(i<0)return; var k=d.slice(0,i).trim(), v=d.slice(i+1).trim(); if(!k)return; o[k.indexOf('--')===0?k:camel(k)]=v; }); return o;
  }
  function props(el,scope,key){
    var p={key:key}, svg=el.namespaceURI==='http://www.w3.org/2000/svg';
    for(var i=0;i<el.attributes.length;i++){
      var a=el.attributes[i], n=a.name, raw=a.value;
      if(n==='class'){p.className=interp(raw,scope).replace(/\s+/g,' ').trim();continue;}
      if(n==='for'){p.htmlFor=interp(raw,scope);continue;}
      if(n==='style'){p.style=styleObj(interp(raw,scope));continue;}
      if(EV[n]){var f=val(raw,scope); if(typeof f==='function')p[EV[n]]=f; continue;}
      if(n==='ref'){var r=val(raw,scope); if(r)p.ref=r; continue;}
      var v=val(raw,scope);
      if(KEEP.test(n)){p[n]=(typeof v==='boolean')?String(v):v;continue;}
      if(svg&&n.indexOf('-')>0)n=camel(n);
      if(n==='tabindex')n='tabIndex'; if(n==='readonly')n='readOnly'; if(n==='maxlength')n='maxLength';
      p[n]=v;
    }
    return p;
  }
  function kids(node,scope){
    var out=[],cs=node.childNodes;
    for(var i=0;i<cs.length;i++){var r=render(cs[i],scope,i); if(r==null)continue; if(Array.isArray(r))out.push.apply(out,r); else out.push(r);}
    return out;
  }
  function render(n,scope,key){
    if(n.nodeType===3){ var t=n.nodeValue; if(!t.trim())return null; return interp(t,scope); }
    if(n.nodeType!==1)return null;
    var tag=n.localName;
    if(tag==='sc-for'){
      var list=val(n.getAttribute('list'),scope)||[], as=n.getAttribute('as')||'item';
      return list.map(function(it,ix){ var s=Object.create(scope); s[as]=it; s.$index=ix; return h(React.Fragment,{key:key+'_'+ix},kids(n,s)); });
    }
    if(tag==='sc-if'){ return val(n.getAttribute('value'),scope)?h(React.Fragment,{key:key},kids(n,scope)):null; }
    var tagName=n.namespaceURI==='http://www.w3.org/2000/svg'?n.tagName:tag;
    var c=kids(n,scope);
    return h.apply(null,[tagName,props(n,scope,key)].concat(c.length?c:[]));
  }
  var root=document.importNode(document.getElementById('tpl').content,true);
  window.DCLogic=class extends React.Component{
    render(){ var v=this.renderVals?this.renderVals():{}; return h(React.Fragment,null,kids(root,v)); }
  };
  window.__DC_MOUNT__=function(C){
    ReactDOM.createRoot(document.getElementById('root')).render(h(C,window.__DC_DEFAULTS__||{}));
  };
})();

const fs=require('fs');
const src=fs.readFileSync(process.argv[2],'utf8');
const out=process.argv[3];
const helmet=src.match(/<helmet>([\s\S]*?)<\/helmet>/)[1];
let tpl=src.match(/<x-dc>([\s\S]*?)<\/x-dc>/)[1].replace(/<helmet>[\s\S]*?<\/helmet>/,'').trim();
const sm=src.match(/<script type="text\/x-dc" data-dc-script data-props=(?:'([^']*)'|"([^"]*)")>([\s\S]*?)<\/script>/);
const props=JSON.parse((sm[1]??sm[2]).replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,'&'));const code=sm[3];
const map={'98e908777a6ce188713344468d23a9bd':'p01','9decf5a8e398cd0dc5fd92a958984bea':'p02','c111eb0a0ddd902b6e60881bcca3f4f8':'p03','3c130c3512412f2f7ef3681f6b8c0092':'p04','5319da926d88bc3da618a5548c1a7e2f':'p05','9313403364efa784c3d646ede2eb7604':'p06','ed54bddf64811e958622c804c955b3d3':'p07'};
// Bildwelt (Canvas-Assets) -> public/bildwelt/
// 3D-Standbilder der Format-Zeichen (v7)
const still={'77542a5ba9e2905b7b2303a3e2893565':'fk','cfa84faf8f69e4d49a592d82fe4a5dbc':'fc','40ab1d1779ad2efc608a76382e97cb6a':'fm','9e09a49ab311ce9a4f7433ae507becf5':'fn','39688cdf81f0f3dd6c2b57f86d2ea5eb':'fs'};
const bild={'b9dbfe3583841f16c5eab821d9d8b606':'moment','3a42ae62d726dc78688b3533aa28784f':'portrait','d067191351eac9a6cee031d9e6377515':'focus','d620b9305d522459351839f5eb9f7c44':'exchange','36b57eb707c2c135d136451c2f4c8b0e':'explorer','dbb364f1d4d0781054a26e6cb359420e':'connection','7b309914c815330de68249b35626c17b':'speaker','35420064cf3edf05a1a77cfdb2442dad':'space','308878e2bf45e2dc4ab6146c01768370':'about','93ceb67090ec6804918b62b94f9f9cfd':'moment','25fae1ee7b4e2360f82780ef92474e94':'portrait','4cc6fa87aa6da5b3530e1849c20493a8':'focus','1903b319b4944cc7b79dc47efe2d2c7c':'exchange','22f1fd011889ce9a747c17d63deadb30':'explorer','ecb49eb6cc82e70c748f1beb7843cdd2':'connection','cda17e779e11afd463a480aaee19badb':'speaker','0982c5a62984084b65b5b9e8f2148afd':'space'};
const fix=s=>s.replace(/\/_blob\/([0-9a-f]{32})/g,(m,id)=>still[id]?'/bildwelt/d3-3d-'+still[id]+'.png':bild[id]?'/bildwelt/d3-'+bild[id]+'.jpg':'/people/'+map[id]+'.jpg');
tpl=fix(tpl); const code2=fix(code);
const defaults={};for(const k in props){if(k[0]!=='$')defaults[k]=props[k].default;}
const runtime=fs.readFileSync(__dirname+'/runtime.js','utf8');
const html=`<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<meta name="description" content="D3 Deep Dive Day – das digitale B2G-Event von Amtshelden. Mosaic Interface v5, interner Prototyp.">
<title>D3 Deep Dive Day · Mosaic Interface v5 (Prototyp)</title>
${helmet.trim()}
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js"></script>
</head>
<body>
<!-- Generiert aus dem Design-Canvas (D3App2.dc.html). Nicht von Hand bearbeiten: scripts/prototype/gen.js -->
<div id="root"></div>
<template id="tpl">
${tpl}
</template>
<script>
window.__DC_DEFAULTS__=${JSON.stringify(defaults)};
${runtime}
</script>
<script>
(function(){
${code2}
window.__DC_MOUNT__(Component);
})();
</script>
</body>
</html>
`;
fs.writeFileSync(out,html);console.log('written',out,html.length);

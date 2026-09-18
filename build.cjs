const fs=require('node:fs');
const path=require('node:path');
const esbuild=require('esbuild');
(async()=>{
  const root=__dirname;
  let source=fs.readFileSync(path.join(root,'src/b9-companion.js'),'utf8');
  const result=await esbuild.build({stdin:{contents:source,resolveDir:path.join(root,'src'),sourcefile:'b9-companion.js',loader:'js'},loader:{'.wav':'dataurl','.mp3':'dataurl'},bundle:true,format:'iife',minify:true,legalComments:'inline',write:false,nodePaths:[path.join(root,'node_modules')]});
  const code=result.outputFiles[0].text;
  fs.mkdirSync(path.join(root,'dist'),{recursive:true});
  fs.writeFileSync(path.join(root,'dist/b9-companion.js'),code);
  const html=fs.readFileSync(path.join(root,'src/demo.html'),'utf8').replace('/* __B9_BUNDLE__ */',()=>code.replace(/<\/script/gi,'<\\/script'));
  fs.writeFileSync(path.join(root,'dist/classic-b9-demo.html'),html);
  const remote=fs.readFileSync(path.join(root,'src/remote-demo.html'),'utf8');
  fs.writeFileSync(path.join(root,'dist/classic-b9-remote.html'),remote.replace('/* __B9_BUNDLE__ */',()=>code.replace(/<\/script/gi,'<\\/script')));
  fs.writeFileSync(path.join(root,'dist/embed-example.html'),remote.replace('<script>/* __B9_BUNDLE__ */</script>','<script defer src="./b9-companion.js"></script>'));
  console.log(JSON.stringify({bundleBytes:Buffer.byteLength(code),htmlBytes:Buffer.byteLength(html),animatedCompatibility:true}));
})();

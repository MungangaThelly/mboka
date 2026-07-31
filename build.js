const fs=require('fs');
const path=require('path');
const output=path.join(__dirname,'dist');
const files=['index.html','privacy.html','styles.css','lessons.css','sprint.css','profile.css','memory.css','i18n.css','teacher.css','provinces.css','map.css','levels.css','audio.css','daily.css','pwa.css','hardening.css','app.js','content-en.js','i18n.js','pwa.js','sw.js','manifest.webmanifest','icon.svg'];
fs.rmSync(output,{recursive:true,force:true});
fs.mkdirSync(output,{recursive:true});
for(const file of files)fs.copyFileSync(path.join(__dirname,file),path.join(output,file));
console.log(`Built ${files.length} static Mboka assets in dist/`);

const fs=require('fs');
const path=require('path');
const output=path.join(__dirname,'dist');
const files=['index.html','privacy.html','styles.css','lessons.css','lingala.css','achievements.css','kingdoms.css','presidency.css','heroes.css','communities.css','food.css','environment.css','resources.css','creativity.css','sprint.css','profile.css','memory.css','i18n.css','teacher.css','provinces.css','map.css','levels.css','audio.css','daily.css','pwa.css','hardening.css','pilot.css','math.css','music-game.css','app.js','content-en.js','i18n.js','math.js','music-game.js','pwa.js','sw.js','manifest.webmanifest','icon.svg','okapi.jpg','music-C.wav','music-Cs.wav','music-D.wav','music-Ds.wav','music-E.wav','music-F.wav','music-Fs.wav','music-G.wav','music-Gs.wav','music-A.wav','music-As.wav','music-B.wav'];
fs.rmSync(output,{recursive:true,force:true});
fs.mkdirSync(output,{recursive:true});
for(const file of files)fs.copyFileSync(path.join(__dirname,file),path.join(output,file));
console.log(`Built ${files.length} static Mboka assets in dist/`);

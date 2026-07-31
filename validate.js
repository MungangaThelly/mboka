const fs=require('fs');
const vm=require('vm');
function assert(condition,message){if(!condition)throw new Error(message)}
const required=['index.html','privacy.html','app.js','i18n.js','content-en.js','sw.js','manifest.webmanifest','vercel.json','hardening.css','achievements.css','kingdoms.css','icon.svg'];
required.forEach(file=>assert(fs.existsSync(file),`Missing required file: ${file}`));
const manifest=JSON.parse(fs.readFileSync('manifest.webmanifest','utf8'));
const vercel=JSON.parse(fs.readFileSync('vercel.json','utf8'));
assert(manifest.start_url==='./index.html','Manifest start URL is incorrect');
const globalHeaders=vercel.headers.find(entry=>entry.source==='/(.*)').headers;
const headerNames=new Set(globalHeaders.map(header=>header.key));
['Content-Security-Policy','X-Content-Type-Options','Referrer-Policy','Permissions-Policy','X-Frame-Options','Cross-Origin-Opener-Policy'].forEach(name=>assert(headerNames.has(name),`Missing security header: ${name}`));
const html=fs.readFileSync('index.html','utf8');
assert(!/https?:\/\//.test(html),'index.html contains an external network dependency');
assert(html.includes('privacy.html'),'Privacy link is missing');
assert(html.includes('id="privacyLink"'),'Privacy link must have a stable translation target');
assert(!fs.readFileSync('i18n.js','utf8').includes("'footer>p:nth-of-type(2)'"),'Localization must not overwrite the privacy-link container');
assert(html.includes('id="pilotForm"'),'Anonymous pilot form is missing');
assert(!/<input[^>]+type=["'](?:email|password)["']/i.test(html),'Pilot must not request email or passwords');
const app=fs.readFileSync('app.js','utf8');
assert(!/\beval\s*\(|new\s+Function\s*\(/.test(app),'Unsafe dynamic code execution found');
assert((app.match(/name:'/g)||[]).length>=4&&app.includes('achievementProfiles'),'Achievement profiles are incomplete');
assert(app.includes('kingdomProfiles')&&['Kongo','Luba','Lunda','Kuba'].every(name=>app.includes(`name:'${name}'`)),'Traditional kingdom profiles are incomplete');
for(const [name,count] of [['provinces',26],['provinceDetails',26],['mapPositions',26]]){const match=app.match(new RegExp(`const ${name} =? ?\\[(.*?)\\];`,'s'));assert(match,`Could not find ${name}`);const actual=name==='mapPositions'?(match[1].match(/\[\d+,\d+\]/g)||[]).length:(match[1].match(/\['/g)||[]).length;assert(actual===count,`${name} has ${actual} entries; expected ${count}`)}
for(const name of ['explorerQuestions','masterQuestions']){const match=app.match(new RegExp(`const ${name}=\\[(.*?)\\];`,'s'));assert(match&&((match[1].match(/\{topic:/g)||[]).length===10),`${name} must contain 10 questions`)}
const sandbox={window:{}};vm.runInNewContext(fs.readFileSync('content-en.js','utf8'),sandbox);const en=sandbox.window.enContent;
assert(en.provinces.length===26,'English province profiles must contain 26 entries');assert(en.questions.length===10&&en.levelQuestions.explorer.length===10&&en.levelQuestions.master.length===10,'English quiz banks must contain 10 questions each');
assert(en.provinceProfiles.length===26&&en.provinceProfiles.every(profile=>profile.length===5),'English cultural province profiles must contain 26 complete entries');
const profileMatch=app.match(/const provinceProfiles = \[(.*?)\];/s);assert(profileMatch&&((profileMatch[1].match(/^  \[/gm)||[]).length===26),'French cultural province profiles must contain 26 entries');
const build=fs.readFileSync('build.js','utf8'),worker=fs.readFileSync('sw.js','utf8');
const buildFiles=[...build.matchAll(/'([^']+)'/g)].map(match=>match[1]).filter(file=>fs.existsSync(file)&&fs.statSync(file).isFile());
for(const file of buildFiles)assert(worker.includes(`./${file}`)||file==='sw.js',`Service worker does not cache build asset: ${file}`);
console.log('Mboka validation passed: security, privacy, content counts, and offline assets.');

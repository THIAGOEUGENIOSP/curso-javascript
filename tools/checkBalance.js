const fs = require('fs');
const s = fs.readFileSync(process.argv[2] || 'courseData.js', 'utf8');
const pairs = {'(':')','{':'}','[':']'};
const open = '({['; const close = ')}]';
let stack = [];
let inSingle=false, inDouble=false, inBack=false, inLineComment=false, inBlockComment=false;
for(let i=0;i<s.length;i++){
  const ch=s[i]; const prev=s[i-1];
  if(inLineComment){ if(ch==='\n') inLineComment=false; continue; }
  if(inBlockComment){ if(prev==='*' && ch==='/') inBlockComment=false; continue; }
  if(!inSingle && !inDouble && !inBack){ if(ch==='/' && s[i+1]==='/'){ inLineComment=true; continue; } if(ch==='/' && s[i+1]==='*'){ inBlockComment=true; continue; } }
  if(!inDouble && !inBack && ch==="'") { inSingle = !inSingle; continue; }
  if(!inSingle && !inBack && ch==='"') { inDouble = !inDouble; continue; }
  if(!inSingle && !inDouble && ch==='`') { inBack = !inBack; continue; }
  if(inSingle||inDouble||inBack) continue;
  if(open.includes(ch)){ stack.push({ch, i, line: s.slice(0,i).split(/\n/).length}); }
  else if(close.includes(ch)){
    if(stack.length===0){ console.log('Unmatched closing',ch,'at idx',i,'line', s.slice(0,i).split(/\n/).length); process.exit(0); }
    const top=stack.pop();
    if(pairs[top.ch]!==ch){ console.log('Mismatch at idx',i,'line',s.slice(0,i).split(/\n/).length,'expected',pairs[top.ch],'got',ch,'top was',top.ch); const start=Math.max(0,i-120); const end=Math.min(s.length,i+120); console.log('Context:\n'+s.slice(start,end)); process.exit(0); }
  }
}
if(stack.length>0){ const last=stack[stack.length-1]; console.log('Unclosed', last.ch, 'at idx', last.i, 'line', last.line); const start=Math.max(0,last.i-200); const end=Math.min(s.length,last.i+200); console.log('Context:\n'+s.slice(start,end)); } else { console.log('All balanced'); }
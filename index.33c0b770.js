document.querySelector("#gallery"),document.querySelector(".watched"),document.querySelector(".queue");const e=document.querySelector(".com"),t=document.querySelector(".coma"),o=document.querySelector(".comd"),c=(document.querySelector(".dra"),document.querySelector(".dram"),document.querySelector(".drama"),document.querySelector(".a"),document.querySelector(".t"),document.querySelector(".r"),document.querySelector(".b")),r=document.querySelector(".v");const l=[{title:"The Last Kingdom",author:"Bernard Cornwell",rating:8.38},{title:"На берегу спокойных вод",author:"Роберт Шекли",rating:8.51},{title:"Сон смешного человека",author:"Федор Достоевский",rating:7.75}];e.addEventListener("click",(e=>{const t=localStorage.getItem("watched");try{const e=t?JSON.parse(t):[];e.push(l[0]),console.log(e);const o=JSON.stringify(e);localStorage.setItem("watched",o)}catch(e){console.log("parsing error")}})),c.addEventListener("click",(()=>{const e=JSON.parse(localStorage.getItem("watched"));console.log(e);const t=l[0].title;console.log(t);const o=e.findIndex((e=>e.title===t));console.log(o);const c=e.splice(o,1);console.log(c);const r=JSON.stringify(e);localStorage.setItem("watched",r)})),r.addEventListener("click",(()=>{const e=JSON.parse(localStorage.getItem("watched"));console.log(e);const t=l[1].title;console.log(t);const o=e.findIndex((e=>e.title===t));console.log(o);const c=e.splice(o,1);console.log(c);const r=JSON.stringify(e);localStorage.setItem("watched",r)})),t.addEventListener("click",(e=>{const t=localStorage.getItem("watched");try{const e=t?JSON.parse(t):[];e.push(l[1]);const o=JSON.stringify(e);localStorage.setItem("watched",o)}catch(e){console.log("parsing error")}})),o.addEventListener("click",(()=>{const e=localStorage.getItem("watched");try{const t=e?JSON.parse(e):[];t.push(l[2]);const o=JSON.stringify(t);localStorage.setItem("watched",o)}catch(e){console.log("parsing error")}}));
//# sourceMappingURL=index.33c0b770.js.map

import{i as o}from"./globalStuff-BI-Mj6Qi.js";let t=0,l,e;function d(){e=Array.from(document.querySelectorAll("#about-me-left button")),e.forEach((r,n)=>{r.classList.add("deselected"),r.addEventListener("click",()=>a(n))});var s=document.querySelectorAll("#about-me-right h4");if(l=Array.from(s,r=>r.textContent||""),e.length!==l.length)throw new Error("The number of selections and texts are not equal");t=0,e[t].classList.remove("deselected"),e[t].classList.add("selected"),c()}function a(s){s!==t&&(e[t].classList.remove("selected"),e[t].classList.add("deselected"),e[s].classList.remove("deselected"),e[s].classList.add("selected"),t=s,c())}function c(){document.querySelector("#about-me-right").innerHTML=`
    <h4>
        ${l[t].replace(/\n/g,"<br>")}
    </h4>
    `}document.addEventListener("DOMContentLoaded",()=>{o(),d()});

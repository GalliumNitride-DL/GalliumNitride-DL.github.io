import{i as c}from"./globalStuff-CG6H985a.js";let t=0,o,e;function a(){e=Array.from(document.querySelectorAll("#about-me-left button")),e.forEach((l,n)=>{l.addEventListener("click",()=>i(n))});var r=document.querySelectorAll("#about-me-right h4");if(o=Array.from(r,l=>l.textContent||""),e.length!==o.length)throw new Error("The number of selections and texts are not equal");t=0,e[t].classList.add("selected"),s()}function i(r){r!==t&&(e[t].classList.remove("selected"),e[t].classList.add("deselected"),e[r].classList.remove("deselected"),e[r].classList.add("selected"),t=r,s())}function s(){document.querySelector("#about-me-right").innerHTML=`
    <h4>
        ${o[t]}
    </h4>
    `}c();a();

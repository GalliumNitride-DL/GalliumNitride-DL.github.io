(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();let a=0;const r=document.querySelector("nav");function l(){window.addEventListener("scroll",()=>{let o=window.scrollY;o>a?(r.classList.remove("nav-in","nav-out"),r.classList.add("nav-out")):(r.classList.add("nav-in","nav-out"),r.classList.remove("nav-out")),a=o})}function u(){document.querySelector("nav").innerHTML=`
        <span class="nav-label">GaN's WEBPAGE</span>
            <div class="nav-button">
                <a href="/index.html">Hello World!</a>|
                <a href="#frontpage">About Me</a>|
                <a href="/education.html">Educational Background</a>|
                <a href="#frontpage">Aspirations</a>
            </div>
        `,l(),document.querySelector("footer").innerHTML=`
        <h6>2024.11 | GaN's webpage.</h6>
    `}export{u as i};

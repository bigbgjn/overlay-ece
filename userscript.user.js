// ==UserScript==
// @name         Inscryption r/place
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  stoat
// @author       oralekin (stoatified by Jeck0_0)
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://cdn.discordapp.com/attachments/912039346566201394/960536068971720704/ece_pixel.png
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("ece")[0].shadowRoot.children[0].getElementsByTagName("ece")[0].shadowRoot.children[0].appendChild(
        (function () {
            if (!Date.now) {
                Date.now = function() { return new Date().getTime(); }
            }
            const i = document.createElement("img");
            i.src = "https://cdn.discordapp.com/attachments/912039346566201394/960536068971720704/ece_pixel.png";
            i.style = "position: absolute;left: 1471;top: 300px;image-rendering: pixelated;width: 2000px;height: 2000px;";
            i.id = "mcss-overlay"
            i.setAttribute("vis",1)
            console.log(i);
            return i;
        })())

            document.getElementsByTagName("body")[0].appendChild(
        (function () {
            const i = document.createElement("button");
            i.style = "position: fixed;left: 1471px; background: #fff; top: 50%;width: 2000px;height: 2000px;";
            i.innerHTML = "ECE"
            i.onclick = function() {
                const img = document.getElementsByTagName("ece")[0].shadowRoot.children[0].getElementsByTagName("ece")[0].shadowRoot.querySelector("#mcss-overlay")
                if (img.getAttribute("vis") == "1") {
                    img.setAttribute("vis",0)
                    img.style.opacity  = 0
                } else {

                    img.setAttribute("vis",1)
                    img.style.opacity  = 1
                }
            }
            console.log(i);
            return i;
        })())

    }, false);

}

"use strict";

function loadScript(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    setTimeout(() => {
      document.head.append(script);
    }, 5000);
  });
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js")
  .then(
    (script) => {
      console.log(`${script.src} is loaded!`);
    },
    (error) => {
      console.log(`${error.message} is loaded!`);
    }
  )
  .then((script) => {
    console.log("Another succes handler...");
  });

"use strict";
const AsciiDoctor = require('@asciidoctor/core');
const $ = require('jquery');
const seisho = (selector, options) => {
    options = options || {};
    if(Array.isArray(selector)) {
        selector.forEach( item => seisho(item, options) );
    } else if(typeof(selector) === "string") {
        $(selector).each( function() { seisho(this, options); } );
    } else {
        const outputElement = document.createElement("DIV");
        if(selector instanceof HTMLElement) {
            const asciidoctor = AsciiDoctor();
            const element = selector;
            const parent = element.parentNode;
            try {
                outputElement.innerHTML = asciidoctor.convert(element.innerHTML);
                parent.insertBefore(outputElement, element.nextElementSibling);
                if(options.removeSource) {
                    parent.removeChild(element);
                }
            } catch(err) {
                outputElement.innerHTML = `Error: Conversion was failed ${err.message}`;
                parent.insertBefore(outputElement, element.nextElementSibling);
            }
        } else {
            outputElement.innerHTML =
                `No HTML element supplied. The name of the constructor is ${
                    selector.constructor.name}`;
            document.appendChild(outputElement);
        }
    }
};
window.seisho = seisho;
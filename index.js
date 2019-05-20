"use strict";

const AsciiDoctor = require('@asciidoctor/core');
const Miceroux = {};
window.Miceroux = Miceroux;
Miceroux.convertIndex = 0;

/**
 * Convert asciidoc document contained in HTML elements.
 * 
 * @param {string|Array<HTMLElement>|HTMLElement} sourceRef A specifier to the
 *      elements that has an AsciiDoc as its innerHTML.
 * @param {object|undefined} options Options to change a behavior. See follow-
 * ing schema:
 * ```yaml
 * type: object
 * properties:
 *   replace:
 *     type: boolean
 *     description: Specify whether the source element will be removed or not.
 * ```
 * @returns {undefined}
 */
Miceroux.asciidoc = (sourceRef, options) => {
    options = options || {};
    if(typeof(sourceRef) === "string") {
        sourceRef = Array.from(document.querySelectorAll(sourceRef));
    }
    if(Array.isArray(sourceRef)) {
        sourceRef.forEach( item => convert(item, options) );
    } else {
        convert(sourceRef, options);
    }
};

const convert = (element, options) => {
    element.id = element.id || newConvertId();
    const outputElement = document.createElement("DIV");
    outputElement.classList.add("miceroux", "result", "type-asciidoc");
    outputElement.setAttribute("src", element.id);

    if(!(element instanceof HTMLElement)) {
        outputElement.innerHTML =
            `No HTML element supplied. The name of the constructor is ${
                element.constructor.name}`;
        document.appendChild(outputElement);
        return;
    }
    const asciidoctor = AsciiDoctor();
    const parent = element.parentNode;
    const asciidoc = element.innerHTML.replace(/^\s*/, "");
    try {
        outputElement.innerHTML = asciidoctor.convert(asciidoc);
        parent.insertBefore(outputElement, element.nextElementSibling);
        if(options.replace) {
            parent.removeChild(element);
        }
    } catch(err) {
        outputElement.innerHTML = `Error: Conversion was failed ${
            err.message}`;
        parent.insertBefore(outputElement, element.nextElementSibling);
    }
};
const newConvertId = () => {
    const id = `miceroux${Miceroux.convertIndex}`;
    ++Miceroux.convertIndex;
    return id;
};

/**
 * @param {string} query
 * @return {HTMLButtonElement}
 */
const button = query => {
    return document.querySelector("button" + query)
}

/**
 * @param {string} query
 * @return {Array.<HTMLButtonElement>}
 */
const buttons = query => {
    return Array.from(document.querySelectorAll("button" + query))
}


/**
 * @param {string} query
 * @return {HTMLDivElement}
 */
const div = query => {
    return document.querySelector("div" + query)
}


/**
 * @param {string} query
 * @return {HTMLSpanElement}
 */
const span = query => {
    return document.querySelector("span" + query)
}

/**
 * @param {string} query
 * @return {Array.<HTMLSpanElement>}
 */
const spans = query => {
    return Array.from(document.querySelectorAll("span" + query))
}

/**
 * Toggles class of element
 * @param {string} cls
 */
const toggle = cls => (/** @type {HTMLElement}*/ elem) => {
    if (hasClass(cls)(elem)) {
        removeClasses(elem)(cls)
    } else {
        addClasses(elem)(cls)
    }
}

/**
 * 
 * @param {string} query
 * @returns {SVGCircleElement}
 */

const circle = query => document.querySelector("circle" + query)

/**
 * 
 * @param {string} query 
 * @returns {SVGEllipseElement}
 */

const ellipse = query => document.querySelector("ellipse" + query)

/**
 * 
 * @param {string} query 
 * @returns {SVGElement}
 */

const svg = query => document.querySelector("svg" + query)

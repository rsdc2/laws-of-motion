import { hasClass, removeClasses } from "./elementAttributes.js"

import { addClasses } from "./elementAttributes.js"

/**
 * @param {string} query
 * @return {HTMLButtonElement}
 */
export const button = query => {
    return document.querySelector("button" + query)
}

/**
 * @param {string} query
 * @return {Array.<HTMLButtonElement>}
 */
export const buttons = query => {
    return Array.from(document.querySelectorAll("button" + query))
}


/**
 * 
 * @param {string} query
 * @returns {SVGCircleElement}
 */

export const circle = query => document.querySelector("circle" + query)

/**
 * @param {string} query
 * @return {HTMLDivElement}
 */
export const div = query => {
    return document.querySelector("div" + query)
}


/**
 * 
 * @param {string} query 
 * @returns {SVGEllipseElement}
 */

export const ellipse = query => document.querySelector("ellipse" + query)

/**
 * Input element query
 * @param {string} query 
 * @returns 
 */
export const input = query => document.querySelector("input" + query)

/**
 * Input elements query
 * @param {string} query 
 * @returns 
 */
export const inputs = query => document.querySelectorAll("input" + query)


/**
 * @param {string} query
 * @return {HTMLSpanElement}
 */
export const span = query => {
    return document.querySelector("span" + query)
}

/**
 * @param {string} query
 * @return {Array.<HTMLSpanElement>}
 */
export const spans = query => {
    return Array.from(document.querySelectorAll("span" + query))
}

/**
 * 
 * @param {string} query 
 * @returns {HTMLTableElement}
 */
export const table = query => {
    return document.querySelector("table" + query)
}

/**
 * Toggles class of element
 * @param {string} cls
 */
export const toggle = cls => (/** @type {HTMLElement}*/ elem) => {
    if (hasClass(cls)(elem)) {
        removeClasses(elem)(cls)
    } else {
        addClasses(elem)(cls)
    }
}

/**
 * 
 * @param {string} query 
 * @returns {SVGElement}
 */

export const svg = query => document.querySelector("svg" + query)

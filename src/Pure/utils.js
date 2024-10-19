
import { Dim } from "./dim.js"

/**
 * @template T
 * @param {T} val
 * @returns {T}
 */

export const identity = (val) => val

/**
 * @template T
 * @param  {...T} arr 
 * @returns 
 */
export const includes = 
    (...arr) => 
    (/** @type {T} */ item) => {

        return arr.includes(item)
}

/**
 * Convert a string to an array of characters
 * @param {string} s
 * @returns {Array.<string>}
 */
export const strToArr = (s) => {
    let arr = []

    for (let i = 0; i < s.length; i++) {
        arr = arr.concat([s[i]])
    }

    return arr
}

/**
 * Convert a string to its upper case equivalent
 * @param {string} s 
 * @returns 
 */

export const toUpper = (s) => s.toUpperCase() 

/**
 * Check that a number is a number, and returns a default value if not
 * @param {number} num 
 * @param {number} def 
 * @returns {number}
 */
export const validateNumber = (num, def) => isNaN(num) ? def : num

/**
 * Check that the number underlying a dim is a number, and returns a default dim if not
 * @param {Dim} dim 
 * @param {Dim} def 
 * @returns {Dim}
 */
export const validateDim = (dim, def) => isNaN(dim.value) ? def : dim


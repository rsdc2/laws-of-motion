import { Dim } from "./dim.js";
import { Vector } from "./vector.js";
import { Pair } from "./tuple.js";
/***
 * @typedef {[number, number]} _Vec
 */

/***
 * @typedef {[Dim, number]} _PolarVec
 */

/**
 * @typedef {[Dim, Dim]} _DistVec2D
 */


/**
 * @typedef {Object} _InitialBodyParams
 * @property {string} id
 * @property {Vector} pos position vector in pixels
 * @property {number} bodyRadius
 * @property {number} mass mass in kg * 1e9
 * @property {_PolarVec} velPolar initial velocity in pixels per unit time
 * @property {SVGCircleElement} [circle]
 */

export class InitialBodyParams {

    #initialParams
    /**
     * 
     * @param {_InitialBodyParams} params 
     */
    constructor (params) {
        this.#initialParams = params
    }

    get id () {
        return this.#initialParams.id
    }

    get pos() {
        return this.#initialParams.pos
    }

    get bodyRadius() {
        return this.#initialParams.bodyRadius
    }

    get mass() {
        return this.#initialParams.mass
    }

    get velPolar() {
        return this.#initialParams.velPolar
    }

    get circle(){
        return this.#initialParams.circle
    }
}


/**
 * 
 * @param {_PolarVec} _polarVec
 * @returns {_PolarVec}
 */
export function PolarVec(_polarVec) {
    return _polarVec
}
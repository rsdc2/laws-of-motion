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
 * @property {string} name
 * @property {Vector} pos position vector in pixels
 * @property {number} bodyRadius
 * @property {number} mass mass in kg * 1e9
 * @property {_PolarVec} velPolar initial velocity in pixels per unit time
 * @property {SVGCircleElement} [circle]
 */


/**
 * Convenience class for accessing / defining
 * initial parameters for a celestial object.
 * Saves having to import the typedef.
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

    get bodyRadius() {
        return this.#initialParams.bodyRadius
    }

    get circle(){
        return this.#initialParams.circle
    }

    deepcopy() {
        return new InitialBodyParams(
            {
                id: this.#initialParams.id,
                name: this.#initialParams.name,
                pos: this.#initialParams.pos.deepcopy(),
                bodyRadius: this.#initialParams.bodyRadius,
                mass: this.#initialParams.mass,
                velPolar: [this.#initialParams.velPolar[0], this.#initialParams.velPolar[1]],
                circle: this.#initialParams.circle
            }
        )
    }

    get id () {
        return this.#initialParams.id
    }

    get mass() {
        return this.#initialParams.mass
    }

    get name() {
        return this.#initialParams.name
    }

    get pos() {
        return this.#initialParams.pos
    }

    get velPolar() {
        return this.#initialParams.velPolar
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
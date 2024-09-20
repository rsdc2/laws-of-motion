import { Angle } from "./angle.js"
import { cos, sin } from "./imports.js"

/**
 * Convert polar coortdinates to x, y values
 * cf. https://en.wikipedia.org/wiki/Polar_coordinate_system#Converting_between_polar_and_Cartesian_coordinates

 * @param {("degrees"|"radians")} angleUnit 
 */

export const cart = 
    /**
    * @param {("degrees"|"radians")} angleUnit 
    */

    (angleUnit) => 
    
    /**
     * @typedef {number} x
     * @typedef {number} y
     * @param {number} r 
     * @param {number} θ 
     * @returns {[x, y]}
     */
    (r, θ) =>  {

    let rad = 0
    if (angleUnit == "degrees") {
        rad = Angle.toRad(θ)
    } else {
        rad = θ
    }

    return [r * cos(rad), r * sin(rad)]
}

export const cartDeg = cart("degrees")

export const cartRad = cart("radians")
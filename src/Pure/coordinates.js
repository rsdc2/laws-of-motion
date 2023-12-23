/**
 * Convert polar coortdinates to x, y values
 * cf. https://en.wikipedia.org/wiki/Polar_coordinate_system#Converting_between_polar_and_Cartesian_coordinates

 * @param {("degrees"|"radians")} angleUnit 
 */

const cart = 
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
        rad = degToRad(θ)
    } else {
        rad = θ
    }

    return [r * cos(rad), r * sin(rad)]
}

const cartDeg = cart("degrees")

const cartRad = cart("radians")
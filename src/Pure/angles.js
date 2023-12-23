
const Angle = {
    /**
     * Converts radians to degrees
     * @param {number} rad 
     * @returns {number}
     */
    toDeg: (rad) => (rad / (PI * 2)) * 360,

    /**
     * Converts degrees to radians
     * @param {number} deg 
     * @returns {number}
     */
    toRad: (deg) => (deg / 360) * PI * 2,

    /**
     * 
     * @param {number} s 
     * @param {number} θ 
     * @returns {[number, number]}
     */
    toVec: (s, θ) => {
        const x = s * cos(θ)
        const y = s * sin(θ)

        return [x, y]
    }



}


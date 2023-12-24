
const Angle = {
    /**
     * Converts radians to degrees
     * @param {number} rad angle in radians
     * @returns {number} angle in degrees
     */
    toDeg: (rad) => (rad / (PI * 2)) * 360,

    /**
     * Converts degrees to radians
     * @param {number} deg angle in degrees
     * @returns {number} angle in radians
     */
    toRad: (deg) => (deg / 360) * PI * 2,

    /**
     * Takes a magnitude and an angle, and
     * return a 2D vector
     * @param {number} r magnitude
     * @param {number} θ angle
     * @returns {Vec2D} a 2D vector
     */
    toVec: (r, θ) => {
        const x = r * cos(θ)
        const y = r * sin(θ)

        return [x, y]
    },

    /**
     * Take a 2D vector, and return a magnitude
     * and an angle in degrees
     * @param {Vec2D} vec a 2D vector
     * @returns {[number, number]} a magnitude and 
     * an angle in degrees
     */
    toRθ: vec => {
        // cf. https://en.wikipedia.org/wiki/Inverse_trigonometric_functions
        const [x, y] = vec
        const θ = Angle.toDeg(atan(y / x))
        const r = sqrt(x**2 + y**2)
        return [r, θ]
    }


}


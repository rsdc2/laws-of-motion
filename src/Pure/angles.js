
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
     * @param {number} m magnitude
     * @param {number} θ angle
     * @returns {Vec2D} a 2D vector
     */
    toVec: (m, θ) => {
        const x = m * cos(θ)
        const y = m * sin(θ)

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
        const [x, y] = vec
        const θ = Angle.toDeg(atan(y / x))
        const r = sqrt(x**2 + y**2)
        return [r, θ]
    }


}


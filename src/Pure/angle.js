
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
        const x = r * cos(Angle.toRad(θ))
        const y = r * sin(Angle.toRad(θ))

        return [x, y]
    },

    /**
     * Take a 2D vector, and return a magnitude
     * and an angle in degrees
     * @param {Vec2D} vec a 2D vector
     * @returns {[number, number]} a magnitude and 
     * an angle in degrees
     */
    toPolar: vec => {
        // cf. https://en.wikipedia.org/wiki/Inverse_trigonometric_functions
        // cf. https://en.wikipedia.org/wiki/Atan2
        // cf. https://en.wikipedia.org/wiki/Polar_coordinate_system#Converting_between_polar_and_Cartesian_coordinates
        const [x, y] = vec
        const θ = Angle.toDeg(atan2(y, x))
        const r = sqrt(x**2 + y**2)
        return [r, θ]
    }


}


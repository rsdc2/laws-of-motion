import { Dim } from "./dim.js"
import { PI } from "./imports.js"
import { Vector } from "./vector.js"
import { cos, sin, atan2, sqrt} from "./imports.js"

export class Angle {

    #angle
    /**
     * 
     * @param {number} θ angle in degrees
     */
    constructor(θ) {
        this.#angle = θ
    }

    get deg() {
        return this.#angle
    }

    /**
     * 
     * @param {number} θ angle in degrees 
     */
    static fromDeg (θ) {
        return new Angle(θ)
    }

    /**
     * 
     * @param {number} θ angle in radians 
     * @returns 
     */
    static fromRad (θ) {
        return new Angle(Angle.toRad(θ))
    }

    get rad() {
        return Angle.toRad(this.#angle)
    }
 
    /**
     * Converts radians to degrees
     * @param {number} rad angle in radians
     * @returns {number} angle in degrees
     */
    static toDeg = (rad) => (rad / (PI * 2)) * 360

    /**
     * Converts degrees to radians
     * @param {number} deg angle in degrees
     * @returns {number} angle in radians
     */
    static toRad = (deg) => (deg / 360) * PI * 2

    /**
     * Takes a magnitude and an angle, and
     * return a 2D vector
     * @param {Dim} r magnitude
     * @param {number} θ angle
     * @returns {Vector} a 2D vector
     */
    static toVec = (r, θ) => {
        const x = r.pixels * cos(Angle.toRad(θ))
        const y = r.pixels * sin(Angle.toRad(θ))

        return Vector.from([x, y])
    }

    /**
     * Take a 2D vector, and return a magnitude
     * and an angle in degrees
     * @param {Vector} vec a 2D vector
     * @returns {[Dim, number]} a magnitude and 
     * an angle in degrees
     */
    static toPolar (vec) {
        // cf. https://en.wikipedia.org/wiki/Inverse_trigonometric_functions
        // cf. https://en.wikipedia.org/wiki/Atan2
        // cf. https://en.wikipedia.org/wiki/Polar_coordinate_system#Converting_between_polar_and_Cartesian_coordinates
        const [x, y] = vec.vec
        const θ = Angle.toDeg(atan2(y, x))
        const r = sqrt(x**2 + y**2)
        return [Dim.from(r), θ]
    }

    get value() {
        return this.#angle
    }
}


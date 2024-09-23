import { Dim } from "./dim.js"
import { TIMEMULT } from "../SideEffects/timeconfig.js"
import { UnitVector } from "./unitvector.js"
import { Angle } from "./angle.js"

/**
 * Class for handling 2D vectors.
 * Underlying interface is Vec2D, which is
 * a 2D array.
 * Any method with the suffix 'Vec' is used 
 * for interacting directly with Vec2D;
 * otherwise methods interact with Vector2D
 * 
 */


export class Vector {

    #x
    #y
    /**
     * 
     * @param {Dim} x
     * @param {Dim} y 
     */
    constructor(x, y) {
        this.#x = x
        this.#y = y
    }

    get actual1() {
        return Vector.from(this.vec).divScalar(TIMEMULT)
    }

    get actual2() {
        return Vector.from(this.vec).divScalar(TIMEMULT ** 2)
    }
    
    /**
     * Add to another Vector2D
     * @param {Vector} other 
     */
    add (other) {
        return new Vector(this.x.add(other.x), this.y.add(other.y))
    }

    /**
     * 
     * @param {import("./typedefs.js")._Vec} vec
     * @returns {Vector}
     */
    addPix (vec) {
        const [x, y] = vec
        return Vector.from([x + this.#x.value, y + this.#y.value])
    }

    /**
     * @param {import("./typedefs.js")._Vec} vec
     * @returns {Vector}
    */
    addM (vec) {
        const [x, y] = vec
        return this.add(Vector.fromM([x, y]))
    }


    /**
     * @param {import("./typedefs.js")._Vec} vec
     * @returns {Vector}
    */
    addMKm (vec) {
        const [x, y] = vec
        return this.add(Vector.fromMKm([x, y]))
    }

    /**
     * 
     * @param {import("./typedefs.js")._Vec} other 
     */

    addMKmVec2D (other) {
        const [x, y] = other
        return new Vector(
            Dim.fromMKm(x),
            Dim.fromMKm(y)
        )
    }

    /**
     * Divide the vector by a scalar
     * @param {number} s 
     */
    divScalar (s) {
        return new Vector(this.x.div(s), this.y.div(s))
    }

    /**
     * Return a new Vector2D from a pixel Vec2D
     * @param {import("./typedefs.js")._Vec} vec 
     * @returns 
     */
    static from(vec) {
        return Vector.fromPix(vec)
    }
    /**
     * 
     * @param {import("./typedefs.js")._Vec} vec 
     */
    static fromPix(vec) {
        const [x, y] = vec
        return new Vector(new Dim(x), new Dim(y))
    }   

    /**
     * 
     * @param {import("./typedefs.js")._Vec} vec 
     */
    static fromM(vec) {
        const [x, y] = vec
        return new Vector(Dim.fromMetres(x), Dim.fromMetres(y))
    }   


    /**
     * 
     * @param {import("./typedefs.js")._Vec} vec 
     */
    static fromMKm(vec) {
        const [x, y] = vec
        return new Vector(Dim.fromMKm(x), Dim.fromMKm(y))
    }   


    /**
     * Multiply the vector by a scalar
     * @param {number} s 
     */
    multScalar (s) {
        return new Vector(this.x.mult(s), this.#y.mult(s))
    }

    /**
     * 
     * Polar representation of the vector
     */
    get polar() {
        return Angle.toPolar(this)
    }

    /**
     * Magnitude of the vector
     */
    get r() {
        const [r, _] = this.polar
        return r
    }   

    /**
     * Subtract another vector from this one
     * @param {Vector} other 
     */
    subtract (other) {
        return new Vector(this.x.subtract(other.x), this.y.subtract(other.y))
    }

    /**
     * Sum an array of Vector2D
     * @param {Array.<Vector>} vecs 
     */

    static sum(vecs) {
        return vecs.reduce( (vecSum, vec) => vecSum.add(vec) )
    }

    /**
     * Convert a vector into a unit vector
     * @param {Vector} vec
     * @returns {UnitVector} 
     */
    static toUnit (vec) {
        return vec.unit
    }

    get unit() {
        return new UnitVector(this)
    }

    /**
     * Vector value in pixels
     */
    get vec() {
        return /** @type {import("./typedefs.js")._Vec}*/ ([this.x.value, this.y.value])
    }
    
    get x() {
        return this.#x
    }

    get y() {
        return this.#y
    }
 
    /**
     * The angle of the vector in degrees
     */
    get θ() {
        const [_, θ] = this.polar
        return θ
    }
}

/**
 * Class for handling 2D vectors.
 * Underlying interface is Vec2D, which is
 * a 2D array.
 * Any method with the suffix 'Vec' is used 
 * for interacting directly with Vec2D;
 * otherwise methods interact with Vector2D
 * 
 */


class Vector2D {

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
    
    /**
     * Add to another Vector2D
     * @param {Vector2D} other 
     */
    add (other) {
        return new Vector2D(this.x.add(other.x), this.y.add(other.y))
    }

    /**
     * 
     * @param {Vec2D} vec
     * @returns {Vector2D}
     */
    addPix (vec) {
        const [x, y] = vec
        return Vector2D.from([x + this.#x.value, y + this.#y.value])
    }

    /**
     * @param {Vec2D} vec
     * @returns {Vector2D}
    */
    addMKm (vec) {
        const [x, y] = vec
        return this.add(Vector2D.fromMKm([x, y]))
    }

    /**
     * 
     * @param {Vec2D} other 
     */

    addMKmVec2D (other) {
        const [x, y] = other
        return new Vector2D(
            Dim.fromMKm(x),
            Dim.fromMKm(y)
        )
    }

    /**
     * Divide the vector by a scalar
     * @param {number} s 
     */
    divScalar (s) {
        return new Vector2D(this.x.div(s), this.y.div(s))
    }

    /**
     * Return a new Vector2D from a pixel Vec2D
     * @param {Vec2D} vec 
     * @returns 
     */
    static from(vec) {
        return Vector2D.fromPix(vec)
    }
    /**
     * 
     * @param {Vec2D} vec 
     */
    static fromPix(vec) {
        const [x, y] = vec
        return new Vector2D(new Dim(x), new Dim(y))
    }   

    /**
     * 
     * @param {Vec2D} vec 
     */
    static fromMKm(vec) {
        const [x, y] = vec
        return new Vector2D(Dim.fromMKm(x), Dim.fromMKm(y))
    }   


    /**
     * Multiply the vector by a scalar
     * @param {number} s 
     */
    multScalar (s) {
        return new Vector2D(this.x.mult(s), this.#y.mult(s))
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
     * @param {Vector2D} other 
     */
    subtract (other) {
        return new Vector2D(this.x.subtract(other.x), this.y.subtract(other.y))
    }

    /**
     * Sum an array of Vector2D
     * @param {Array.<Vector2D>} vecs 
     */

    static sum(vecs) {
        return vecs.reduce( (vecSum, vec) => vecSum.add(vec) )
    }

    /**
     * Convert a vector into a unit vector
     * @param {Vector2D} vec
     * @returns {Vector2D} 
     */
    static toUnit (vec) {
        // cf. https://www.cuemath.com/calculus/unit-vector/ 
        return vec.unit
    }

    get unit() {
        const magnitude = sqrt(this.#x.pow(2).value + this.#y.pow(2).value)
        return new Vector2D(this.x.div(magnitude), this.y.div(magnitude))
    }

    /**
     * Vector value in pixels
     */
    get vec2D() {
        return /** @type {Vec2D}*/ ([this.x.value, this.y.value])
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
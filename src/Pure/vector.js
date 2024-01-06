
class Vector2D {

    #vec
    /**
     * 
     * @param {Vec2D} vec 
     */
    constructor(vec) {
        this.#vec = vec
    }
    
    /**
     * Add to another Vector2D
     * @param {Vector2D} other 
     */
    add (other) {
        const addition = Vector2D.addVec(this.#vec, other.vec)
        return new Vector2D(addition)
    }

    /**
     * Add two vectors together
     * @param {Vec2D} vec1 
     * @param {Vec2D} vec2 
     * @return {Vec2D}
     */
    static addVec (vec1, vec2) {
        const [vec1X, vec1Y] = vec1
        const [vec2X, vec2Y] = vec2
        return [vec1X + vec2X, vec1Y + vec2Y]
    }

    /**
     * Divide the vector by a scalar
     * @param {number} s 
     */
    divScalar (s) {
        const div = Vector2D.divScalarVec(this.#vec, s)
        return new Vector2D(div)
    }

    /**
     * Divide a 2D vector by a scalar
     * @param {number} s 
     * @param {Vec2D} vec 
     * @return {Vec2D}
     */
    static divScalarVec (vec, s) {
        const [x, y] = vec
        return [x / s, y / s]
    }


    /**
     * Multiply the vector by a scalar
     * @param {number} s 
     */
    multScalar (s) {
        return new Vector2D(Vector2D.multScalarVec(s)(this.#vec))
    }

    /** 
     * Multiply a vector by a scalar
     * @param {number} s
     */
    static multScalarVec = (s) => 
    /**
     * 
     * @param {Vec2D} vec 
     * @return {Vec2D}
     */
    (vec) => {
        const [x, y] = vec
        return [s * x, s * y]
    }

    /**
     * 
     * Polar representation of the vector
     */
    get polar() {
        return Angle.toPolar(this.#vec)
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
        const subtraction = Vector2D.subtractVec(this.#vec, other.vec)
        return new Vector2D(subtraction)
    }

    /**
     * vec2 - vec1
     * @param {Vec2D} vec1 
     * @param {Vec2D} vec2 
     * @return {Vec2D}
     */
    static subtractVec2 (vec1, vec2) {
        const [x1, y1] = vec1
        const [x2, y2] = vec2

        return [x2 - x1, y2 - y1]
    }

    /**
     * Substract vec1 - vec2
     * @param {Vec2D} vec1 
     * @param {Vec2D} vec2 
     * @return {Vec2D}
     */
    static subtractVec (vec1, vec2) {
        const [x1, y1] = vec1
        const [x2, y2] = vec2

        return [x1 - x2, y1 - y2]
    }

    /**
     * Sum an array of Vector2D
     * @param {Array.<Vector2D>} vecs 
     */

    static sum(vecs) {
        return vecs.reduce( (vecSum, vec) => vecSum.add(vec) )
    }

    /**
     * Sum an array of Vec2D
     * @param {Array.<Vec2D>} vecs
     */
    static sumVecs (vecs) {
        return vecs.reduce( (vecSum, vec) => Vector2D.addVec(vecSum, vec) )
    }

    /**
     * Convert a vector into a unit vector
     * @param {Vec2D} vec
     * @returns {Vec2D} 
     */
    static toUnit (vec) {
        // cf. https://www.cuemath.com/calculus/unit-vector/ 
        const [x, y] = vec
        const magnitude = sqrt(x ** 2 + y ** 2)
        return [x / magnitude, y / magnitude]

    }
    
    /**
     * The unit vector
     */
    get unit() {
        return Vector2D.toUnit(this.#vec)
    }

    get value() {
        return this.#vec
    }

    /**
     * Vector value
     */
    get vec() {
        return this.#vec
    }
    
    /**
     * The angle of the vector in degrees
     */
    get θ() {
        const [_, θ] = this.polar
        return θ
    }
}
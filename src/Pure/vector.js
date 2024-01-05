
const Vector2D = {
    
    /**
     * Add together two vectors
     * @param {Vec2D} vec1 
     * @param {Vec2D} vec2 
     * @return {Vec2D}
     */
    add: (vec1, vec2) => {
        const [vec1X, vec1Y] = vec1
        const [vec2X, vec2Y] = vec2
        return [vec1X + vec2X, vec1Y + vec2Y]
    },

    /**
     * Divide a vector by a scalar
     * @param {number} s 
     * @param {Vec2D} vec 
     * @return {Vec2D}
     */
    divScalar: (vec, s) => {
        const [x, y] = vec
        return [x / s, y / s]
    },

    /** 
     * Multiply a vector by a scalar
     * @param {number} s
     */
    multScalar: (s) => 
    /**
     * 
     * @param {Vec2D} vec 
     * @return {Vec2D}
     */
    (vec) => {
        const [x, y] = vec
        return [s * x, s * y]
    },

    /**
     * Convert a vector into a unit vector
     * @param {Vec2D} vec
     * @returns {Vec2D} 
     */
    toUnit: (vec) => {
        // cf. https://www.cuemath.com/calculus/unit-vector/ 
        const [x, y] = vec
        const magnitude = sqrt(x ** 2 + y ** 2)
        return [x / magnitude, y / magnitude]

    },

    /**
     * vec2 - vec1
     * @param {Vec2D} vec1 
     * @param {Vec2D} vec2 
     * @return {Vec2D}
     */
    subtract2: (vec1, vec2) => {
        const [x1, y1] = vec1
        const [x2, y2] = vec2

        return [x2 - x1, y2 - y1]
    },

    /**
     * Substract vec1 - vec2
     * @param {Vec2D} vec1 
     * @param {Vec2D} vec2 
     * @return {Vec2D}
     */
    subtract: (vec1, vec2) => {
        const [x1, y1] = vec1
        const [x2, y2] = vec2

        return [x1 - x2, y1 - y2]
    }
}
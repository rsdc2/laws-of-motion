
const Vec = {
    
    /** 
     * Multiply a vector by a scalar
     * @param {number} s
     */
    multScalar: (s) => 
    /**
     * 
     * @param {Array.<number>} vect 
     */
    (vect) => vect.map( 
        (v) => s * v 
    ),


    /**
     * Convert a vector into a unit vector
     * @param {Vec2D} vec
     * @returns {Vec2D} 
     */
    toUnit: (vec) => {
        const [r, θ] = Angle.toRθ(vec)

        return Angle.toVec(1, θ)
    },

    /**
     * Substract vec2 from vec1
     * @param {Vec2D} vec1 
     * @param {Vec2D} vec2 
     * @return {Vec2D}
     */
    sub: (vec1, vec2) => {
        const [x1, y1] = vec1
        const [x2, y2] = vec2

        return [x1 - x2, y1 - y2]
    }
}
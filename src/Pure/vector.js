
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
    }
}
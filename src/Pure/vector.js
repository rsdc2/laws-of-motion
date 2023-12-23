
const Vector = {
    
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
    )
}
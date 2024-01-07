const Motion = {

    /**
     * Calculate the gravitational attraction experienced
     * by a body b1 on account of another body b2
     * at distance r from b2, where b2 has mass M.
     * Assumes the object being attracted is of negligible
     * mass compared to the attracting object
     * @param {number} r distance
     * @param {number} M mass 
     * @param {Vector2D} unitVector vector
     * @return {Vector2D}
     */
    g: (r, M, unitVector) => {
        // cf. https://en.wikipedia.org/wiki/Gravitational_acceleration

        const s = - (G * M) / (r ** 2)

        return unitVector.multScalar(s)
    },

    /**
     * Calculate the gravitational attraction experienced
     * by a body b1 on account of another body b2
     * at distance r from b2, where b2 has mass M.
     * Assumes the object being attracted is of negligible
     * mass compared to the attracting object
     * @param {number} r distance
     * @param {number} M mass 
     * @param {Vec2D} unitVec vector
     * @return {Vec2D}
     */
    gVec: (r, M, unitVec) => {
        // cf. https://en.wikipedia.org/wiki/Gravitational_acceleration

        const s = -(G * M) / (r ** 2)

        return Vector2D.multScalarVec(s)(unitVec)
    },

    /**
     * Calculate the gravitational attraction experienced
     * by a body b1 on account of another body b2
     * at distance r from b2, where b2 has mass M.
     * @param {number} r distance between body 1 and body 2
     * @param {number} m1 mass of body 1
     * @param {number} m2  mass of body 2
     * @param {Vec2D} unitVec unit vector from body 2 to body 1
     * @return {Vec2D}
     */
    gVec12: (r, m1, m2, unitVec) => {
        // cf. https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation

        const s = -(G * m1 * m2) / (r ** 2)

        return Vector2D.multScalarVec(s)(unitVec)
    },

    /**
     * Calculates the position of a body
     * based on an initial starting position
     * (pos), an initial velocity (vel) and 
     * an acceleration
     * @param {number} t
     * @param {Vec2D} pos
     * @param {Vec2D} vel 
     * @param {Vec2D} acc
     * @return {Vec2D}
     */
    positionAtT: (t, pos, vel, acc) => {
        // cf. https://en.wikipedia.org/wiki/Force
        const [x, y] = pos
        const [δx, δy] = vel
        const [δδx, δδy] = acc

        return [(δδx * t + δx) * t + x,
                (δδy * t + δy) * t + y]
    },


    /**
     * Calculates the position of a body
     * based on an initial starting position
     * (pos), an initial velocity (vel) and 
     * an acceleration
     * @param {Vec2D} pos initial position
     * @param {Vec2D} vel initial velocity
     * @param {Vec2D} acc acceleration
     * @return {[Vec2D, Vec2D, Vec2D]}
     */
    position: (pos, vel, acc) => {
        // cf. https://en.wikipedia.org/wiki/Force
        const [x, y] = pos
        const [δx, δy] = vel
        const [δδx, δδy] = acc
        
        const vel_ = Vector2D.addVec(vel, acc)
        const pos_ = Vector2D.addVec(pos, vel)

        return [pos_, vel_, acc]
    },
}


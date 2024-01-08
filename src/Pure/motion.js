const Motion = {

    /**
     * Calculate the gravitational attraction experienced
     * by a body b1 on account of another body b2
     * at distance r from b2, where b2 has mass M.
     * 
     * Mass of b1 (the body being attracted) is cancelled out:
     * 
     * F2to1 = m1 * a
     * 
     * F = ((-G * m1 * m2) / r ** 2) * unitVector = m1 * a
     * 
     * Therefore:
     * 
     * a = ((-G * m2) / r ** 2) / r ** 2) * unitVector
     * 
     * See https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation
     * accessed 2024-01-08
     * 
     * @param {number} r distance
     * @param {number} M mass of b2
     * @param {Vector2D} unitVector unit vector from b1 to b2
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
     * @param {Vec2D} unitVec unit vector from b1 to b2
     * @return {Vec2D}
     */
    gVec: (r, M, unitVec) => {
        // cf. https://en.wikipedia.org/wiki/Gravitational_acceleration

        const s = -(G * M) / (r ** 2)

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


const Motion = {

    /**
     * 
     * @param {number} r distance
     * @param {number} M mass 
     * @param {Vec2D} unitVec vector
     * @return {Vec2D}
     */
    g: (r, M, unitVec) => {
        // cf. https://en.wikipedia.org/wiki/Gravitational_acceleration

        const s = -(G * M) / (r ** 2)

        return Vector2D.multScalar(s)(unitVec)
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
        
        const vel_ = Vector2D.add(vel, acc)
        const pos_ = Vector2D.add(pos, vel)

        return [pos_, vel_, acc]
    },
}


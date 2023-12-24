const Motion = {

    /**
     * 
     * @param {number} r distance
     * @param {number} M mass 
     * @param {Vec2D} vec vector
     * @return {Vec2D}
     */
    g: (r, M, vec) => {
        // cf. https://en.wikipedia.org/wiki/Gravitational_acceleration

        const s = (G * M) / r ** 2

        // Convert vector to unit vector
        const unitVec = Vec.toUnit(vec)
        const [x, y] = unitVec

        return [s * x, s * y]
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
}

/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {[number, number]}
 */

const velocity = (x, y) => [x, y]



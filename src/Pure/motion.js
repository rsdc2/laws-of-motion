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

        const s = (G * M) / (r ** 2)

        // Convert vector to unit vector
        const [x, y] = unitVec
        // console.log(vec)

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


    /**
     * Calculates the position of a body
     * based on an initial starting position
     * (pos), an initial velocity (vel) and 
     * an acceleration
     * @param {number} t
     * @param {Vec2D} pos initial position
     * @param {Vec2D} vel initial velocity
     * @param {Array.<Vec2D>} accs accelerations
     * @return {[Vec2D, Vec2D, Vec2D]}
     */
    positionAtTChangingAcc: (t, pos, vel, accs) => {
        // cf. https://en.wikipedia.org/wiki/Force
        const [x, y] = pos
        const [δx, δy] = vel

        const sumAcc = accs.reduce( (sum, acc) => {
            const [δδx, δδy] = acc
            const [sumX, sumY] = sum
            return [δδx + sumX, δδy + sumY]
        }, [0, 0])

        const [sumAccX, sumAccY] = sumAcc 

        const vel_ = /** @type {Vec2D}*/ ([
            (sumAccX + δx) * t,
            (sumAccY + δy) * t
        ])

        const pos_ = /** @type {Vec2D}*/ ([
            (sumAccX + δx) * t + x,
            (sumAccY + δy) * t + y
        ])

        // console.log(vel_, sumAcc)

        return [pos_, vel_, sumAcc]
    },
}

/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {[number, number]}
 */

const velocity = (x, y) => [x, y]



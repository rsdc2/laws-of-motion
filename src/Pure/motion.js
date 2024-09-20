import { Vector } from "./vector.js"

export const Motion = {


    /**
     * Calculates the position of a body
     * based on an initial starting position
     * (pos), an initial velocity (vel) and 
     * an acceleration
     * @param {number} t
     * @param {import("./typedefs.js").Vec} pos
     * @param {import("./typedefs.js").Vec} vel 
     * @param {import("./typedefs.js").Vec} acc
     * @return {import("./typedefs.js").Vec}
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
     * @param {Vector} pos initial position
     * @param {Vector} vel initial velocity
     * @param {Vector} acc acceleration
     * @return {[Vector, Vector, Vector]}
     */
    position: (pos, vel, acc) => {
        // cf. https://en.wikipedia.org/wiki/Force
        
        const vel_ = vel.add(acc)
        const pos_ = pos.add(vel_)

        return [pos_, vel_, acc]
    },
}


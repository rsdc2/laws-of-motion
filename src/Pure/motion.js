import { Vector } from "./vector.js"

export const Motion = {


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


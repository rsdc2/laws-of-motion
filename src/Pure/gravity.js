import { Dim } from "./dim.js"
import { UnitVector } from "./unitvector.js"
import { Vector } from "./vector.js"
import { G } from "./constants.js"

// class BigG {
//     #G = G

//     get forMetres() {
//         return this.#G
//     }

//     get forKm() {
//         return this.#G
//     }

// }


export class Gravity {
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
     * @param {Dim} r distance as a Dim
     * @param {number} M mass of b2 in kg
     * @param {UnitVector} unit unit vector from b1 to b2
     * @return {Vector} 
     */
    static g(r, M, unit) {
        // cf. https://en.wikipedia.org/wiki/Gravitational_acceleration

        const s = - (G * (M / r.m ** 2))
        // console.log(s, M, r.mkm)

        const g = unit.m.multScalar(s)
        // console.log("g =", g.r.metres)
        return g
    }

    // /**
    //  * Calculate the gravitational attraction experienced
    //  * by a body b1 on account of another body b2
    //  * at distance r from b2, where b2 has mass M.
    //  * Assumes the object being attracted is of negligible
    //  * mass compared to the attracting object
    //  * @param {number} r distance
    //  * @param {number} M mass 
    //  * @param {Vec2D} unitVec unit vector from b1 to b2
    //  * @return {Vec2D}
    //  */
    // static gVec(r, M, unitVec) {
    //     // cf. https://en.wikipedia.org/wiki/Gravitational_acceleration

    //     return Gravity.g(r, M, Vector2D.fromPixelVec2D(unitVec)).vec2D
    // }

}
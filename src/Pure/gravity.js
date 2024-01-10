class BigG {
    #G = G

    get forMetres() {
        return this.#G
    }

    get forKm() {
        return this.#G
    }

}


class Gravity {
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
     * @param {number} r distance in m
     * @param {number} M mass of b2 in kg (?)
     * @param {Vector2D} unitVector unit vector from b1 to b2
     * @return {Vector2D}
     */
    static g(r, M, unitVector) {
        // cf. https://en.wikipedia.org/wiki/Gravitational_acceleration

        const s = - (G * M) / (r ** 2)

        return unitVector.multScalar(s)
    }

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
    static gVec(r, M, unitVec) {
        // cf. https://en.wikipedia.org/wiki/Gravitational_acceleration

        return Gravity.g(r, M, Vector2D.fromVec2D(unitVec)).vec
    }

}
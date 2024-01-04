/**
 * Services for two body interactions
 * such as centre of gravity.
 * For terms see https://en.wikipedia.org/wiki/Two-body_problem
 */
class TwoBody {
    #body1
    #body2

    /**
     * 
     * @param {CelestialBody} body1 
     * @param {CelestialBody} body2 
     */
    constructor (body1, body2) {
        this.#body1 = body1
        this.#body2 = body2
    }

    get body1() {
        return this.#body1
    }

    get body2() {
        return this.#body2
    }

    get m1() {
        return this.#body1.mass
    }

    get m2() {
        return this.#body2.mass
    }

    /**
     * Sum of two masses
     */
    get M() {
        return this.#body1.mass + this.#body2.mass
    }

    /**
     * Vector position of centre of mass
     * See Wikipedia on two body problem
     * (https://en.wikipedia.org/wiki/Two-body_problem)
     */
    get R() {
        const {m1, m2, M, x1, x2} = this
        return Vector2D.add(
            Vector2D.multScalar(m1/M)(x1),
            Vector2D.multScalar(m2/M)(x2)
        ) 
    }



    get momentumDegrees() {
        const [_, θ] = this.pPolar
        return θ
    }

    /**
     * Momentum as a 2D vector
     */
    get pVec() {
        return Vector2D.add(this.#body1.pVec, this.#body2.pVec)
    }

    get pPolar() {
        return Angle.toPolar(this.pVec)
    }

    get pScalar() {
        const [r, _] = this.pPolar
        return r
    }

    get x1() {
        return this.#body1.pos
    }

    get x2() {
        return this.#body2.pos
    }
}
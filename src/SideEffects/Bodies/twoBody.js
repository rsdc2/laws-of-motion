/**
 * Services for two body interactions
 * such as centre of gravity.
 * For terms see https://en.wikipedia.org/wiki/Two-body_problem
 */
class TwoBody {
    #body1
    #body2
    #circle

    /**
     * 
     * @param {CelestialBody} body1 
     * @param {CelestialBody} body2 
     */
    constructor (body1, body2) {
        this.#body1 = body1
        this.#body2 = body2
        this.#circle = this.#createRCircle()
    }

    /**
     * Returns body 1
     */
    get body1() {
        return this.#body1
    }

    /**
     * Returns body 2
     */
    get body2() {
        return this.#body2
    }

    /**
     * Create circle for representing the position 
     * of the centre of mass
     * @returns 
     */
    #createRCircle () {
        const elem = document.createElementNS(SVGNS, "circle")
        setAttrs(elem)(
            ["id", "R"]
        )
        addClasses(elem)("body")
        return elem
    }

    /**
     * The SVG circle element representing the
     * position of the centre of mass
     */
    get circle () {
        return this.#circle
    }

    /**
     * Mass of body 1
     */
    get m1() {
        return this.#body1.mass
    }

    /**
     * Mass of body 2
     */
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
            Vector2D.multScalar(m1 / M)(x1),
            Vector2D.multScalar(m2 / M)(x2)
        ) 
    }

    /**
     * Direction of momentum in degrees
     */
    get pDeg() {
        const [_, θ] = this.pPolar
        return θ
    }

    /**
     * Momentum as a 2D vector
     */
    get pVec() {
        return Vector2D.add(this.#body1.pVec, this.#body2.pVec)
    }

    /**
     * Momentum as a scalar quantity and an 
     * angle
     */

    get pPolar() {
        return Angle.toPolar(this.pVec)
    }

    /**
     * Scalar component of polar representation
     * of momentum
     */
    get pScalar() {
        const [r, _] = this.pPolar
        return r
    }

    /**
     * Update the object
     */
    update() {
        this.#updateRCirclePos()
    }

    /**
     * Update the position of the centre of mass
     * circle
     */
    #updateRCirclePos() {
        const [cx, cy] = this.R
        
        setAttrs(this.circle)(
            ["cx", String(cx)],
            ["cy", String(cy)],
            ["r", "20"]
        )
    }

    /**
     * Vector position of body 1
     */
    get x1() {
        return this.#body1.pos
    }

    /**
     * Vector position of body 2
     */
    get x2() {
        return this.#body2.pos
    }
}
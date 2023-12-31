
class CelestialBody {
    #initialParams
    #circle

    /**
     * 
     * @param {InitialBodyParams} params body parameters
     */
    constructor (params) {
        this.#initialParams = params
        this.#circle = this.#createCircle()
    }

    get acc() {
        return BodyT.acc(this.#circle)
    }

    set acc(value) {
        BodyT.setAcc(this.#circle, value)
    }

    /**
     * 
     * @param {Vec2D} acc 
     */
    accelerate (acc) {        
        const [pos, vel, _] = Motion.position(this.pos, this.vel, acc)
        this.pos = pos
        this.vel = vel
        this.acc = acc
    }

    get bodyRadius() {
        return this.#initialParams.bodyRadius
    }

    get circle() {
        return this.#circle
    }

    // Create the circle
    #createCircle () {
        const elem = document.createElementNS(SVGNS, "circle")

        const [cx, cy] = this.#initialParams.pos
        
        const [r, θ] = this.#initialParams.velPolar
        const [vx, vy] = Angle.toVec(r, θ)

        setAttrs(elem)(
            ["cx", String(cx)],
            ["cy", String(cy)],
            ["r", String(this.#initialParams.bodyRadius)],
            ["mass", String(this.#initialParams.mass)],
            ["vx", String(vx)],
            ["vy", String(vy)],
            ["id", this.id]
        )

        addClasses(elem)("planet")
        return elem
    }

    gFrom(body) {
        return Motion.g(this.rTo(body), body.mass, this.relPosUnitVec(body))
    }

    get id() {
        return this.#initialParams.id
    }

    get initialParams () {
        return this.#initialParams
    }

    get initialPos () {
        return this.#initialParams.pos
    }

    get mass() {
        return this.#initialParams.mass
    }

    get pos() {
        return BodyT.pos(this.#circle)
    }

    set pos(value) {
        BodyT.setPos(this.#circle, value)
    }

    /**
     * Position vector relative to another body
     * @param {CelestialBody} body 
     */
    relPosVec (body) {
        return Vector2D.subtract(this.pos, body.pos)
    }

    /**
     * 
     * @param {CelestialBody} body 
     * @returns 
     */
    relPosUnitVec (body) {
        return Vector2D.toUnit(this.relPosVec(body))
    }

    /**
     * Calculate the direct distance to another body
     * @param {CelestialBody} body 
     */
    rTo (body) {
        const [r, _] = Angle.toPolar(this.relPosVec(body))
        return r
    }

    get vel() {
        return BodyT.vel(this.#circle)
    }

    set vel(value) {
        BodyT.setVel(this.#circle, value)
    }
}
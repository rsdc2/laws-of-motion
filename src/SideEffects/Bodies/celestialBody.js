
/**
 * Services for a general celestial body, incl.
 * planets, stars and moons
 */
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

    /**
     * Acceleration of the body as a Vector2D
     */
    get acc() {
        return new Vector2D(this.accVec)
    }

    set acc(value) {
        this.accVec = value.vec
    }

    /**
     * Acceleration of the body as a Vec2D
     */
    get accVec() {
        return Circle.acc(this.#circle)
    }

    /**
     * Set the acceleration of the body
     */
    set accVec(value) {
        Circle.setAcc(this.#circle, value)
    }

    get acceleration() {
        return this.acc
    }

    set acceleration(value) {
        this.acc = value
    }    

    /**
     * Apply an acceleration
     * @param {Vec2D} acc 
     */
    accelerateVec (acc) {        
        const [pos, vel, _] = Motion.position(this.posVec, this.velVec, acc)
        this.posVec = pos
        this.velVec = vel
        this.accVec = acc
    }

    /**
     * Apply gravitational accelerations from an 
     * array of bodies
     * @param {Array.<CelestialBody>} bodies 
     */
    accelerateFrom (bodies) {
        const acc = this.accelerationFrom(bodies)
        this.accelerateVec(acc)
    }

    /**
     * Obtain sum of gravitational accelerations from an 
     * array of bodies
     * @param {Array.<CelestialBody>} bodies 
     * @return {Vec2D}
     */
    accelerationFrom (bodies) {
        const acc = /** @type {Vec2D}*/ ([0, 0])
        const gs = bodies.map( (body) => this.gFrom(body) )
        return gs.reduce( (acc, g) => Vector2D.addVec(acc, g), acc)
    }   

    /**
     * Add the relevant body class (body, star, planet, moon)
     * to the SVG circle element. Default is 'body'
     * @param {SVGCircleElement} elem 
     * @return {SVGCircleElement}
     */
    addBodyClass (elem) {
        addClasses(elem)("body")
        return elem
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

        this.addBodyClass(elem)
        return elem
    }

    /**
     * Returns the overall force acting on the body.
     * Force is change in momentum over time.
     */
    get force() {
        return Vector2D.multScalarVec(this.mass)(this.accVec)
    }

    /**
     * Calculate the gravitational force
     * exerted by another body
     * @param {CelestialBody} body 
     * @returns {Vec2D}
     */
    gFrom(body) {
        return Motion.g(
            this.rTo(body), 
            body.mass, 
            this.relPosUnitVec(body)
        )
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

    get m() {
        return this.mass
    }

    get mass() {
        return this.#initialParams.mass
    }

    /**
     * Mass * postion
     */
    get mpos() {
        return Vector2D.multScalarVec(this.mass)(this.posVec)
    }

    get p() {
        return this.v.multScalar(this.mass)
    }

    get pVec() {
        // cf. https://en.wikipedia.org/wiki/Momentum
        return Vector2D.multScalarVec(this.mass)(this.velVec)
    }

    get pos() {
        return new Vector2D(this.posVec)
    }

    set pos(value) {
        this.posVec = value.vec 
    }

    get posVec() {
        return Circle.pos(this.#circle)
    }

    set posVec(value) {
        Circle.setPos(this.#circle, value)
    }

    /**
     * Position vector relative to another body
     * @param {CelestialBody} body 
     * @returns 
     */
    relPosTo (body) {
        return this.pos.subtract(body.pos)
    }

    /**
     * Position vector relative to another body
     * @param {CelestialBody} body 
     * @return {Vec2D}
     */
    relPosVecTo (body) {
        return Vector2D.subtractVec(this.posVec, body.posVec)
    }

    /**
     * 
     * @param {CelestialBody} body 
     * @returns {Vec2D}
     */
    relPosUnitVec (body) {
        return this.relPosTo(body).unit
    }

    /**
     * Calculate the distance to another body as a scalar
     * @param {CelestialBody} body 
     * @return {number}
     */
    rTo (body) {
        const [r, _] = Angle.toPolar(this.relPosVecTo(body))
        return r
    }

    get v() {
        return this.vel
    }

    set v(value) {
        this.velVec = value.vec
    }

    get vel() {
        return new Vector2D(this.velVec)
    }

    set vel(value) {
        this.velVec = value.vec
    }

    get velVec() {
        return Circle.vel(this.#circle)
    }

    set velVec(value) {
        Circle.setVel(this.#circle, value)
    }
}
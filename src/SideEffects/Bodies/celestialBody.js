
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
     * Returns the acceleration of the body
     */
    get acc() {
        return Circle.acc(this.#circle)
    }

    /**
     * Set the acceleration of the body
     */
    set acc(value) {
        Circle.setAcc(this.#circle, value)
    }

    get acceleration() {
        return Circle.acc(this.#circle)
    }

    set acceleration(value) {
        Circle.setAcc(this.#circle, value)
    }    

    /**
     * Apply an acceleration
     * @param {Vec2D} acc 
     */
    accelerate (acc) {        
        const [pos, vel, _] = Motion.position(this.pos, this.vel, acc)
        this.pos = pos
        this.vel = vel
        this.acc = acc
    }

    /**
     * Apply gravitational accelerations from an 
     * array of bodies
     * @param {Array.<CelestialBody>} bodies 
     */
    accelerateFrom (bodies) {
        const acc = this.accelerationFrom(bodies)
        this.accelerate(acc)
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
        return gs.reduce( (acc, g) => Vector2D.add(acc, g), acc)
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
        return Vector2D.multScalar(this.mass)(this.acceleration)
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

    get mass() {
        return this.#initialParams.mass
    }

    get pVec() {
        // cf. https://en.wikipedia.org/wiki/Momentum
        return Vector2D.multScalar(this.mass)(this.vel)
    }

    get pos() {
        return Circle.pos(this.#circle)
    }

    set pos(value) {
        Circle.setPos(this.#circle, value)
    }

    /**
     * Position vector relative to another body
     * @param {CelestialBody} body 
     * @return {Vec2D}
     */
    relPosVec (body) {
        return Vector2D.subtract(this.pos, body.pos)
    }

    /**
     * 
     * @param {CelestialBody} body 
     * @returns {Vec2D}
     */
    relPosUnitVec (body) {
        return Vector2D.toUnit(this.relPosVec(body))
    }

    /**
     * Calculate the distance to another body as a scalar
     * @param {CelestialBody} body 
     * @return {number}
     */
    rTo (body) {
        const [r, _] = Angle.toPolar(this.relPosVec(body))
        return r
    }

    get vel() {
        return Circle.vel(this.#circle)
    }

    set vel(value) {
        Circle.setVel(this.#circle, value)
    }
}
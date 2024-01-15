
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
     * Acceleration of the body as a pixel Vec2D
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
     * 
     * @param {Vector2D} acc 
     */
    accelerate (acc) {
        const [pos, vel, _] = Motion.position(this.posVec, this.velVec, acc.vec)
        this.posVec = pos
        this.velVec = vel
        this.acc = acc
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
        this.accelerate(acc)
    }

    /**
     * Obtain sum of gravitational accelerations from an 
     * array of bodies
     * @param {Array.<CelestialBody>} bodies 
     * @return {Vector2D}
     */
    accelerationFrom (bodies) {
        const acc = Vector2D.fromPixelVec2D([0, 0])
        const gs = bodies.map( (body) => this.gFrom(body) )
        return gs.reduce( (acc, g) => acc.add(g), acc)
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

        const [cx, cy] = this.#initialParams.pos.vec2D
        
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
     * @returns {Vector2D}
     */
    gFrom(body) {
        return Gravity.g(
            this.rTo(body), 
            body.mass, 
            this.posUnitRelTo(body)
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

    /**
     * Position vector relative to another body
     * @param {CelestialBody} body 
     * @returns {Vector2D}
     */
    posRelTo (body) {
        return this.pos.subtract(body.pos)
    }

    /**
     * Return the unit vector of position 
     * relative to another body
     * @param {CelestialBody} body
     * @returns {Vector2D} 
     */

    posUnitRelTo (body) {
        return this.posRelTo(body).unit
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
     * @return {Vec2D}
     */
    posVecRelTo (body) {
        return Vector2D.subtractVec(this.posVec, body.posVec)
    }

    /**
     * 
     * @param {CelestialBody} body 
     * @returns {Vec2D}
     */
    posUnitVecRelTo (body) {
        return this.posRelTo(body).unitVec
    }

    /**
     * Calculate the distance to another body as a scalar
     * @param {CelestialBody} body 
     * @return {number}
     */
    rTo (body) {
        const [r, _] = Angle.toPolar(this.posVecRelTo(body))
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
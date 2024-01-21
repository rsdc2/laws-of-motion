
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
        const [x, y] = this.accVec
        return new Vector2D(Dim.from(x), Dim.from(y))
    }

    set acc(value) {
        this.accVec = value.vec2D
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
        const [pos, vel, _] = Motion.position(this.pos, this.vel, acc)
        this.pos = pos
        this.vel = vel
        this.acc = acc
    }

    /**
     * Apply an acceleration
     * @param {Vec2D} acc 
     */
    accelerateVec (acc) {        
        const [pos, vel, _] = Motion.position(this.pos, this.vel, Vector2D.from(acc))
        this.pos = pos
        this.vel = vel
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
        const acc = Vector2D.fromPix([0, 0])
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
        const [vx, vy] = Angle.toVec(r, θ).vec2D

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
        return this.acc.multScalar(this.mass)
        // return Vector2D.multScalarVec(this.mass)(this.accVec)
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
        return this.pos.multScalar(this.mass)
    }

    get p() {
        return this.v.multScalar(this.mass)
    }

    get pVec() {
        // cf. https://en.wikipedia.org/wiki/Momentum
        return this.p.vec2D
    }

    /**
     * Period of rotation
     * cf. https://en.wikipedia.org/wiki/Circular_motion
     * @param {CelestialBody} body
     * @returns {number}
     */
    period(body) {
        return (2 * PI * this.rTo(body).metres) / this.vel.r.metres
    }

    get pos() {
        const [x, y] = this.posVec
        return Vector2D.from([x, y])
    }

    set pos(value) {
        this.posVec = value.vec2D 
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
        return this.posRelTo(body).unitM
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
        return this.pos.subtract(body.pos).vec2D
    }

    /**
     * 
     * @param {CelestialBody} body 
     * @returns {Vec2D}
     */
    posUnitVecRelTo (body) {
        return this.posRelTo(body).unit.vec2D
    }

    /**
     * Calculate the distance to another body as a scalar
     * @param {CelestialBody} body 
     * @return {Dim}
     */
    rTo (body) {
        const [r, _] = Angle.toPolar(this.posRelTo(body))
        return r
    }

    get v() {
        return this.vel
    }

    set v(value) {
        this.velVec = value.vec2D
    }

    get vel() {
        const [x, y] = this.velVec
        return new Vector2D(Dim.from(x), Dim.from(y))
    }

    set vel(value) {
        this.velVec = value.vec2D
    }

    get velVec() {
        return Circle.vel(this.#circle)
    }

    set velVec(value) {
        Circle.setVel(this.#circle, value)
    }
}
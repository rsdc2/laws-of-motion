
/**
 * Services for all the bodies in a closed system
 */

class Universe {
    #elem 
    #bodies
    #rCircle

    /**
     * 
     * @param {SVGElement} svg
     * @param {Array.<CelestialBody>} bodies 
     */
    constructor (svg, bodies) {
        this.#elem = svg
        this.#bodies = /** @type {Array.<CelestialBody>} */ ([])
        this.addBodies(bodies)

        this.#rCircle = this.#createRCircle()
        this.#appendCircle(this.#rCircle)
    }

    /**
     * Add an array of bodies to the SVG element
     * @param {Array.<CelestialBody>} bodies 
     */
    addBodies (bodies) {
        bodies.forEach ( (body) => this.addBody(body) )
    }

    /**
     * Add a celestial body to the universe
     * @param {CelestialBody} body 
     */
    addBody (body) {
        this.#bodies.push(body)
        this.#appendCircle(body.circle)
    }

    /**
     * Append a circle to the SVG element
     * @param {SVGCircleElement} circle 
     */
    #appendCircle (circle) {
        this.#elem.appendChild(circle)
    }

    /**
     * Create circle for representing the position 
     * of the centre of mass
     * @returns {SVGCircleElement}
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
     * The SVG element of the universe
     */
    get elem () {
        return this.#elem
    }
    
    /**
     * The total mass of the bodies in the system
     */
    get M () {
        const masses = this.#bodies.map ( body => body.mass )
        return masses.reduce( (sum, mass) => sum + mass )
    }

    get p() {
        return new Vector2D(this.pVec)
    }

    get pPolar() {
        return this.p.polar
    }

    /**
     * Total momentum as a 2D vector
     */
    get pVec() {
        const ps = this.#bodies.map( body => body.pVec )
        return Vector2D.sumVecs(ps)
    }

    /**
     * Vector position of the centre of mass of the system
     */
    get R() {
        const mposs = this.#bodies.map (body => body.mpos)
        const summposs = Vector2D.sumVecs(mposs)
        return Vector2D.divScalarVec(summposs, this.M)       
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
        
        setAttrs(this.#rCircle)(
            ["cx", String(cx)],
            ["cy", String(cy)],
            ["r", "20"]
        )
    }
}
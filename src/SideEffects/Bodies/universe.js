class Universe {
    #elem 
    #bodies
    #bodyPair

    /**
     * 
     * @param {SVGElement} svg
     * @param {Array.<CelestialBody>} bodies 
     */
    constructor (svg, bodies) {
        this.#elem = svg
        this.#bodies = /** @type {Array.<CelestialBody>} */ ([])
        this.appendBodies(bodies)

        if (this.#bodies.length == 2) {
            this.#bodyPair = new BodyPair(this.#bodies[0], this.#bodies[1])
            this.#elem.appendChild(this.#bodyPair.circle)
        }
    }

    /**
     * Append an array of bodies to the SVG element
     * @param {Array.<CelestialBody>} bodies 
     */
    appendBodies (bodies) {
        bodies.forEach ( (body) => this.appendBody(body) )
    }

    /**
     * 
     * @param {CelestialBody} body 
     */
    appendBody (body) {
        this.#bodies.push(body)
        this.#elem.appendChild(body.circle)
    }

    /**
     * In a two-body system, access the pair of objects
     */
    get binary() {
        return this.#bodyPair
    }

    get pPolar() {
        return Angle.toPolar(this.pVec)
    }

    /**
     * Total momentum as a 2D vector
     */
    get pVec() {
        const ps = this.#bodies.map( body => body.pVec )
        return Vector2D.sum(ps)
    }

    get elem () {
        return this.#elem
    }
}
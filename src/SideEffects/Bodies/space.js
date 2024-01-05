class Space {
    #elem 

    /**
     * 
     * @param {SVGElement} svg 
     */
    constructor (svg) {
        this.#elem = svg
    }

    /**
     * Append an array of bodies to the SVG element
     * @param {Array.<CelestialBody | TwoBody>} bodies 
     */
    appendBodies (bodies) {
        bodies.forEach ( (body) => this.#elem.appendChild(body.circle) )
    }

    get elem () {
        return this.#elem
    }
}
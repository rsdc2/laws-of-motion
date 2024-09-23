import { setAttrs, addClasses } from "../General/elementAttributes.js"
import { CelestialBody } from "./celestialBody.js"
import { Vector } from "../../Pure/vector.js"
import { SVGNS } from "../../Pure/namespaces.js"

/**
 * Services for all the bodies in a closed system
 */

export class Universe {
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
        const ps = this.#bodies.map( body => body.p )
        return Vector.sum(ps)
    }

    get pPolar() {
        return this.p.polar
    }

    /**
     * Total momentum as a 2D vector
     */
    get pVec() {
        return this.p.vec
    }

    /**
     * Reset all bodies to initial parameters
     */
    reset() {
        this.#bodies.forEach( body => {
            console.log("Resetting", body.initialParams)
            body.reset(body.initialParams) 
        })
    }

    /**
     * Vector position of the centre of mass of the system
     */
    get R() {
        const mPositions = this.#bodies.map (body => body.mpos)
        const sumMPositions = Vector.sum(mPositions)
        return sumMPositions.divScalar(this.M)   
    }

    /**
     * Update the center of mass of the universe
     */
    update() {
        this.#updateRCirclePos()
    }

    /**
     * Update the position of the centre of mass
     * circle
     */
    #updateRCirclePos() {
        const [cx, cy] = this.R.vec
        
        setAttrs(this.#rCircle)(
            ["cx", String(cx)],
            ["cy", String(cy)],
            ["r", "20"]
        )
    }
}
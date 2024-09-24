import { setAttrs, addClasses } from "../General/elementAttributes.js"
import { CelestialBody } from "./celestialBody.js"
import { Vector } from "../../Pure/vector.js"
import { SVGNS } from "../../Pure/namespaces.js"
import { hide, show } from "../General/elementAttributes.js"
import { inputAttrs } from "../frontend.js"
import { button } from "../General/elements.js"
import { Timer } from "../timer.js"
import { createPlanets } from "./bodies.js"

/**
 * Services for all the bodies in a closed system
 */

export class Universe {
    #elem 
    #bodies
    #rCircle
    /** @type {boolean}*/ #modifying
    #timer

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
        this.#timer = new Timer()
        this.setModifyingToFalse()
    }

    accelerateAllAndUpdate() {
        this.bodies.forEach( body => {
            body.accelerateFrom(this.bodiesExcept(body))
        })
    
        this.update()
    }

    /**
     * Add an array of bodies to the SVG element
     * @param {Array<CelestialBody>} bodies 
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

    get bodies() {
        return this.#bodies
    }

    /**
     * Return all the bodies except body
     * @param {CelestialBody} bodyToExclude
     */
    bodiesExcept(bodyToExclude) {
        return this.#bodies.filter(body => body.id !== bodyToExclude.id)
    }

    /**
     * Remove all bodies from the system
     */
    clear() {
        this.#bodies.forEach( body => body.remove() )
        this.#bodies = []
        this.#elem.textContent = ""
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
        addClasses(elem)("body", "centre-of-gravity")
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

    get modifying() {
        return this.#modifying
    }

    setModifyingToFalse() {
        this.#modifying = false
        hide(...inputAttrs())
        hide(button("#addBody"))
        this.#resetBodiesToInitialParams()

        if (this.paused) {
            this.#timer.start(this)
        }
    }

    setModifyingToTrue() {
        this.#modifying = true
        show(...inputAttrs())
        show(button("#addBody"))
        this.#resetBodiesToInitialParams()
        this.pauseTimer()
    }

    get p() {
        const ps = this.#bodies.map( body => body.p )
        return Vector.sum(ps)
    }

    get paused() {
        return this.#timer.paused
    }

    pauseTimer() {
        this.#timer.pause()
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
        this.setModifyingToFalse()
        this.pauseTimer()
        this.#resetBodiesToInitialParams()
        this.startTimer()
    }

    /**
     * Set bodies to initial params
     */
    #resetBodiesToInitialParams() {
        this.#bodies.forEach( body => {
            body.resetToInitialParams(body.initialParams) 
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

    startTimer() {
        this.#timer.start(this)
    }

    toggleModifying() {
        if (this.#modifying) {
            this.setModifyingToFalse()
        }
        else {
            this.setModifyingToTrue()
        }
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
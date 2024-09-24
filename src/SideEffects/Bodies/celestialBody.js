
import { setAttrs, addClasses } from "../General/elementAttributes.js";
import { Circle } from "./svgcircle.js";
import { Vector } from "../../Pure/vector.js";
import { Dim } from "../../Pure/dim.js";
import { Gravity } from "../../Pure/gravity.js";
import { Motion } from "../../Pure/motion.js";
import { PI } from "../../Pure/imports.js";
import { SVGNS } from "../../Pure/namespaces.js";
import { TIMEMULT } from "../../SideEffects/timeconfig.js";
import { Angle } from "../../Pure/angle.js";
import { UnitVector } from "../../Pure/unitvector.js";
import { InitialBodyParams } from "../../Pure/typedefs.js";
import { table } from "../General/elements.js";
import { CENTRE } from "../config.js";
import { EARTHMASS } from "../../Pure/constants.js";

/**
 * @typedef {Object} _Inputs
 * @property {HTMLInputElement} speed
 * @property {HTMLInputElement} angle
 * @property {HTMLInputElement} mass 
 * @property {HTMLInputElement} x
 * @property {HTMLInputElement} y
 */

/**
 * Services for a general celestial body, incl.
 * planets, stars and moons
 */
export class CelestialBody {
    #initialParams
    /** @type { SVGCircleElement} */ #svgCircle // The SVG element representing the body
    #attrLabel // The Div element containing attributes for the body
    #attrInputRow // The row in the attr table corresponding to the body
    #attrLabelRow
    #attrInputs

    /**
     * 
     * @param {InitialBodyParams} params body parameters
     */
    constructor (params) {
        this.#initialParams = params
        this.#attrInputRow = this.#createAttrInputRow()
        this.#attrLabelRow = this.#createAttrLabelRow()
        this.#svgCircle = this.#createSVGCircle()
        this.#attrLabel = this.#createAttrLabel()
        this.#attrInputs = this.#createAttrInputs()
        this.resetToInitialParams(params.deepcopy())
    }

    /**
     * Acceleration of the body as a Vector2D
     */
    get acc() {
        const [x, y] = this.accVec
        return new Vector(Dim.from(x), Dim.from(y))
    }

    set acc(value) {
        this.accVec = value.vec
    }

    /**
     * Acceleration of the body as a pixel Vec2D
     */
    get accVec() {
        return Circle.acc(this.#svgCircle)
    }

    /**
     * Set the acceleration of the circle
     */
    set accVec(value) {
        Circle.setAcc(this.#svgCircle, value)
    }

    get acceleration() {
        return this.acc
    }

    set acceleration(value) {
        this.acc = value
    }    

    /**
     * 
     * @param {Vector} acc 
     */
    accelerate (acc) {
        const [pos, vel, _] = Motion.position(
            this.pos, 
            this.vel, 
            acc
        )
        this.pos = pos
        this.vel = vel
        this.acc = acc
    }

    /**
     * Apply an acceleration
     * @param {import("../../Pure/typedefs.js")._Vec} acc 
     */
    accelerateVec (acc) {        
        const [pos, vel, _] = Motion.position(
            this.pos, 
            this.vel, 
            Vector.from(acc)
        )
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
     * @return {Vector}
     */
    accelerationFrom (bodies) {
        const acc = Vector.fromPix([0, 0])
        const gs = bodies.map( (body) => this.gFrom(body) )

        const gsTimeMult = gs.map( g => g.multScalar(TIMEMULT ** 2) )
        return gsTimeMult.reduce( (acc, g) => acc.add(g), acc)
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

    get attrInputs() {
        return this.#attrInputs
    }

    /**
     * @return { HTMLDivElement }
     */
    get attrLabel() {
        return this.#attrLabel
    }

    get bodyRadius() {
        return this.#initialParams.bodyRadius
    }

    get circle() {
        return this.#svgCircle
    }

    remove() {
        this.#svgCircle.remove()
        this.#attrInputRow.remove()
        this.#attrLabelRow.remove()
    }

    /**
     * Create input element for body
     * @param {string} label
     * @returns {HTMLInputElement}
     */
    #createAttrInput(label) {
        const elem = document.createElement("input")
        elem.id = `attr-input-${label}-${this.name}`
        elem.type = "text"
        elem.classList.add("attr", "input")
        const cell = this.#attrInputRow.insertCell()
        cell.append(elem)
        return elem        
    }

    #createAttrInputLabel() {
        const label = this.#attrInputRow.insertCell()
        const labelDiv = document.createElement("div")
        labelDiv.classList.add("attr", "input")
        label.append(labelDiv)
        labelDiv.textContent = this.name
        return labelDiv
    }

    /**
     * 

     * @returns {_Inputs}
     */

    #createAttrInputs() {
        const inputs = {
            "label": this.#createAttrInputLabel(),
            "speed": this.#createAttrInput("speed"),
            "angle": this.#createAttrInput("angle"),
            "mass": this.#createAttrInput("mass"),
            "x": this.#createAttrInput("x"),
            "y": this.#createAttrInput("y")
        }

        inputs.speed.value = this.initialParams.speed.km.toFixed(2).toString()
        inputs.angle.value = this.initialParams.Θ.toFixed(2).toString()
        inputs.mass.value = (this.initialParams.mass / EARTHMASS).toFixed(2).toString()
        inputs.x.value = this.initialParams.x.subtract(CENTRE.x).mkm.toFixed(2).toString()
        inputs.y.value = this.initialParams.y.subtract(CENTRE.y).mkm.toFixed(2).toString()

        return inputs
    }

    /**
     * Create the HTML element that gives attributes
     * for the body, and append it to the table element
     * that contains all the attributes
     * @returns { HTMLDivElement }
     */
    #createAttrLabel() {
        const elem = document.createElement("div")
        addClasses(elem)("attr")
        elem.id = `attr-label-${this.name}`
        const cell = this.#attrLabelRow.insertCell()
        cell.append(elem)
        return elem
    }

    /**
     * Create the row in the attr input table corresponding
     * to the current object
     */
    #createAttrInputRow() {
        const tableElem = table(".attrs.input")
        const row = tableElem.insertRow()
        return row
    }

    #createAttrLabelRow() {
        const tableElem = table(".attrs")
        const row = tableElem.insertRow()
        return row
    }

    /**
     * Create SVG element to represent the body
     * @returns {SVGCircleElement}
     */
    #createSVGCircle () {
        return document.createElementNS(SVGNS, "circle")
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
     * @returns {Vector}
     */
    gFrom(body) {
        return Gravity.g(
            this.rTo(body), 
            body.mass, 
            this.posUnitRelTo(body)
        )
    }

    /**
     * The internal id of the object
     */
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

    /**
     * Mass in kg
     */
    get mass() {
        return Number.parseFloat(this.#svgCircle.getAttribute("mass"))
    }

    /**
     * Mass * postion
     */
    get mpos() {
        return this.pos.multScalar(this.mass)
    }

    /**
     * The name of the object to display to the user
     * 
     */
    get name() {
        return this.initialParams.name
    }

    get newΘ() {
        if (this.#attrInputs.angle.value.trim() == "") {
            return this.#initialParams.Θ
        } 
        
        return Number.parseFloat(this.#attrInputs.angle.value)

    }

    get newMass() {
        if (this.#attrInputs.mass.value.trim() == "") {
            return this.#initialParams.mass
            
        } 
        
        return Number.parseFloat(this.#attrInputs.mass.value) * EARTHMASS        
    }

    get newSpeed() {
        if (this.#attrInputs.speed.value.trim() == "") {
            return this.initialParams.speed
        } 
        
        return Dim.fromKm(Number.parseFloat(this.#attrInputs.speed.value))
    }

    get newX() {
        if (this.#attrInputs.x.value.trim() == "") {
            return this.#initialParams.x
        } 
        
        const dim = Dim.fromMKm(Number.parseFloat(this.#attrInputs.x.value)).add(CENTRE.x)

        return dim
    }

    get newY() {
        if (this.#attrInputs.y.value.trim() == "") {
            return this.#initialParams.y
        } 
        
        const dim = Dim.fromMKm(Number.parseFloat(this.#attrInputs.y.value)).add(CENTRE.y)

        return dim
    }

    /**
     * Momentum
     */
    get p() {
        return this.v.multScalar(this.mass)
    }

    get pVec() {
        // cf. https://en.wikipedia.org/wiki/Momentum
        return this.p.vec
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

    /**
     * Return the real period of the orbit 
     * 
     * @param {CelestialBody} body 
     * @returns 
     */
    periodActual(body) {
        return this.period(body) * TIMEMULT
    }

    get pos() {
        const [x, y] = this.posVec
        return Vector.from([x, y])
    }

    set pos(value) {
        this.posVec = value.vec 
    }

    /**
     * Position vector relative to another body
     * @param {CelestialBody} body 
     * @returns {Vector}
     */
    posRelTo (body) {
        return this.pos.subtract(body.pos)
    }

    /**
     * Return the unit vector of position 
     * relative to another body
     * @param {CelestialBody} body
     * @returns {UnitVector} 
     */

    posUnitRelTo (body) {
        return this.posRelTo(body).unit
    }

    /**
     * Return the position of the SVG element
     * representing the body
     */
    get posVec() {
        return Circle.pos(this.#svgCircle)
    }

    /**
     * Set the position of the SVG element
     * representing the body
     */
    set posVec(value) {
        // Set the position of the SVG object 
        Circle.setPos(this.#svgCircle, value)

        // Set the value of the attribute label on
        // the frontend
        const speed = this.velActual.r.km

        this.#attrLabel.textContent = `${this.name}: ${speed.toFixed(2)} km/s | ${(this.mass / EARTHMASS).toFixed(2)} earths`
    }

    /**
     * Position vector relative to another body
     * @param {CelestialBody} body 
     * @return {import("../../Pure/typedefs.js")._Vec}
     */
    posVecRelTo (body) {
        return this.pos.subtract(body.pos).vec
    }

    /**
     * Reset the body to initial values
     * @param {InitialBodyParams} params
     */
    resetToInitialParams(params) {
        const elem = this.#svgCircle

        // Multiply by the time multiplier
        const r_ = this.newSpeed.mult(TIMEMULT)

        const [vx, vy] = Angle.toVec(r_, this.newΘ).vec

        setAttrs(elem)(
            ["cx", String(this.newX)],
            ["cy", String(this.newY)],
            ["r", String(params.bodyRadius)],
            ["mass", String(this.newMass)],
            ["vx", String(vx)],
            ["vy", String(vy)],
            ["id", this.id]
        )

        this.addBodyClass(elem)
        return elem
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
        this.velVec = value.vec
    }

    get vel() {
        const [x, y] = this.velVec
        return new Vector(Dim.from(x), Dim.from(y))
    }

    /**
     * The velocity in units per second * TIMEMULT
     */
    set vel(value) {
        this.velVec = value.vec
    }

    /**
     * The velocity in units per second
     */
    get velActual() {
        return this.vel.divScalar(TIMEMULT)
    }

    get velVec() {
        return Circle.vel(this.#svgCircle)
    }

    set velVec(value) {
        Circle.setVel(this.#svgCircle, value)
    }
}
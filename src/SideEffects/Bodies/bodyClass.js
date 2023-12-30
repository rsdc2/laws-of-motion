/** @type {BodyInst} */
class BodyType {
    #id
    #posInit; 
    #bodyRadius
    #mass;
    #velPolarInit
    #circle

    /**
     * 
     * @param {string} id 
     * @param {Vec2D} pos initial position
     * @param {number} bodyRadius 
     * @param {number} mass initial mass
     * @param {PolarVec} velPolar initial velocity
     */
    constructor (id, pos, bodyRadius, mass, velPolar) {
        this.#id = id
        this.#posInit = pos
        this.#bodyRadius = bodyRadius
        this.#mass = mass
        this.#velPolarInit = velPolar
        this.#circle = this.#createCircle()
    }

    get bodyRadius() {
        return this.#bodyRadius
    }

    get circle() {
        return this.#circle
    }

    // Create the circle
    #createCircle () {
        const elem = document.createElementNS(SVGNS, "circle")

        const [cx, cy] = this.#posInit
        
        const [r, θ] = this.#velPolarInit
        const [vx, vy] = Angle.toVec(r, θ)

        setAttrs(elem)(
            ["cx", String(cx)],
            ["cy", String(cy)],
            ["r", String(this.bodyRadius)],
            ["mass", String(this.mass)],
            ["vx", String(vx)],
            ["vy", String(vy)],
            ["id", this.id]
        )

        addClasses(elem)("planet")
        return elem
    }

    get id() {
        return this.#id
    }

    get mass() {
        return this.#mass
    }

    get pos() {
        return BodyT.pos(this.#circle)
    }

}

// const x = new BodyType('sol', [0, 0], 10, 50, [0, 90])
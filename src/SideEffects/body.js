

const Body = {



    /**
     * Moves the body to the next point in the circle
     * as determined by δθ
     * @param {SVGCircleElement} body
     * @param {number} δθ
     * @returns {SVGCircleElement}
     */
    moveOnCircularPath: (body, δθ) => {

        const θ = Body.θ(body)
        const r = Body.orbitA(body)

        const [x, y] = cartDeg(r, θ + δθ)

        body = Body.setXY(body, [SOL.x + x, SOL.y + y])
        body = Body.setθ(body, θ + δθ)

        return body

    },


    /**
     * Moves the body to the next point in the circle
     * as determined by δθ
     * @param {SVGCircleElement} body
     * @param {number} δθ
     * @returns {SVGCircleElement}
     */
    moveOnEllipticalPath: (body, δθ) => {

        const θ = Body.θ(body)
        const [a, b] = Body.orbitAB(body)
        const r = Ellipse.rFromCenter(a, b, θ)

        const [x, y] = cartDeg(r, θ + δθ)

        body = Body.setXY(body, [SOL.x + x, SOL.y + y])
        body = Body.setθ(body, θ + δθ)

        return body

    },

    /**
     * Create a new circle element with relevant 
     * properties for an orbiting body
     * @param {number} bodyRadius
     * @param {[number, number]} center
     * @param {[number, number]} orbitCenter
     * @param {[number, number]} orbitAB
     * @param {string} id

     * @returns {SVGCircleElement}
     */
    new: (bodyRadius, center, orbitCenter, orbitAB, id) => {
        const elem = document.createElementNS(SVGNS, "circle")

        const [cx, cy] = center
        const [ox, oy] = orbitCenter
        const [a, b] = orbitAB

        setAttrs(elem)(
            ["cx", String(cx)],
            ["cy", String(cy)],
            ["r", String(bodyRadius)],
            ["ox", String(ox)],
            ["oy", String(oy)],
            ["a", String(a)],
            ["b", String(b)],
            ["θ", "90"],
            ["id", id]
        )

        addClasses(elem)("planet")
        return elem
    },

    /**
     * Get the named attribute qname from an 
     * circle element as a number
     * @param {SVGCircleElement} body 
     */
    numAttr: (body) => 
    
        /**
         * @param {string} qname
        */
        (qname) => parseFloat(body.getAttribute(qname)),

    /**
     * Set the cx and cy coordinates of a circle element
     * @param {SVGCircleElement} body 
     * @param {[number, number]} xy
     * @returns {SVGCircleElement}
     */
    setXY: (body, xy, ) => {
        const [x, y] = xy
        body.setAttribute('cx', String(x))
        body.setAttribute('cy', String(y))
        return body
    },

    /**
     * Set the θ attribute of the circle
     * @param {SVGCircleElement} body 
     * @param {number} θ
     * @returns {SVGCircleElement}
     */
    setθ: (body, θ) => {
        body.setAttribute('θ', String(θ))
        return body
    },

    /**
     * 
     * @param {SVGCircleElement} body 
     * @returns {number}
     */
    cx: (body) => Body.numAttr(body)("cx"),  

    /**
     * 
     * @param {SVGCircleElement} body 
     * @returns {number}
     */
    cy: (body) => Body.numAttr(body)("cy"),
 
    /**
     * 
     * @param {SVGCircleElement} body 
     * @returns {number}
     */
    r: (body) => Body.numAttr(body)("r"),

    /**
     * Get the orbit radius of a circular orbit
     * @param {SVGCircleElement} body 
     * @returns {number}
     */
    orbitA: (body) => Body.numAttr(body)("a"),

    /**
     * Get the orbit radius of a circular orbit
     * @param {SVGCircleElement} body 
     * @returns {[number, number]}
     */
    orbitAB: (body) => [Body.numAttr(body)("a"), Body.numAttr(body)("b")],

    /**
     * 
     * @param {SVGCircleElement} body 
     * @returns {number}
     */
    θ: (body) => parseFloat(body.getAttribute('θ')),

 
}
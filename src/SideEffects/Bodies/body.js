

const Body = {
    /**
     * 
     * @param {number} t
     * @param {[number, number]} pos
     * @param {[number, number]} vel 
     * @param {SVGCircleElement} body
     */
    moveAtT_: (t, pos, vel, body) => {
        const [x, y] = pos
        const [δx, δy] = vel
        Body.setX(body, δx * t + x)
        Body.setY(body, δy * t + y)

        return body
    },

    /**
     * 
     * @param {number} t
     * @param {Vec2D} pos
     * @param {Vec2D} vel 
     * @param {Vec2D} acc
     * @param {SVGCircleElement} body
     */
    moveAtT: (t, pos, vel, acc, body) => {
        // https://en.wikipedia.org/wiki/Force
        const [x, y] = pos
        const [δx, δy] = vel
        const [δδx, δδy] = acc

        Body.setX(body, (δδx * t + δx) * t + x)
        Body.setY(body, (δδy * t + δy) * t + y)

        return body
    },

    /**
     * 
     * @param {[number, number]} vel 
     * @param {SVGCircleElement} body
     */
    move: (vel, body) => {
        const num = Body.numAttr(body)
        const [x, y] = [num("cx"), num("cy")]
        const [δx, δy] = vel
        Body.setX(body, δx + x)
        Body.setY(body, δy + y)

        return body
    },

    /**
     * Create a new circle element with relevant 
     * properties for an orbiting body
     * @param {number} bodyRadius
     * @param {[number, number]} center
     * @param {string} id

     * @returns {SVGCircleElement}
     */
    new: (bodyRadius, center, id) => {
        const elem = document.createElementNS(SVGNS, "circle")

        const [cx, cy] = center

        setAttrs(elem)(
            ["cx", String(cx)],
            ["cy", String(cy)],
            ["r", String(bodyRadius)],
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
     * @param {number} x
     * @returns {SVGCircleElement}
     */
    setX: (body, x) => {
        body.setAttribute('cx', String(x))
        return body
    },

    /**
     * Set the cx and cy coordinates of a circle element
     * @param {SVGCircleElement} body 
     * @param {[number, number]} xy
     * @returns {SVGCircleElement}
     */
    setXY: (body, xy) => {
        const [x, y] = xy
        body.setAttribute('cx', String(x))
        body.setAttribute('cy', String(y))
        return body
    },

    /**
     * Set the cx and cy coordinates of a circle element
     * @param {SVGCircleElement} body 
     * @param {number} y
     * @returns {SVGCircleElement}
     */
    setY: (body, y) => {
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
     * 
     * @param {SVGCircleElement} body 
     * @returns {[number, number]}
     */
    xy: (body) => [Body.numAttr(body)("cx"), Body.numAttr(body)("cy")],


    /**
     * 
     * @param {SVGCircleElement} body 
     * @returns {number}
     */
    θ: (body) => parseFloat(body.getAttribute('θ')),

 
}
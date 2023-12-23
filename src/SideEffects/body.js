

const Body = {

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
     * 
     * @param {SVGCircleElement} body 
     * @returns {number}
     */
    θ: (body) => parseFloat(body.getAttribute('θ')),

 
}
const BodyT = {
    
    /**
     * 
     * @param {Vec2D} acc 
     * @param {SVGCircleElement} body 
     */
    accelerate: (acc, body) => {
        const pos = BodyT.pos(body)
        const vel = BodyT.v(body)
        
        const [pos_, vel_, acc_] = Motion.position(pos, vel, acc)

        BodyT.setPos(body, pos_)
        BodyT.setVel(body, vel_)
        BodyT.setAcc(body, acc)
    },

    /**
     * Set initial velocity and position
     * @param {SVGCircleElement} body 
     * @param {Vec2D} pos initial position
     * @param {Vec2D} vel initial velocity
     * @returns {SVGCircleElement}
     */
    start: (body, pos, vel) => {
        BodyT.setPos(body, pos)
        BodyT.setVel(body, vel)
        return body
    },

    /**
     * Set initial velocity and position with 
     * velocity in polar terms
     * @param {SVGCircleElement} body 
     * @param {BodyInst} bodyT
     * @returns {SVGCircleElement}
     */
    startPolar: (body, bodyT) => {
        const pos = bodyT.pos
        const vel = bodyT.velPolar

        BodyT.setPos(body, pos)
        BodyT.setVelPolar(body, vel)
        return body
    },

    /**
     * Return the mass of a body
     * @param {SVGCircleElement} body 
     * @returns {number}
     */
    mass: (body) => {
        return BodyT.numAttr(body)("mass")
    },

    /**
     * Create a new circle element with relevant 
     * properties for a body
     * @param {BodyInst} bodyT
     * @returns {SVGCircleElement}
     */
    new: (bodyT) => {
        const elem = document.createElementNS(SVGNS, "circle")

        const [cx, cy] = bodyT.pos

        setAttrs(elem)(
            ["cx", String(cx)],
            ["cy", String(cy)],
            ["r", String(bodyT.bodyRadius)],
            ["mass", String(bodyT.mass)],
            ["id", bodyT.id]
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
     * Set the acceleration vector of a circle element
     * @param {SVGCircleElement} body 
     * @param {Vec2D} acc
     * @returns {SVGCircleElement}
     */
    setAcc: (body, acc) => {
        const [ax, ay] = acc
        body.setAttribute('ax', String(ax))
        body.setAttribute('ay', String(ay))
        return body
    },
    
    /**
     * Set the mass of a body
     * @param {SVGCircleElement} body 
     * @param {number} mass
     */
    setMass: (body, mass) => {
        body.setAttribute("mass", String(mass))
    },

    /**
     * Set the cx and cy coordinates of a circle element
     * @param {SVGCircleElement} body 
     * @param {Vec2D} pos
     * @returns {SVGCircleElement}
     */
    setPos: (body, pos) => {
        const [x, y] = pos
        body.setAttribute('cx', String(x))
        body.setAttribute('cy', String(y))
        return body
    },

    /**
     * Set the velocity vector of a circle element
     * @param {SVGCircleElement} body 
     * @param {Vec2D} vxy
     * @returns {SVGCircleElement}
     */
    setVel: (body, vxy) => {
        const [vx, vy] = vxy
        body.setAttribute('vx', String(vx))
        body.setAttribute('vy', String(vy))
        return body
    },

    /**
     * Set the velocity vector of a circle element in polar terms
     * @param {SVGCircleElement} body 
     * @param {PolarVec} polar
     * @returns {SVGCircleElement}
     */
    setVelPolar: (body, polar) => {
        const [r, θ] = polar
        const [vx, vy] = Angle.toVec(r, θ)
        body.setAttribute('vx', String(vx))
        body.setAttribute('vy', String(vy))
        return body
    },

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
    cx: (body) => BodyT.numAttr(body)("cx"),  

    /**
     * 
     * @param {SVGCircleElement} body 
     * @returns {number}
     */
    cy: (body) => BodyT.numAttr(body)("cy"),
 
    /**
     * 
     * @param {SVGCircleElement} body 
     * @returns {number}
     */
    r: (body) => BodyT.numAttr(body)("r"),

    /**
     * Get the velocity of a body as a 2D vector 
     * @param {SVGCircleElement} body 
     * @returns {Vec2D}
     */
    v: (body) => {

        const vx = BodyT.numAttr(body)("vx")
        const vy = BodyT.numAttr(body)("vy")
        
        return [vx, vy]
    },

    /**
     * 
     * @param {SVGCircleElement} body 
     * @returns {Vec2D}
     */
    pos: (body) => [BodyT.numAttr(body)("cx"), BodyT.numAttr(body)("cy")],


    /**
     * 
     * @param {SVGCircleElement} body 
     * @returns {number}
     */
    θ: (body) => parseFloat(body.getAttribute('θ')),

 
}
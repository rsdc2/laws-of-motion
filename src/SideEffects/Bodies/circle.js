/**
 * Functions for interacting with SVG circle elements
 * @namespace
 */
const Circle = {
    
    /**
     * 
     * @param {Vec2D} acc 
     * @param {SVGCircleElement} circle 
     */
    accelerate: (acc, circle) => {
        const pos = Circle.pos(circle)
        const vel = Circle.vel(circle)
        
        const [pos_, vel_, acc_] = Motion.position(Vector2D.from(pos), Vector2D.from(vel), Vector2D.from(acc))

        Circle.setPos(circle, pos_.vec2D)
        Circle.setVel(circle, vel_.vec2D)
        Circle.setAcc(circle, acc_.vec2D)
    },

    /**
     * Set initial velocity and position
     * @param {SVGCircleElement} circle 
     * @param {Vec2D} pos initial position
     * @param {Vec2D} vel initial velocity
     * @returns {SVGCircleElement}
     */
    start: (circle, pos, vel) => {
        Circle.setPos(circle, pos)
        Circle.setVel(circle, vel)
        return circle
    },

    /**
     * Set initial velocity and position with 
     * velocity in polar terms
     * @param {SVGCircleElement} circle 
     * @param {InitialBodyParams} params
     * @returns {SVGCircleElement}
     */
    startPolar: (circle, params) => {
        const pos = params.pos.vec2D
        const vel = params.velPolar

        Circle.setPos(circle, pos)
        Circle.setVelPolar(circle, vel)
        return circle
    },

    /**
     * Return the mass of a body
     * @param {SVGCircleElement} circle 
     * @returns {number}
     */
    mass: (circle) => {
        return Circle.numAttr(circle)("mass")
    },

    /**
     * Create a new circle element with relevant 
     * properties for a body
     * @param {InitialBodyParams} params
     * @returns {SVGCircleElement}
     */
    new: (params) => {
        const elem = document.createElementNS(SVGNS, "circle")

        const [cx, cy] = params.pos.vec2D

        setAttrs(elem)(
            ["cx", String(cx)],
            ["cy", String(cy)],
            ["r", String(params.bodyRadius)],
            ["mass", String(params.mass)],
            ["id", params.id]
        )

        addClasses(elem)("planet")
        return elem
    },

    /**
     * Get the named attribute qname from an 
     * circle element as a number
     * @param {SVGCircleElement} circle 
     */
    numAttr: (circle) => 
    
        /**
         * @param {string} qname
        */
        (qname) => parseFloat(circle.getAttribute(qname)),

    /**
     * Set the acceleration vector of a circle element
     * @param {SVGCircleElement} circle 
     * @param {Vec2D} acc
     * @returns {SVGCircleElement}
     */
    setAcc: (circle, acc) => {
        const [ax, ay] = acc
        circle.setAttribute('ax', String(ax))
        circle.setAttribute('ay', String(ay))
        return circle
    },
    
    /**
     * Set the mass of a body
     * @param {SVGCircleElement} circle 
     * @param {number} mass
     */
    setMass: (circle, mass) => {
        circle.setAttribute("mass", String(mass))
    },

    /**
     * Set the cx and cy coordinates of a circle element
     * @param {SVGCircleElement} circle 
     * @param {Vec2D} pos
     * @returns {SVGCircleElement}
     */
    setPos: (circle, pos) => {
        const [x, y] = pos
        circle.setAttribute('cx', String(x))
        circle.setAttribute('cy', String(y))
        return circle
    },

    /**
     * Set the velocity vector of a circle element
     * @param {SVGCircleElement} circle 
     * @param {Vec2D} vxy
     * @returns {SVGCircleElement}
     */
    setVel: (circle, vxy) => {
        const [vx, vy] = vxy
        circle.setAttribute('vx', String(vx))
        circle.setAttribute('vy', String(vy))
        return circle
    },

    /**
     * Set the velocity vector of a circle element in polar terms
     * @param {SVGCircleElement} circle 
     * @param {PolarVec} polar
     * @returns {SVGCircleElement}
     */
    setVelPolar: (circle, polar) => {
        const [r, θ] = polar
        const [vx, vy] = Angle.toVec(r, θ).vec2D
        circle.setAttribute('vx', String(vx))
        circle.setAttribute('vy', String(vy))
        return circle
    },

    /**
     * Set the cx and cy coordinates of a circle element
     * @param {SVGCircleElement} circle 
     * @param {number} x
     * @returns {SVGCircleElement}
     */
    setX: (circle, x) => {
        circle.setAttribute('cx', String(x))
        return circle
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
     * Get the velocity of a body as a 2D vector 
     * @param {SVGCircleElement} body 
     * @returns {Vec2D}
     */
    acc: (body) => {

        const ax = Circle.numAttr(body)("ax")
        const ay = Circle.numAttr(body)("ay")
        
        return [ax, ay]
    },

    /**
     * 
     * @param {SVGCircleElement} body 
     * @returns {number}
     */
    cx: (body) => Circle.numAttr(body)("cx"),  

    /**
     * 
     * @param {SVGCircleElement} body 
     * @returns {number}
     */
    cy: (body) => Circle.numAttr(body)("cy"),
 
    /**
     * 
     * @param {SVGCircleElement} body 
     * @returns {number}
     */
    r: (body) => Circle.numAttr(body)("r"),

    /**
     * Get the velocity of a body as a 2D vector 
     * @param {SVGCircleElement} body 
     * @returns {Vec2D}
     */
    vel: (body) => {

        const vx = Circle.numAttr(body)("vx")
        const vy = Circle.numAttr(body)("vy")
        
        return [vx, vy]
    },

    /**
     * 
     * @param {SVGCircleElement} body 
     * @returns {Vec2D}
     */
    pos: (body) => [Circle.numAttr(body)("cx"), Circle.numAttr(body)("cy")],


    /**
     * 
     * @param {SVGCircleElement} body 
     * @returns {number}
     */
    θ: (body) => parseFloat(body.getAttribute('θ')),

 
}
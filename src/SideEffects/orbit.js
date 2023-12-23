const Orbit = {

    /**
     * @param {number} a
     * @param {number} b
     * @param {[number, number]} center
     * @param {string} id
     * @returns {SVGEllipseElement}
     */
    ellipse: (a, b, center, id) => {
        const elem = document.createElementNS(SVGNS, "ellipse")

        const [x, y] = center

        elem.setAttribute("cx", `${x}`)
        elem.setAttribute("cy", `${y}`)
        elem.setAttribute("rx", `${a}`)
        elem.setAttribute("ry", `${b}`)
        addClasses(elem)("orbit")
        elem.id = id
        return elem
    },

}
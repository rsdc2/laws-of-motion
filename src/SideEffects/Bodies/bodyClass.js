/** @type {BodyInst} */
class BodyType {
    
    // /** @type {string} */ (#id);
    // #pos; 
    // #bodyRadius
    // #mass;
    // #velPolar

    /**
     * 
     * @param {string} id 
     * @param {Vec2D} pos 
     * @param {number} bodyRadius 
     * @param {number} mass 
     * @param {PolarVec} velPolar 
     */
    constructor (id, pos, bodyRadius, mass, velPolar) {
        this.id = id
        this.pos = pos
        this.bodyRadius = bodyRadius
        this.mass = mass
        this.velPolar = velPolar
    }
}

// const x = new BodyType('sol', [0, 0], 10, 50, [0, 90])
class Distance {

    #value // value in metres

    /**
     * 
     * @param {number} metres
     */
    constructor(metres) {
        this.#value = metres
    }


    /**
     * 
     * @param {number} au Astronomical Units
     */
    static fromAU(au) {
        const metres = au * 1.495978707e11
        return Distance.fromMetres(metres)
    }

    /**
     * 
     * @param {number} metres 
     * @returns 
     */
    static fromMetres(metres) {
        return new Distance(metres)
    }


    get metres() {
        return this.#value
    }


}
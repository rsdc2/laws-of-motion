class Dim {

    #value // value in pixels
    

    /**
     * 
     * @param {number} value pixels 
     */
    constructor(value) {
        this.#value = value
    }

    /**
     * 
     * @param {Dim} other 
     */
    add(other) {
        return new Dim(this.value + other.value)
    }

    get au() {
        return this.#value * Dim.PIXELS2AU
    }

    /**
     * 
     * @param {number} scalar 
     */
    div(scalar) {
        return new Dim(this.value / scalar)
    }

    /**
     * 
     * @param {number} pixels 
     */
    static from(pixels) {
        return new Dim(pixels)
    }

    /**
     * 
     * @param {number} au Astronomical Units
     */
    static fromAU(au) {
        const m = AU2M * au
        const pixels = m * Dim.M2PIXELS
        return new Dim(pixels)
    }

    /**
     * 
     * @param {number} km 
     */
    static fromKm(km) {
        return new Dim(km * Dim.KM2PIXELS)
    }

    /**
     * 
     * @param {number} metres 
     * @returns 
     */
    static fromMetres(metres) {
        return new Dim(metres * Dim.M2PIXELS)
    }

    /**
     * 
     * @param {number} mkm 
     */
    static fromMKm(mkm) {
        return new Dim(mkm * Dim.MKM2PIXELS)
    }

    /**
     * 
     * @param {number} pixels 
     */
    static fromPixels(pixels) {
        return new Dim(pixels)
    }
    
    get km() {
        return this.#value * Dim.PIXELS2KM
    }

    get metres() {
        return this.#value * Dim.PIXELS2M
    }

    /**
     * Millions of km
     */
    get mkm() {
        return this.#value / 10
    }

    static get MKM2PIXELS() {
        return 1 / Dim.PIXELS2MKM
    }

    static get KM2PIXELS() {
        return 1 / Dim.PIXELS2KM
    }
        
    static get M2PIXELS() {
        return 1 / this.PIXELS2M
    }

    /**
     * 
     * @param {number} scalar 
     */
    mult(scalar) {
        return new Dim(this.value * scalar)
    }

    get pixels() {
        return this.#value
    }

    static get PIXELS2AU() {
        const M2AU = 1 / AU2M
        return Dim.PIXELS2M * M2AU
    }

    static get PIXELS2MKM() {
        return 10
    }

    static get PIXELS2KM() {
        return Dim.PIXELS2MKM / 1e6
    }

    static get PIXELS2M() {
        return Dim.PIXELS2MKM / 1e9
    }

    /**
     * 
     * @param {number} exp exponent 
     */
    pow(exp) {
        return new Dim(this.value ** exp)

    }

    /**
     * 
     * @param {Dim} other 
     */
    subtract(other) {
        return new Dim(this.value - other.value)
    }

    /**
     * Millions of km
     */
    get value() {
        return this.#value
    }

}
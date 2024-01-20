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

    // /**
    //  * 
    //  * @param {number} au Astronomical Units
    //  */
    // static fromAU(au) {
    //     const m = AU2M * au
    //     const pixels = m * Dim.M2PIXELS
    //     return new Dim(pixels)
    // }

    /**
     * 
     * @param {number} km 
     */
    static fromKm(km) {
        return Dim.fromMetres(km * 1000)
    }

    /**
     * 
     * @param {number} metres 
     * @returns 
     */
    static fromMetres(metres) {
        return new Dim(metres * Dim.PIXELS_PER_M)
    }

    /**
     * 
     * @param {number} mkm 
     */
    static fromMKm(mkm) {
        return Dim.fromKm(mkm * 1000000)
    }

    /**
     * 
     * @param {number} pixels 
     */
    static fromPixels(pixels) {
        return new Dim(pixels)
    }
    
    get km() {
        return this.metres / 1000
    }

    get metres() {
        return this.#value * Dim.M_PER_PIXEL
    }

    /**
     * Millions of km
     */
    get mkm() {
        return this.km / 1000000
    }

    static get MKM_PER_PIXEL() {
        return 1 / Dim.PIXELS_PER_MKM
    }

    static get KM_PER_PIXEL() {
        return 1 / Dim.PIXELS_PER_KM
    }
        
    static get M_PER_PIXEL() {
        return 1 / this.PIXELS_PER_M
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
        return Dim.PIXELS_PER_M * M2AU
    }

    static get PIXELS_PER_MKM() {
        return Dim.PIXELS_PER_M * 1e9
    }

    static get PIXELS_PER_KM() {
        return Dim.PIXELS_PER_M * 1000
    }

    static get PIXELS_PER_M() {
        return 0.5 / 1e8
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
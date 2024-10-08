export class Dim {

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

    // get au() {
    //     return this.#value * Dim.PIXELS2AU
    // }

    deepcopy() {
        return new Dim(this.#value)
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

    get m() {
        return this.metres
    }

    get metres() {
        return this.pixels * Dim.M_PER_PIXEL
    }

    /**
     * Millions of km
     */
    get mkm() {
        return this.km / 1000000
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

    get pix() {
        return this.#value
    }

    get pixels() {
        return this.#value
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

    toString() {
        return `${this.value}`
    }

    /**
     * Millions of km
     */
    get value() {
        return this.#value
    }

}
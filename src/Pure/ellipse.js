

const Ellipse = {

    /**
     * 
     * @param {number} a 
     * @param {number} b 
     */
    e: (a, b) => {
        return sin(b) / sin(a)
    },

    /**
     * https://en.wikipedia.org/wiki/Ellipse#Polar_forms
     * @param {number} a 
     * @param {number} b 
     * @param {number} θ 
     * @returns {number}
     */

    rFromCenter: (a, b, θ) => {
        return (a * b) / sqrt((b * cos(θ)) ** 2 + (a * sin(θ)) ** 2)
    },

    /**
     * cf. https://phys.libretexts.org/Bookshelves/Astronomy__Cosmology/Celestial_Mechanics_(Tatum)/02%3A_Conic_Sections/2.02%3A_The_Ellipse
     * @param {number} a 
     * @param {number} b 
     * @param {number} θ 
     */
    rFromFocus: (a, b, θ) => {
        const e = Ellipse.e(a, b)
        return (a * (1 - e ** 2)) / (1 + e * cos(θ))
    }
}
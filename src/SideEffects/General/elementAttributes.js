
export const addClasses = 
    (/** @type {Array.<HTMLElement> | Array.<SVGElement>} */ ...elems) => 
    (/** @type {Array.<string>} */ ...classes) => 
    elems.forEach( 
        /**
         * 
         * @param {HTMLElement | SVGElement} elem 
         * @returns 
         */
        elem => elem.classList.add(...classes)
    )


export const removeClasses = 
    (/** @type {Array.<HTMLElement>} */ ...elems) => 
    (/** @type {Array.<string>} */ ...classes) => 
    elems.forEach( elem => elem.classList.remove(...classes))


/**
 * Set attributes of a series of elements
 * @param  {Array.<HTMLElement> | Array.<SVGElement>} elems 
 * @returns 
 */
export const setAttrs = 

    (...elems) => 

    /**
     * 
     * @param  {Array.<[string, string | null]>} attrs 
     */

    (...attrs) => 

    elems.forEach( 
        /**
         * 
         * @param {HTMLElement | SVGElement} elem 
         * @returns 
         */
        elem => {
            attrs.forEach (attr => {
                const [attrName, value] = attr
                if (value != null) {
                    elem.setAttribute(attrName, value)
                }
            })
        }
    )


/**
 * @param {Array.<HTMLButtonElement>} elems 
 */

export const activate = (...elems) => elems.forEach( elem => addClasses(elem)("activated"))

/**
 * @param {Array.<HTMLButtonElement>} elems 
 */

export const deactivate = (...elems) => elems.forEach( elem => removeClasses(elem)("activated"))

/**
 * @param {Array.<HTMLButtonElement>} elems 
 */

export const disable = (...elems) => elems.forEach( elem => elem.disabled = true )


/**
 * @param {Array.<HTMLButtonElement>} elems 
 */

export const enable = (...elems) => elems.forEach( elem => elem.disabled = false )

/**
 * 
 * @param  {...HTMLElement} elems 
 * @returns 
 */

export const getActivated = (...elems) => elems.map( elem => hasClass ("activated") (elem)) 

/**
 * 
 */
export const hasClass = (/** @type {string} */ className) => (/** @type {HTMLElement} elem */ elem) =>  elem.classList.contains(className)

/**
 * @param {Array.<HTMLElement>} elems
 */
export const hide = (...elems) => elems.forEach( elem => elem.hidden = true )

export const isActivated = (/** @type {HTMLButtonElement}*/ elem) => hasClass("activated")(elem)

/**
 * @param {Array.<HTMLElement>} elems
 */
export const show = (...elems) => elems.forEach( elem => elem.hidden = false )
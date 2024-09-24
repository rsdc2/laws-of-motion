
/**
 * @template T
 * @param {Array<T>} arr 
 * @returns {Array<T>}
 */
export function ArrayT(arr) {
    return arr
}

/**
 * @template {Node} T
 * @param {NodeListOf<T>} nodelist 
 * @returns {Array<T>}
 */
export function nodeListToArr(nodelist) {
    const arr = [];
    nodelist.forEach( item => arr.push(item))
    return arr;
}
import { Dim } from "./dim.js";
import { Vector } from "./vector.js";

/***
 * @typedef {[number, number]} Vec
 */

/***
 * @typedef {[Dim, number]} PolarVec
 */

/**
 * @typedef {[Dim, Dim]} DistVec2D
 */


/**
 * @typedef {Object} InitialBodyParams
 * @property {string} id
 * @property {Vector} pos position vector in pixels
 * @property {number} bodyRadius
 * @property {number} mass mass in kg * 1e9
 * @property {PolarVec} velPolar initial velocity in pixels per unit time
 * @property {SVGCircleElement} [circle]
 */


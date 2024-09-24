// Modifiable configurations

import { Vector } from "../Pure/vector.js"
import { Dim } from "../Pure/dim.js"
import { PolarVec } from "../Pure/typedefs.js"


export const CENTRE = Vector.fromPix([1250, 1250])
export const MERCURYPOS = CENTRE.addM([57.91e9, 0])
export const VENUSPOS = CENTRE.addMKm([108.21, 0])
export const EARTHPOS = CENTRE.addM([147.098450e9, 0])
export const MARSPOS = CENTRE.addMKm([227.939366, 0])
export const MOONPOS = EARTHPOS.addM([362600000, 0])
export const JUPITERPOS = CENTRE.addMKm([778.479, 0])


export const MERCURYSTARTVEL = PolarVec([Dim.fromKm(47.36), 90])
export const VENUSSTARTVEL = PolarVec([Dim.fromKm(35.02), 90])
export const EARTHSTARTVEL = PolarVec([Dim.fromKm(30.29), 90])
export const MARSSTARTVEL = PolarVec([Dim.fromKm(24.07), 90])
export const MOONSTARTVEL = PolarVec([Dim.fromKm(30), 90])
export const JUPITERSTARTVEL = PolarVec([Dim.fromKm(13.06), 90])
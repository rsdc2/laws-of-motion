// Modifiable configurations

import { Vector } from "../Pure/vector.js"
import { Dim } from "../Pure/dim.js"
import { PolarVec } from "../Pure/typedefs.js"



export const CENTRE = Vector.fromMKm([300, 300])
export const EARTHPOS = CENTRE.addM([147.098450e9, 0])
export const MOONPOS = EARTHPOS.addM([362600000, 0])
export const VEL = Dim.fromKm(24)

export const EARTHSTARTVEL = PolarVec([Dim.fromKm(30.29), 90])
export const MOONSTARTVEL = PolarVec([Dim.fromKm(30), 90])
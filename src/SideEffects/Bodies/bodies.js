
const space = svg("#space")

const sol1Init = Body.new(
    10, 
    SOL1.xy, 
    "sol1"
)

const sol2Init = Body.new(
    10, 
    SOL2.xy, 
    "sol2"
)

const sol1 = () => circle("#sol1")
const sol2 = () => circle("#sol2")

const appendBodies = () => {
    space.appendChild(sol1Init)  
    space.appendChild(sol2Init)  
}
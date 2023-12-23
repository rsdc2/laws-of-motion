
const space = svg("#space")

const mercuryOrbit = Orbit.ellipse(MERCURY.a, MERCURY.b, [SOL.x, SOL.y], "mercury")
const venusOrbit = Orbit.ellipse(VENUS.a, VENUS.b, [SOL.x, SOL.y], "venus")
const earthOrbit = Orbit.ellipse(EARTH.a, EARTH.b, [SOL.x, SOL.y], "earth")
const marsOrbit = Orbit.ellipse(MARS.a, MARS.b, [SOL.x, SOL.y], "mars")
const jupiterOrbit = Orbit.ellipse(JUPITER.a, JUPITER.b, [SOL.x, SOL.y], "jupiter")
const saturnOrbit = Orbit.ellipse(SATURN.a, SATURN.b, [SOL.x, SOL.y], "saturn")
const uranusOrbit = Orbit.ellipse(URANUS.a, URANUS.b, [SOL.x, SOL.y], "uranus")
const neptuneOrbit = Orbit.ellipse(NEPTUNE.a, NEPTUNE.b, [SOL.x, SOL.y], "neptune")
const plutoOrbit = Orbit.ellipse(PLUTO.a, PLUTO.b, [SOL.x, SOL.y], "pluto")

const mercuryInit = Body.new(
    5, 
    [MERCURY.a + SOL.x, MERCURY.b + SOL.y], 
    [SOL.x, SOL.y],
    [MERCURY.a, MERCURY.b],
    "mercury"
)

const venusInit = Body.new(
    5, 
    [VENUS.a + SOL.x, VENUS.b + SOL.y], 
    [SOL.x, SOL.y],
    [VENUS.a, VENUS.b],
    "venus"
)
const earthInit = Body.new(
    5, 
    [EARTH.a + SOL.x, EARTH.b + SOL.y], 
    [SOL.x, SOL.y],
    [EARTH.a, EARTH.b],
    "earth"
)

const marsInit = Body.new(
    5, 
    [MARS.a + SOL.x, MARS.b + SOL.y], 
    [SOL.x, SOL.y],
    [MARS.a, MARS.b],
    "mars"
)

const jupiterInit = Body.new(
    5, 
    [JUPITER.a + SOL.x, JUPITER.b + SOL.y],
    [SOL.x, SOL.y],
    [JUPITER.a, JUPITER.b],
    "jupiter"
)

const saturnInit = Body.new(
    5, 
    [SATURN.a + SOL.x, SATURN.b + SOL.y],
    [SOL.x, SOL.y],
    [SATURN.a, SATURN.b],
    "saturn"
)

const saturnRingsInit = Body.new(
    10, 
    [SATURN.a + SOL.x, SATURN.b + SOL.y],
    [SOL.x, SOL.y],
    [SATURN.a, SATURN.b],
    "saturnRings"
)

const uranusInit = Body.new(
    5, 
    [URANUS.a + SOL.x, URANUS.b + SOL.y],
    [SOL.x, SOL.y],
    [URANUS.a, URANUS.b],
    "uranus"
)

const neptuneInit = Body.new(
    5, 
    [NEPTUNE.a + SOL.x, NEPTUNE.b + SOL.y],
    [SOL.x, SOL.y],
    [NEPTUNE.a, NEPTUNE.b],
    "neptune"
)

const plutoInit = Body.new(
    5, 
    [PLUTO.a + SOL.x, PLUTO.b + SOL.y],
    [SOL.x, SOL.y],
    [PLUTO.a, PLUTO.b],
    "pluto"
)

const mercury = () => circle("#mercury")
const venus = () => circle("#venus")
const earth = () => circle("#earth")
const mars = () => circle("#mars")
const jupiter = () => circle("#jupiter")
const saturn = () => circle("#saturn") 
const saturnRings = () => circle("#saturnRings") 
const uranus = () => circle("#uranus") 
const neptune = () => circle("#neptune") 
const pluto = () => circle("#pluto") 

const sol = Body.new(
    10, 
    [SOL.x, SOL.y], 
    [SOL.x, SOL.y],
    [0, 0],
    "sol"
)


space.appendChild(sol)  
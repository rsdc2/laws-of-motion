const Timer = {
    start: () => setInterval( () => {
    
        Body.moveOnEllipticalPath(mercury(), 10)
        Body.moveOnEllipticalPath(venus(), 7)
        Body.moveOnEllipticalPath(earth(), 5)
        Body.moveOnEllipticalPath(mars(), 3)
        Body.moveOnEllipticalPath(jupiter(), 1)
        Body.moveOnEllipticalPath(saturn(), 0.7)
        Body.moveOnEllipticalPath(saturnRings(), 0.7)
        Body.moveOnEllipticalPath(uranus(), 0.3)
        Body.moveOnEllipticalPath(neptune(), 0.1)
        Body.moveOnEllipticalPath(pluto(), 0.07)

    }, 50)
}



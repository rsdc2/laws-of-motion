# Laws of motion

## Overview

This simulates the gravitational attraction between multiple bodies. It runs entirely in the browser.

With the default settings it simulates the orbits of the inner planets, i.e. Mercury, Venus, Earth and Mars, around the Sun. It is possible to modify the attributes of these planets (initial speed, direction, mass and location), as well as to introduce new objects.

## Run from GitHub Pages

Follow this link [https://rsdc2.github.io/laws-of-motion/](https://rsdc2.github.io/laws-of-motion/).


## Run locally

1. Install `http-server` for serving the code locally.

```
npm install
```

2. Serve locally:

```
npx http-server
```

3. Load in browser:

e.g. 

```
http://localhost:8080
```

## Usage instructions

- To modify initial parameters for the objects, click `Modify initial parameters`, and change the details in the appropriate cells of the table.
- To reset to initial settings, click `Reset`.
- To pause the simulation, click `Pause`.
- To restart the simulation, clikc `Start`.

## Dependencies

The only dependency is [`http-server`](https://www.npmjs.com/package/http-server) (MIT license) for serving the code locally.
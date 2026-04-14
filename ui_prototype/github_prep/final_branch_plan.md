# Final Branch Plan: M1 Main Menu UI

> **Target Branch**: `feature/m1-main-menu`
> **Source Ref**: `main`
> **Author**: `ENGINEER`

### Strategy
Following the Handor Games `publish-to-github` skill standard, this package will NOT commit directly to `main`. 

We will checkout `feature/m1-main-menu` to isolate the introduction of the Node.js structural wrapper. This is our first major code footprint crossing multiple domains (docs, config, front-end, back-end). By isolating this in a `feature` branch, we allow `DESIGNER` and `ARTIST` to freely pull the code locally and push subjective timing/aesthetic tweaks (e.g., hover speeds) before `TECHDIR` signs off on the final architecture merge into `main`.

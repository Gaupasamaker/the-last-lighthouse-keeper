# UI Prototype Scaffold (M1)

This directory contains the concrete M1 execution of the Main Menu interface as defined by the Handor Games UX, Visual, and Engineering specs.

## Architecture
To fulfill the requirement of an **engine-agnostic** V1, the menu operates as a zero-dependency local Node.js server. 
- HTML/CSS handle styling and flow.
- Vanilla JavaScript handles keyboard state mapping and DOM manipulation.
- A Node.js backend (`menu_server.js`) mimics the localized file I/O operations (fetching save datasets and forcing local process termination).

## Execution Instructions
1. Ensure you have Node.js installed.
2. From the `ui_prototype` directory, run:
   ```bash
   node src/menu_server.js
   ```
3. Open `http://localhost:3000` in your web browser.

### Functionality Mapped
- Keyboard vs Mouse isolated focus states (per DESIGNER spec).
- Dynamic width scaling up to 45vw ensuring accessibility doesn't bleed into the key art block.
- A `try/catch` blocker that grays out the Continue button if `gameState.example.json` is missing or corrupted.
- An explicit Node `process.exit(0)` to fulfill the "Quit" mandate locally.

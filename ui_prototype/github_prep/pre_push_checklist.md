# Pre-Push Checklist: M1 UI Prototype

Run this checklist immediately before invoking `mcp_github_push_files`.

### 1. Safety & Credential Audit
- [ ] **No Secrets Exposed**: Confirmed `menu_server.js` contains no hardcoded tokens, API keys, or backend passwords.
- [ ] **No Hidden Dependencies**: Confirmed `node_modules/` or `package.json` are NOT dynamically tracking (Zero-dependency architecture).
- [ ] **No Temp Artifacts**: Confirmed `/ui_prototype` contains no scrap scripts, `.tmp` log dumps, or `console.log` artifact clusters.

### 2. Path & Reference Checks
- [ ] **Absolute Pathing**: Confirmed `menu_server.js` successfully maps to `/public` ignoring parent environments.
- [ ] **Data Fetching**: Confirmed `fetch('/api/gamestate')` targets the internal URL, not a phantom external IP.

### 3. Workflow Sanity
- [ ] **Target Branch**: Verified local push target is `feature/m1-main-menu` and NOT `main`.
- [ ] **Commit Format**: Verified all 4 atomic commits match the `[scope]: description` taxonomy. 
- [ ] **Executable Verification**: Ran `node src/menu_server.js` identically on the current filesystem prior to staging and encountered zero fatal crashes.

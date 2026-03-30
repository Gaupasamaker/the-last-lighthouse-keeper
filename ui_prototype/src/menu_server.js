const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, '../public');
const SAVE_PATH = path.join(__dirname, '../data/gameState.example.json');

const server = http.createServer((req, res) => {
    // ------------------------------------------------------------------
    // 1. API Endpoint: Check Save State
    // Required by ENGINEER specs to trap corrupted JSON natively before 
    // passing the logic to the FrontEnd DOM wrapper.
    // ------------------------------------------------------------------
    if (req.url === '/api/gamestate') {
        try {
            if (!fs.existsSync(SAVE_PATH)) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ error: "No save file" }));
            }
            const data = fs.readFileSync(SAVE_PATH, 'utf8');
            const parsed = JSON.parse(data); // Will deliberately throw if corrupted
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ loaded: true, day: parsed.day }));
        } catch (error) {
            // Corrupt saves are explicitly treated as missing to protect M1 stability
            res.writeHead(500, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ error: "Corrupted save data" }));
        }
    }

    // ------------------------------------------------------------------
    // 2. API Endpoint: Local Quit Wrapper
    // Bypass for modern browser tab security: instead of trying to hit 
    // window.close() on the client, we intentionally murder the server running it.
    // ------------------------------------------------------------------
    if (req.url === '/api/quit' && req.method === 'POST') {
        res.writeHead(200);
        res.end();
        console.log("Session termination requested by user. Shutting down UI Wrapper.");
        setTimeout(() => process.exit(0), 500); // Give the browser time to render 'Safe to close' HTML
        return;
    }

    // ------------------------------------------------------------------
    // 3. Static File Server (Lightweight, Engine-Agnostic File Host)
    // ------------------------------------------------------------------
    // Safety check: Prevent basic directory traversal outside PUBLIC_DIR
    const safeBaseUrl = req.url === '/' ? '/index.html' : req.url;
    const safeSuffix = path.normalize(safeBaseUrl).replace(/^(\.\.[\/\\])+/, '');
    const filePath = path.join(PUBLIC_DIR, safeSuffix);

    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.webm': 'video/webm',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif'
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(404);
            res.end("404 Not Found");
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`[Handor Games M1] Main Menu Prototype booting on http://localhost:${PORT}`);
});

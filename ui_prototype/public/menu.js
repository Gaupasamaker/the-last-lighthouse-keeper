document.addEventListener("DOMContentLoaded", () => {
    const btnContinue = document.getElementById("btn-continue");
    const menuItems = Array.from(document.querySelectorAll(".menu-item"));
    
    // UI Focus State (Keyboard Navigation Track)
    let focusIndex = -1; 
    let usingKeyboard = false;

    // References to UI Containers
    const loadingState = document.getElementById('loading-state');
    const menuContainer = document.getElementById('menu-container');
    const settingsOverlay = document.getElementById('settings-overlay');

    // M1 Placeholder: Click to dismiss Settings Overlay
    settingsOverlay.addEventListener('click', () => {
        settingsOverlay.classList.add('hidden');
    });

    // 1. Initial State Hydration via API (Simulate slight delay to show loading state)
    // In production, this verifies local save integrity before exposing the front door.
    setTimeout(() => {
        fetch('/api/gamestate')
            .then(res => {
                if (!res.ok) throw new Error("No save or corrupt data");
                return res.json();
            })
            .then(data => {
                // Save exists and parsed successfully
                btnContinue.classList.remove("disabled");
                revealMenu(0); // Focus 'Continue'
            })
            .catch(err => {
                // No save or corrupted JSON; fallback triggered per DESIGNER spec
                console.log("Hydration fallback:", err.message);
                btnContinue.classList.add("disabled");
                revealMenu(1); // Focus 'New Game'
            });
    }, 400); // Artificial 400ms delay to make the hydration pulse visible

    function revealMenu(initialFocus) {
        loadingState.classList.add('hidden');
        menuContainer.classList.remove('hidden');
        setFocus(initialFocus);
    }

    // 2. Clear focus states
    function clearFocus() {
        menuItems.forEach(item => {
            item.classList.remove("keyboard-focus");
        });
    }

    // 3. Set Focus (Keyboard explicit isolation vs Mouse)
    function setFocus(index) {
        if (index < 0 || index >= menuItems.length) return;
        if (menuItems[index].classList.contains("disabled")) return;
        
        clearFocus();
        focusIndex = index;
        if (usingKeyboard) {
            menuItems[focusIndex].classList.add("keyboard-focus");
        }
    }

    // 4. Mouse Listeners
    // Mousing over any active element removes keyboard tracking distinctiveness
    menuItems.forEach((item, idx) => {
        item.addEventListener("mouseenter", () => {
            usingKeyboard = false;
            clearFocus();
            focusIndex = idx; // sync for potential keyboard resumption
        });

        item.addEventListener("click", () => {
            if (item.classList.contains("disabled")) return;
            handleAction(item.id);
        });
    });

    // 5. Normalized Keyboard Navigation (W/S & Arrows mapped)
    window.addEventListener("keydown", (e) => {
        if (!settingsOverlay.classList.contains("hidden")) {
            // Dismiss M1 Settings overlay implicitly if any key pressed
            settingsOverlay.classList.add("hidden");
            return;
        }

        // Normalize key to lower case to elegantly handle CapsLock shifts
        const keyLower = e.key.toLowerCase();

        // Only hijack defaults if it's a menu navigation key
        const navKeys = ["arrowup", "arrowdown", "w", "s", "enter", " "];
        if (navKeys.includes(keyLower)) {
            e.preventDefault(); // Stop default browser scrolling or UI hijacking
        } else {
            return; // Ignore other typing
        }

        usingKeyboard = true;
        let nextIndex = focusIndex;

        if (keyLower === "arrowdown" || keyLower === "s") {
            do {
                nextIndex = (nextIndex + 1) % menuItems.length;
            } while (menuItems[nextIndex].classList.contains("disabled"));
            setFocus(nextIndex);
        }
        else if (keyLower === "arrowup" || keyLower === "w") {
            do {
                nextIndex = (nextIndex - 1 + menuItems.length) % menuItems.length;
            } while (menuItems[nextIndex].classList.contains("disabled"));
            setFocus(nextIndex);
        }
        else if (keyLower === "enter" || keyLower === " ") {
            if (focusIndex !== -1) {
                handleAction(menuItems[focusIndex].id);
            }
        }
    });

    // 6. Action Handlers (UX Flows corresponding to M1 Spec)
    function handleAction(actionId) {
        switch(actionId) {
            case "btn-continue":
                console.log("Loading runtime block...");
                break;
            case "btn-new":
                console.log("Initializing new run. (Overwrite popup skipped for M1 Prototype)");
                break;
            case "btn-settings":
                settingsOverlay.classList.remove("hidden");
                break;
            case "btn-quit":
                // M1 Local Wrapper 'Quit' proxy. Native browsers prevent local JS tab closing.
                fetch("/api/quit", { method: "POST" })
                    .then(() => {
                        document.getElementById("termination-screen").classList.remove("hidden");
                        document.getElementById("ui-layer").classList.add("hidden");
                        document.getElementById("art-background").classList.add("hidden");
                    });
                break;
        }
    }
});

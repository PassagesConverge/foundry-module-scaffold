import { MODULE_ID, log } from "./shared";
import { registerSettings } from "./settings";

Hooks.once("init", () => {
  try {
    console.log(`[${MODULE_ID}] Initializing module...`);
    registerSettings();
    console.log(`[${MODULE_ID}] Module initialized successfully`);
  } catch (error) {
    console.error(`[${MODULE_ID}] Error during initialization:`, error);
  }
});

Hooks.once("ready", () => {
  try {
    console.log(`[${MODULE_ID}] Module ready`);
    log("Module is fully loaded and ready");

    // Add initialization logic that requires game data here.
  } catch (error) {
    console.error(`[${MODULE_ID}] Error during ready hook:`, error);
  }
});

console.log(`[${MODULE_ID}] Core hooks registered`);

// MODULE IDENTIFIER - Replace with your module's ID (must match module.json).
export const MODULE_ID = "your-module-id";

/** Print debug messages when module logging is enabled. */
export function log(...args: unknown[]): void {
  try {
    if (game.settings.get(MODULE_ID, "enableLogging")) {
      console.log(`[${MODULE_ID}]`, ...args);
    }
  } catch {
    console.log(`[${MODULE_ID}] (log fallback)`, ...args);
  }
}

/** Generate a Foundry-backed unique ID. */
export function generateId(prefix = "id"): string {
  return `${prefix}-${foundry.utils.randomID()}`;
}

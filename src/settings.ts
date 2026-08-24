import { MODULE_ID, log } from "./shared";

/** Register all module settings. */
export function registerSettings(): void {
  log("Registering settings...");

  game.settings.register(MODULE_ID, "enableLogging", {
    name: "Enable Logging",
    hint: "Enable console logging for debugging purposes.",
    scope: "client",
    config: true,
    type: Boolean,
    default: false,
    onChange: (value: boolean) => {
      console.log(`[${MODULE_ID}] Logging ${value ? "enabled" : "disabled"}`);
    }
  });

  game.settings.register(MODULE_ID, "exampleSetting", {
    name: "Example Setting",
    hint: "This is an example setting.",
    scope: "world",
    config: true,
    type: String,
    default: "default value",
    onChange: (value: string) => {
      log("Example setting changed to:", value);
    }
  });

  log("Settings registered successfully");
}

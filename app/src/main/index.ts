require("update-electron-app")();
try {
  require("electron-reloader")(module);
} catch {}
import "./redis-setup";
import { app } from "electron";
import { setup, tray } from "./window-setup";
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

app.on("ready", () => setup());
import { resolve } from "path";
import { app } from "electron";
import { createFolderIfNotExist } from "./helpers";

export const userDataFolder = app.getPath("userData");
console.log("user data folder", userDataFolder);

export const appFolder = createFolderIfNotExist(resolve(userDataFolder, "scheduler"));

export const configFile = resolve(appFolder, "config.json");

export const logFolder = createFolderIfNotExist(resolve(appFolder, "logs"));

export const queueName = "Schedule-Queue";

export const redisPort = "9001";

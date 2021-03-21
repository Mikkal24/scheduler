import { Task } from "./types";
import { MyJobQueue } from "./bull";
import { ipcMain } from "electron";
import { mainWindow } from "./window-setup";
import { JobsOptions } from "bullmq";

ipcMain.on("get-jobs", async () => {
  const jobs = await MyJobQueue.getRepeatableJobs();
  mainWindow.webContents.send("schedule", jobs);
});

ipcMain.on("add-job", async (event, { name, data, jobsOptions }) => {
  await MyJobQueue.add(name, data, jobsOptions);
  const jobs = await MyJobQueue.getRepeatableJobs();

  mainWindow.webContents.send("schedule", jobs);
});

ipcMain.on("delete-task", async (event, key: string) => {
  await MyJobQueue.removeRepeatableByKey(key);
});

ipcMain.on("start-task", (event, index) => {});

ipcMain.on("open-log", (event, index) => {});

ipcMain.on("get-schedule", async (event) => {
  await MyJobQueue.waitUntilReady();
  const jobs = await MyJobQueue.getRepeatableJobs();

  mainWindow.webContents.send("schedule", jobs);
});

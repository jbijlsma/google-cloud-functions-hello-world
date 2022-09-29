import express from "express";

function getDefault(_, res) {
  res.send("Hello there!");
}

const app = express();
app.use(getDefault);

// The main function export for cloud functions
export const hello = app;

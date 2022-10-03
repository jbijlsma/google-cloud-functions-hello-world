import express from "express";

import { getHelloMsg } from "@myscope/hello";

function getDefault(_, res) {
  res.send(getHelloMsg());
}

const app = express();
app.use(getDefault);

// The main function export for cloud functions
export const hello = app;

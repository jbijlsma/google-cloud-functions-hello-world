import express from "express";

import { getHelloMsg, getGoodbyeMsg } from "@myscope/messages-package";

function getDefault(_, res) {
  res.send(`${getHelloMsg()} and ${getGoodbyeMsg()}`);
}

const app = express();
app.use(getDefault);

// The main function export for cloud functions
export const hello = app;

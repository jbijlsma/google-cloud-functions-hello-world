import express from "express";

import { Messages } from "@myscope/messages-package";

function getDefault(_, res) {
  res.send(Messages.getGoodbyeMsg());
}

const app = express();
app.use(getDefault);

// The main function export for cloud functions
export const hello = app;

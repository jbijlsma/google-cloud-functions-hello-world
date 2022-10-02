import express from "express";

import { getHelloMsg } from "hello-package";

function getDefault(_: any, res: any) {
  res.send('Hi ' + getHelloMsg());
}

const app = express();
app.use(getDefault);

// The main function export for cloud functions
export const hello = app;

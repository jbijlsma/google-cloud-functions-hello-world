import express from "express";

import {
  getHelloMsg,
  getGoodbyeMsg,
  getWords,
} from "@myscope/messages-package";

const getDefault = async (_, res) => {
  const words = await getWords();
  const msg = `${getHelloMsg()} and ${getGoodbyeMsg()}. File ${__dirname}/words.csv has ${
    words.length
  } words`;
  res.send(msg);
};

const app = express();
app.use(getDefault);

// The main function export for cloud functions
export const hello = app;

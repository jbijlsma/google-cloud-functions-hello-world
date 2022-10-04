const csv = require("fast-csv");
const fs = require("fs");
const path = require("path");

export const getWords = (): Promise<String[]> => {
  return new Promise((resolve, reject) => {
    const words: String[] = [];

    fs.createReadStream(`${path.resolve(__dirname, "words.csv")}`)
      .pipe(csv.parse({ delimiter: ";", headers: true, trim: true }))
      .on("data", (data: any) => {
        words.push(data.word);
      })
      .on("end", () => {
        resolve(words);
      });
  });
};

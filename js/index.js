exports.hello = async (_, res) => {
  return res.status(200).json({ code: 200, message: "Hello world" });
};

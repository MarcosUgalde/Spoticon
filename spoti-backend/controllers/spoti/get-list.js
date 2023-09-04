const { getPlaylists } = require("../../models/spoti");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { email } = req.locals;

  const lists = await getPlaylists(await db)(email);

  if (!lists.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: lists.data,
  });
};

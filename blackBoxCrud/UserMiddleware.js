const users = require("../crud//tests/mocks/users");
let userId;

const checkId = id => {
  return id === userId;
};

exports.findUser = (req, res, next, id) => {
  try {
    userId = id;
    user = users.find(checkId);
    if (!user) {
      return res.status(404).json({ error: "User Not Found" });
    }
    req.user = user;
    return next();
  } catch (error) {
    return res.status(500).json(error);
  }
};

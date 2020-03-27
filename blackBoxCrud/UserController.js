const users = require("../crud/tests/mocks/users");

module.exports = {
  async index(req, res, next) {
    return res.status(200).json(users);
  },

  async store(req, res, next) {
    try {
      users.push(req.body);
      return res.status(201).json({
        id: req.body.id
      });
    } catch (error) {
      return res.status(500).json({
        error: "Server Internal Error"
      });
    }
  },

  async show(req, res, next) {
    return res.status(200).json(req.user);
  },

  async delete(req, res, next) {
    try {
      users.unshift();
      return res.status(204);
    } catch (error) {
      return res.status(500).json({});
    }
  }
};

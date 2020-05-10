const City = require("../../models/city");

module.exports = function (router) {
  // GET: List of Team Members
  router.get("/cities", function (req, res) {
    City.find()
      .sort({ city: 1 })
      .exec()
      .then((docs) => res.status(200).json(docs))
      .catch((err) =>
        res.status(500).json({
          message: "Error finding team members",
          error: err,
        })
      );
  });
};

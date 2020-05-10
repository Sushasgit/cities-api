const express = require("express");
const router = express.Router();

require("./routes/cities")(router);

module.exports = router;

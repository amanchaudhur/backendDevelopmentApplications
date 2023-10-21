const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers.js");
const chatroomController = require("../controllers/chatroomControllers.js");

const auth = require("../middleware/auth.js");

router.get("/", auth, catchErrors(chatroomController.getAllChatrooms));
router.post("/", auth, catchErrors(chatroomController.createChatroom));

module.exports = router;
const express = require("express");
const router = express();
const controller = require("../controllers/emplyoee-controller");
const { ModifyEmployee } = require('../controllers/emplyoee-controller');

router.get("/employees",controller.AllEmployee)
router.get("/emp/:category",controller.Emplyoee)
router.post("/add",controller.AddEmplyoee);
router.delete("/delete/:id",controller.DeleteEmplyoee);
router.put("/edit", ModifyEmployee)

module.exports = router;
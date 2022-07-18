const express = require("express");
const { addImage, getImage, updateImage, deleteImage } = require("../controler/ProjectControler");
const { upload } = require("../Middelware/ImageMiddl");
const router = express.Router();

router.get("/:id",getImage );
router.post("/upload", upload,addImage);
router.put("/:id", updateImage);
router.delete("/:id", deleteImage);
module.exports = router;
 
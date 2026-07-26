const express = require("express");

const { getAllPosts } = require("../controllers/post.controller");

const router = express.Router();

router.get("/", getAllPosts);

module.exports = router;
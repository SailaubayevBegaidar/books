const express = require("express");
const jwt = require("jsonwebtoken");
let books = require("../booksdb.js");
const { users } = require("../auth_users.js");
const router = express.Router();

router.use((req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    req.user = jwt.verify(token, "secret");
    next();
  } catch {
    res.status(403).json({ message: "Not logged in" });
  }
});

router.put("/review/:isbn", (req, res) => {
  books[req.params.isbn].reviews[req.user.username] = req.body.review;
  res.json({ message: "Review added/updated" });
});

router.delete("/review/:isbn", (req, res) => {
  delete books[req.params.isbn].reviews[req.user.username];
  res.json({ message: "Review deleted" });
});

module.exports = router;

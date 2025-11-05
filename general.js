const express = require("express");
let books = require("./booksdb.js");
const public_routes = express.Router();

public_routes.get("/", (req, res) => res.json(books));
public_routes.get("/isbn/:isbn", (req, res) => res.json(books[req.params.isbn]));
public_routes.get("/author/:author", (req, res) => {
  res.json(Object.values(books).filter(book => book.author === req.params.author));
});
public_routes.get("/title/:title", (req, res) => {
  res.json(Object.values(books).filter(book => book.title === req.params.title));
});
public_routes.get("/review/:isbn", (req, res) => res.json(books[req.params.isbn].reviews));

module.exports = public_routes;

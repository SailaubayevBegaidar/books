const jwt = require("jsonwebtoken");
let users = [];

const isValid = (username) => {
  return users.some(user => user.username === username);
};

const authenticatedUser = (username, password) => {
  return users.some(user => user.username === username && user.password === password);
};

const registerUser = (req, res) => {
  const { username, password } = req.body;

  if (isValid(username)) return res.status(409).json({ message: "User already exists" });

  users.push({ username, password });
  return res.json({ message: "User registered successfully" });
};

const loginUser = (req, res) => {
  const { username, password } = req.body;

  if (!authenticatedUser(username, password)) return res.status(403).json({ message: "Invalid login" });

  const token = jwt.sign({ username }, "secret");
  return res.json({ token });
};

module.exports = { registerUser, loginUser, users };

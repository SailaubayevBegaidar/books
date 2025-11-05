const express = require("express");
const bodyParser = require("body-parser");
const public_routes = require("./general.js");
const { registerUser, loginUser } = require("./auth_users.js");
const customer_routes = require("./router/customer.js");

const app = express();
app.use(bodyParser.json());

app.use("/", public_routes);
app.post("/register", registerUser);
app.post("/login", loginUser);
app.use("/auth", customer_routes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));

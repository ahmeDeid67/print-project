const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const app = express();
dotenv.config();
const connection = require("./include/connection");

app.use(express.json());

app.use(helmet());
app.use("/users", userRoute);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running in port " + PORT);
});

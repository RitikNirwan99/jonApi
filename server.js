const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const jobRoutes = require("./routes/jobRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server running on http://localhost:" + process.env.PORT);
    });
  })
  .catch((err) => console.error("DB Connection Error:", err));

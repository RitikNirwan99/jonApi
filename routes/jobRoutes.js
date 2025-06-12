const express = require("express");
const {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

const router = express.Router();

router.post("/", createJob);        // Create
router.get("/", getAllJobs);        // Read all
router.put("/:id", updateJob);      // Update
router.delete("/:id", deleteJob);   // Delete

module.exports = router;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../pages/JobListings.css";
const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/api/jobs");
      setJobs(res.data);
    } catch (err) {
      console.error("❌ Failed to fetch jobs", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      className="job-listings"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>📋 Job Listings</h2>

      <input
        type="text"
        placeholder="Search by title, company, or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <button onClick={fetchJobs} className="refresh-btn">
        🔄 Refresh Jobs
      </button>

      {loading ? (
        <p>Loading jobs...</p>
      ) : (
        <div className="job-cards">
          {filteredJobs.map((job) => (
            <motion.div
              key={job._id}
              className="job-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{job.title}</h3>
              <p>
                {job.company} — {job.location}
              </p>
              <a href={`/jobs/${job._id}`}>View Details →</a>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default JobListings;

import React from "react";
import { Link } from "react-router-dom"; 

function Resume() {
  return (
    <div style={styles.container}>
      <h2>Resume</h2>

      <div>
        <img 
          src="res.png" 
          alt="Resume page 1 showing personal details and work experience" 
          height="469" 
          width="565" 
        />
      </div>
      <div>
        <img 
          src="res2.png" 
          alt="Resume page 2 showing educational background and skills" 
          height="469" 
          width="565" 
        />
      </div>

      <p style={{ fontFamily: "monospace" }}>
        <Link to="/" style={styles.link}>Back to Home Page</Link>
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  link: {
    color: "black", 
    textDecoration: "none",
  },
};

export default Resume;

import React from "react";
import { Link } from "react-router-dom"; 

function Projects() {
  return (
    <div style={styles.container}>
      <h2>Projects</h2>

      <div>
        <img 
          src="data.png" 
          alt="Inmate Admissions Project overview, dataset showing inmate details like race and status" 
          height="363" 
          width="565" 
        />
      </div>
      <p>
        This project is an open data project. The project was about research that contains an informational study of the Inmate Admissions. The dataset covers inmate information such as Race, Admitted date, status code, and Inmate number using flipcards and charts.
      </p>

      <br />

      <div>
        <img 
          src="image.png" 
          alt="Ball and Platform Project showing random generation of obstacles and hidden platform" 
          height="363" 
          width="565" 
        />
      </div>
      <p>
        You will spawn with rocks and trees randomly generated with different locations, a ball will appear visible, and there will be a hidden platform as well as rocks and trees changing positions when you change planes. When you shift planes depending on what's visible the ball will be visible or the platform will. You will have to memorize where the ball is and where the platform is, then navigate the ball through the obstacles and put it on top of the platform.
      </p>

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

export default Projects;

import React, { useState } from "react";
import './Hobbies.css';

function Hobbies() {
  const [galleryVisible, setGalleryVisible] = useState(false);

  const toggleGallery = () => setGalleryVisible(!galleryVisible);

  return (
    <div style={styles.container}>
      <p style={{ fontFamily: "monospace" }}>
        <a href="/" style={{ color: "black" }}>Back to Home Page</a>
      </p>

      <h2>Hobbies</h2>

      <div>
        <input
          type="checkbox"
          id="toggleGalleryCheckbox"
          style={{ display: "none" }}
          checked={galleryVisible}
          onChange={toggleGallery}
        />
        <label htmlFor="toggleGalleryCheckbox" style={styles.imageContainer}>
          <img
            src="Galeyes.jpg"
            alt="Drawing"
            height="300"
            width="400"
            className="main-image"
          />
        </label>
        <p>I like to draw though I could use major improvement. I tend to use references since I'm not creative enough to draw from head.</p>
      </div>

      {galleryVisible && (
        <div id="imageGallery" className="gallery" style={styles.gallery}>
          <h3>My Drawing Gallery</h3>
          <div style={styles.imageGrid}>
            <img src="Galeyes.jpg" alt="Drawing 1" height="200" />
            <img src="Eyes.jpg" alt="Drawing 2" height="200" />
            <img src="Sketches.jpg" alt="Drawing 3" height="200" />
            <img src="King_Kittan.jpg" alt="Drawing 4" height="200" />
            <img src="Oushi.jpg" alt="Drawing 5" height="200" />
          </div>
        </div>
      )}

      <hr />

      <div>
        <img src="piano.jpg" alt="Piano" height="212" width="565" />
        <p>
          I am currently trying to learn piano. So far I know the basics but struggle playing chords and with two hands.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  imageContainer: {
    cursor: "pointer",
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "10px",
    justifyContent: "center",
    transition: "all 0.3s ease",
  },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "10px",
  },
};

export default Hobbies;

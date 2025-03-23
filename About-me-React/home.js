import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to My Website</h1>
      <p>This is the home page. Navigate to other pages to learn more!</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#E2E8FF",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
};

export default Home;

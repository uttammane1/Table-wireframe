import React, { useState } from "react";
import Table from "./components/Table";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      <button onClick={toggleTheme} style={styles.toggleButton}>
        {isDarkMode ? "Light" : "Dark"} Mode
      </button>
      <h1>Dynamic Table with Dropdowns</h1>
      <Table />
    </div>
  );
}

const styles = {
  darkContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", 
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#333",
    color: "#fff",
    position: "relative",
  },
  lightContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", 
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    color: "#333",
    position: "relative", 
  },
  toggleButton: {
    position: "absolute", 
    top: "20px",
    left: "20px",
    padding: "8px 16px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s",
    zIndex: 10, 
  },
};

export default App;

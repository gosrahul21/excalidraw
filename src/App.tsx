import React, { useState, useEffect } from 'react';
import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";
import logo from '../assets/image.png';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div style={{
        height: "100vh", 
        width: "100vw", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: "#ffffff"
      }}>
        <img src={logo} alt="Logo" style={{ width: "200px", height: "auto" }} />
      </div>
    );
  }

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Excalidraw />
    </div>
  );
};

export default App;

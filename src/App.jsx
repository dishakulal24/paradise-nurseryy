import React, { useState } from "react";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <div className="App">
      {!showProductList ? (
        <div className="landing-page">
          <h1>Welcome to Paradise Nursery</h1>
          <p>Your one-stop destination for beautiful plants.</p>
          <button onClick={handleGetStarted}>Get Started</button>
        </div>
      ) : (
        <div>
          <h2>Product List</h2>
          <p>Browse and add plants to your cart.</p>
        </div>
      )}
    </div>
  );
}

export default App;

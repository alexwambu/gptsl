import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [contractAddress, setContractAddress] = useState("");

  useEffect(() => {
    fetch("/contractAddress.txt")
      .then((res) => res.text())
      .then((text) => setContractAddress(text.trim()));
  }, []);

  return (
    <div className="App">
      <h1>GoldBarTether Deployed</h1>
      <p>Contract Address:</p>
      <code>{contractAddress}</code>
    </div>
  );
}

export default App;

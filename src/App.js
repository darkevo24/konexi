import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectGoogle from "./pages/ConnectGoogle";
import FlowNode from "./pages/FlowNode";
import GoogleSheet from "./pages/GoogleSheet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/flow" element={ <FlowNode /> } />
        <Route path="/sheet" element={ <GoogleSheet /> } />
        <Route exact path="/" element={ <ConnectGoogle /> } />
      </Routes>
    </Router>
  );
}

export default App;

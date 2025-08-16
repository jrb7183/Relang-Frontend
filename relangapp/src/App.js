import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Frontpage from "./pages/frontpage";
import ConsPage from "./pages/consPage";

function App() {

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Frontpage />} />
          <Route path="/phono" element={<ConsPage />} />
        </Routes>
    </Router>
  );
}

export default App;

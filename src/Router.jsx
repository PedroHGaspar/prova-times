import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Times from "./components/Times";
// import Jogadores from "./components/Jogadores";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Times />} />
        {/* <Route path="/Jogadores" element={<Jogadores />} /> */}
      </Routes>
    </Router>
  );
}

export default AppRouter;

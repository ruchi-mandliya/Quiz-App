import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/result/Result";

function App() {
  return (
    <Router>
      
        
        <div className="app" style={{ backgroundImage: "url(./ques1.png)" }}>
          <Header />

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/quiz" element={<Quiz />}></Route>
            <Route path="/result" element={<Result />}></Route>
          </Routes>
        </div>
        <Footer />
      
    </Router>
  );
}

export default App;

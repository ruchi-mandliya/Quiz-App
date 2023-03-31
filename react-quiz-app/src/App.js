import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/result/Result";
import axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./ques1.png)" }}>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          />
          <Route path="/quiz" element={<Quiz 
          name={name}
          questions={questions}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions} />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

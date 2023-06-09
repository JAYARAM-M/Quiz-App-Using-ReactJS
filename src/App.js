import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizPage from "./components/QuizPage";
import ScorePage from "./components/ScorePage";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="box-container">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/score" element={<ScorePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

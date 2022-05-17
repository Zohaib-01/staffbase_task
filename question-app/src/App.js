import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./components/globalStyles";
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <HomePage />
    </div>
  );
}

export default App;

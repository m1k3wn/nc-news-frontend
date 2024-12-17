import Header from "./components/Header";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router";
import ArticlePage from "./components/ArticlePage";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/articles" />} />
          <Route path="/articles" element={<ArticlePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

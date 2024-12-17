import Header from "./components/Header";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router";
import ArticlePage from "./components/ArticlePage";
import SingleArticle from "./components/SingleArticle";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/articles" />} />
          <Route path="/articles" element={<ArticlePage />} />
          <Route
            path="/articles/:article_id"
            element={<SingleArticle />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

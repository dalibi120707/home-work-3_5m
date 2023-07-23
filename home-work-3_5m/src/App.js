import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import AddPostPage from "./pages/AddPostPage/AddPostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/AddPost" element={<AddPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

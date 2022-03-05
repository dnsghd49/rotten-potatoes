import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

// Pages
import Main from "./pages/Main";
import Comments from "./pages/Comments";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />

        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

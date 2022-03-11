import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

// Pages
import Main from "./pages/Main";
import Comments from "./pages/Comments";
import SearchPage from "./pages/Search";
import MoviesTab from "./pages/MoviesTab";
import TvShowsTab from "./pages/TvShowsTab";

function App() {
  return (
    <div className="AppBG">
      <div className="App">
        <BrowserRouter>
          <Topbar />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/sign-up" element={<Comments />} />
            <Route path="/movie" element={<MoviesTab />} />
            <Route path="/show" element={<TvShowsTab />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;

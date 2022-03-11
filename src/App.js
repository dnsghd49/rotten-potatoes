import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

// Pages
import Main from "./pages/Main";
import Comments from "./pages/Comments";
<<<<<<< HEAD
import SignUp from "./components/Signup";
=======
import SearchPage from "./pages/Search";
import MoviesTab from "./pages/MoviesTab";
import TvShowsTab from "./pages/TvShowsTab";
import DevTeam from "./pages/DevTeam";
import ShowtimesTab from "./pages/ShowtimesTab";
>>>>>>> 299022ea7855387da7578bf8eaba4a9d0fab167e

function App() {
  return (
    <div className="AppBG">
      <div className="App">
        <BrowserRouter>
          <Topbar />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/comments" element={<Comments />} />
<<<<<<< HEAD
            <Route path="/users/sign-up" element={<SignUp />} />
            <Route path="#" element={<Main />} />
=======
            <Route path="/search" element={<SearchPage />} />
            <Route path="/sign-up" element={<Comments />} />
            <Route path="/movie" element={<MoviesTab />} />
            <Route path="/show" element={<TvShowsTab />} />
            <Route path="/developers" element={<DevTeam />} />
            <Route path="/showtimes" element={<ShowtimesTab />} />
>>>>>>> 299022ea7855387da7578bf8eaba4a9d0fab167e
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;

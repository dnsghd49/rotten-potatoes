import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/react";

import Comments from "./pages/Comments";
import SearchPage from "./pages/Search";
import MoviesTab from "./pages/MoviesTab";
import TvShowsTab from "./pages/TvShowsTab";
import DevTeam from "./pages/DevTeam";
import ShowtimesTab from "./pages/ShowtimesTab";
import Dashboard from "./pages/Dashboard";
import PodCast from "./pages/Podcast";

// COMPONENTS
const Topbar = lazy(() => import("./components/Topbar"));
const Footer = lazy(() => import("./components/Footer"));

//PAGES
const Main = lazy(() => import("./pages/Main"));


function App() {
  const override = css`
  display: block;
  margin: 0 auto;
  position: aboslute;
  top: 25vh;
  color: #282c34`
  return (
    <Suspense fallback={<div><PacmanLoader size="50px" css={override}/><h2 className="loadingStyle">Loading</h2></div>}>
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
            <Route path="/developers" element={<DevTeam />} />
            <Route path="/showtimes" element={<ShowtimesTab />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/podcast" element={<PodCast/>}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
    </Suspense>

  );
}

export default App;

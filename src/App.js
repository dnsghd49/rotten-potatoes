<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
=======
import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
>>>>>>> 8e50478b54bef9935e1bafde10f997386892ae44

// Components
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

// Pages
import Main from "./pages/Main";
import Comments from "./pages/Comments";

function App() {
<<<<<<< HEAD
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

=======
          return (
            <div className="App">
              <BrowserRouter>
                <Topbar />

                <Routes>
                  <Route exact path="/" element={<Main />} />
                  <Route path="/comments" element={<Comments />} />
                </Routes>
              </BrowserRouter>

            </div>
          );
        }      
>>>>>>> 8e50478b54bef9935e1bafde10f997386892ae44
export default App;

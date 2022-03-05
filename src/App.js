import './App.css';
import React, { useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Topbar from './components/Topbar/Topbar';

// Pages
import Main from './pages/Main'
import Comments from './pages/Comments'

const getMovies = async () => {
  const response = await fetch(
    "https://data-imdb1.p.rapidapi.com/movie/byKeywords/game/?page_size=5",
    {
      headers: {
        "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
        "x-rapidapi-key": "7de5936bdfmsh507735b91339219p188b21jsn5ee000d579f5"
      }
    })
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`)
  }
  const data = await response.json()
  return data
}
// const [movies, setMovies] = useState()
// const [error, setError] = useState()

// useEffect(async () => {
//   try {
//     setMovies(await getMovies())
//   } catch (error) {
//     setError(error.message)
//   }
// }, [])

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

    </div>
  );
}
export default App;

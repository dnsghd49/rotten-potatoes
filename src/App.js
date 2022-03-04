import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
// import Topbar from './components/Topbar/Topbar';

// Pages
import Main from './pages/Main'
import Comments from './pages/Comments'

function App() {
  fetch("https://data-imdb1.p.rapidapi.com/titles/search/title/game?info=mini_info&limit=10&page=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "data-imdb1.p.rapidapi.com",
		"x-rapidapi-key": "7de5936bdfmsh507735b91339219p188b21jsn5ee000d579f5"
	}
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => {
	console.error(err);
});
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Topbar /> */}

        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

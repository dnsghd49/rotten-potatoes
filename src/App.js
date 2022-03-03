import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

// Components
import Topbar from './components/Topbar/Topbar';

// Pages
import Main from './pages/Main'
import Comments from './pages/Comments'

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

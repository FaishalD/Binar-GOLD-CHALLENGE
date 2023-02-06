import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import CariMobil from './pages/CariMobil';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carimobil' element={<CariMobil/>}/>
      </Routes>
    </Router>
  );
}

export default App;

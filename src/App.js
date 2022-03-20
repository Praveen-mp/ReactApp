import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import AppBar from './Components/AppBar';
import Tour from './Pages/Tour';
function App() {
  return (
  <BrowserRouter>
   <AppBar/>
 <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/:id" element={<Tour/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;

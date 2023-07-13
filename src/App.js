import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import app from './config/firebase';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route path='/' exact element={<Register/>}/>
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/dashboard' exact element={<Dashboard/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

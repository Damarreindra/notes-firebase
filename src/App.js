import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import app from './config/firebase';
import { createStore } from 'redux';

const initialState = {
  popup: false,
  isLogin: false
}
const reducer = (state = initialState, action) =>{
if(action.type === 'CHANGE_POPUP'){
  return {
    ...state,
    popup: action.value
  }
}
  if(action.type === 'CHANGE_ISLOGIN'){
    return {
      ...state,
      isLogin: action.value
    }
  }
return state;
}

const store = createStore(reducer)

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

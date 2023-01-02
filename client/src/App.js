import Home from './screens/Home/Home';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Creator from './screens/Character Creator/Creator';
import Characters from './screens/Characters/Characters';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Creator" element={<Creator />} />
        <Route path='/Characters' element={<Characters />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

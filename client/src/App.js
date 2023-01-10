import Home from './screens/Home/Home';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Creator from './screens/Character Creator/Creator';
import Characters from './screens/Characters/Characters';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { useState, useEffect } from 'react';
import { verifyUser } from './Services/users';

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser()
      setCurrentUser(user)
    }
    getUser()
  }, [])

  const logout = () => {
    localStorage.removeItem('authToken')
    setCurrentUser(null)
  }
  return (
    <div className="App">
      <Navbar currentUser={currentUser} logout={logout}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Creator" element={<Creator />} />
        <Route path='/Characters' element={<Characters />} />
        <Route path='/Login' element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path='/Register' element={<Register setCurrentUser={setCurrentUser} />} />
      </Routes>
    </div>
  );
}

export default App;

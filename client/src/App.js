import Home from './screens/Home/Home';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Creator from './screens/Character Creator/Creator';
import Characters from './screens/Characters/Characters';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Creator" element={<Creator />} />
        <Route path='/Characters' element={<Characters />} />
      </Routes>
    </div>
  );
}

export default App;

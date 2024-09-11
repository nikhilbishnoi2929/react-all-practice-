import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LogoFirst from './components/views/LogoFirst';
import LogoSecond from './components/views/LogoSecond';
import Animate from './components/views/Animate';
import KeyAnimate from './components/views/KeyAnimate';
function App() {
  return (
    <div className=' overflow-hidden'>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogoFirst />} />
          <Route path='/LogoSecond' element={<LogoSecond />} />
          <Route path='/animate' element={<Animate />} />
          <Route path='/keyframes' element={<KeyAnimate />}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}
export default App;

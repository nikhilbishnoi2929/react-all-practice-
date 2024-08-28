import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LogoFirst from './components/views/LogoFirst';
import LogoSecond from './components/views/LogoSecond';
function App() {
  return (
    <div className=' overflow-hidden'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogoFirst />} />
          <Route path='/LogoSecond' element={<LogoSecond />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

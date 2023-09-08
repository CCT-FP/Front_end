import './css/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Headerbar from './components/Headerbar';
import Loginpage from './pages/Loginpage';
import Joinpage from './pages/Joinpage';
import Freelancerpage from './pages/Freelancerpage';
import Mypage from './pages/Mypage';

function App() {
  return (
    <BrowserRouter>
        <Headerbar/>
        <Routes>
          <Route path='/' element={<Mainpage/>}/>
          <Route path='/loginpage' element={<Loginpage/>}/>
          <Route path='/joinpage' element={<Joinpage/>}/>
          <Route path='/freelancerpage' element={<Freelancerpage/>}/>
          <Route path='/mypage' element={<Mypage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

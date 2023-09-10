import './css/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Headerbar from './components/Headerbar';
import Loginpage from './pages/Loginpage';
import Joinpage from './pages/Joinpage';
import Freelancerpage from './pages/Freelancerpage';
import Mypage from './pages/Mypage';
import Agreepage from './pages/Agreepage';
import Userinfo from './pages/Userinfo';

function App() {
  return (
    <BrowserRouter>
        <Headerbar/>
        <Routes>
          <Route path='/' element={<Mainpage/>}/>
          <Route path='/loginpage' element={<Loginpage/>}/>
          <Route path='/joinpage' element={<Joinpage/>}/>
          <Route path='/joinpage/agreepage' element={<Agreepage/>}/>
          <Route path='/freelancerpage' element={<Freelancerpage/>}/>
          <Route path='/mypage' element={<Mypage/>}/>
          <Route path='/joinpage/userinfo' element={<Userinfo/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

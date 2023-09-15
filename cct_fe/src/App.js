import React, { useState } from 'react';
import axios from 'axios';
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
import WriteResume from './pages/WriteResume';
import ResumeDetail from './pages/ResumeDetail';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const resumeSave = async () => {  // 이력서 저장 
    try {
      setLoading(true); // 데이터 로딩 중 상태로 설정

      const response = await axios.post('/resume', {
          title: ``,
          career: ``,
          stack: ``
      }, {headers: {'Content-Type': 'application/json'}
    }); // 서버에 데이터 보내기

      setData(response.data); // 데이터 설정
    } catch (error) {
      setError(error.message); // 에러 메시지 설정
    } finally {
      setLoading(false); // 로딩 상태 해제
    }
  };

  const resumeList = async () => {  // 전체 이력서 리스트
    try {
      setLoading(true);

      const response = await axios.get(`/list-resume`);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const resumeCheck = async () => { // 본인 이력서 확인 
    try {
      setLoading(true);

      const response = await axios.get(`/resume/{userId}`);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div>
    //   <button onClick={resumeList}>전체 이력서 리스트</button> <br></br>
    //   <button onClick={resumeCheck}>본인 이력서 조회</button><br></br>
    //   <button onClick={resumeSave}>이력서 저장</button><br></br>

    //   {loading ? (
    //     <p>Loading...</p>
    //   ) : error ? (
    //     <p>Error occurred: {error}</p>
    //   ) : data ? (
    //     <ul>
    //       {data.map(item => (
    //         <p><li key={item.id}>{item.id}. {item.title}</li></p> 
    //       ))}
    //     </ul>
    //   ) : null}
    // </div>
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
          <Route path='/resume/writeresume' element={<WriteResume/>}/>
          <Route path='/resume/resumedetail' element={<ResumeDetail/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

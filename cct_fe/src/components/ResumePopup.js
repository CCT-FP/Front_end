import Modal from 'react-modal';
import React from 'react';
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/ResumePopup.css';

export default function ResumePopup ({setPopup, popup}) {
    const [myList, setMyList] = useState([]);
    const Id = window.localStorage.getItem('userid');
    const role = window.localStorage.getItem('role');
    useEffect(() => {

        //리스트 불러오기
        const myResumeList = async () => {
            try { 
                const response = await axios.get(`//localhost:8080/resume/${Id}`)
                const data = response.data;	
                console.log(data); // 데이터에서 필요한 값 추출
                setMyList(data);
                
        const extractedData = data.map((item) => ({
            userId: item.userId,    // 리스트 작성자 이름
            projectList: item.projectList,  // 리스트 작성자 프로젝트 리스트
            stack: item.stack,  // 작성자 기술
            period: item.period // 작성자 경력
          }));
  
          console.log(extractedData); // 추출된 데이터 확인
  
             } catch(error) {
                console.error("에러", error);
             } 
            };
            myResumeList();
    }, []);

    const closePopup = () => {  // 팝업 끄기
        setPopup(false);
    };
    
    const customModalStyles = { // 팝업창 디자인
        overlay: {
          backgroundColor: " rgba(0, 0, 0, 0.4)",
          width: "100%",
          height: "100vh",
          zIndex: "10",
          position: "fixed",
          top: "0",
          left: "0",
        },
        content: {
          width: "52.7vw",
          height: "95vh",
          zIndex: "150",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "10px",
          boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
          backgroundColor: "white",
          justifyContent: "center",
          overflow: "auto",
          padding: "0",
        },
      };

    return (
        <Modal isOpen={popup} onRequestClose={closePopup} 
     
        
        style={customModalStyles}>  {/* 모달창 스타일 */}
        <div className="popup">
            <div className='right'>     
                <button className="close-btn" onClick={closePopup}> {/* 창닫기 */}
                    X
                </button>
            </div>
            <div className='resume-popup-list'>
            {myList.map((item) => (     // 이력서 가져오기
                <div key={item.userId} className='resume-list-box'>
                    <div className='resume-title'>안녕하세요. {item.userId}입니다.</div>

                <p className='resume-spec'>{item.stack}</p>
                <p className='resume-detail'>{item.period}</p>

                <ul>
                    {item.projectList.map((project, index) => (
                        <li key={index}>{project}</li>
                    ))}
                </ul>

                </div>
            ))}
            </div>
            {role ? <Link to = "/notice/writenotice">
                <button className='get-write-resume'>수정하러 가기</button>
                </Link> : 
                <Link to = "/resume/writeresume">      {/* 이력서 작성 페이지로 이동 */}
                <button className='get-write-resume'>수정하러 가기</button>
            </Link> }
             
        </div>
        </Modal>
    )
}
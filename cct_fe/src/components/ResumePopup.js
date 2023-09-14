import Modal from 'react-modal';
import React from 'react';
import { useEffect, useState} from 'react';
import axios from 'axios';

export default function ResumePopup ({setPopup, popup}) {
    const [myList, setMyList] = useState([]);
    const [user, setUser] = useState('');

    const usid = (user) => {
        setUser(user);  // 서버로 받은 유저 아이디 저장
    }

    useEffect(() => {
        const userIdCome = async () => {
            try {
               const res = await axios.get(`//localhost:8080/`) 
            }
        }

        //리스트 불러오기
        const myResumeList = async () => {
            try { 
                const response = await axios.get(`//localhost:8080/resume/${userid}`)
                const data = response.data;	
                
                console.log(data);
                // 데이터에서 필요한 값 추출
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
    
    const customModalStyles = {
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
     
        
        style={customModalStyles}>
        <div className="popup">
            <button className="close-btn" onClick={closePopup}>
                창 닫기
            </button>
            
            {myList.map((item) => (
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

             {/* <div className="resume-list-box">
                <div className="resume-title"></div>
                <div className="resume-content"></div>
                <div className="resume-company"></div>
            </div> */}
        </div>
        </Modal>
    )
}
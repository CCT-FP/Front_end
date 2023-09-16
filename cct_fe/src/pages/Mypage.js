import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Cookies } from "react-cookie";

export default function Mypage(){
    const cookies = new Cookies();
    const [noticeList, setNoticeList] = useState([]);
    const navigate = useNavigate()

    const writeResume = e => {      // 이력서 작성으로 이동
         navigate('/resume/writeresume')
    }

    const getCookie = (name, email, phone) => {
        return cookies.get(name, email, phone)
      }

    useEffect(() => {
        //리스트 불러오기
        const companyList = async () => {
            try { 
                
                const response = await axios.get(`//localhost:8080/checkPost`)
                const data = response.data;   
                console.log(data)
                setNoticeList(data)

                // 데이터에서 필요한 값 추출
        const extractedData = data.map((item) => ({
                companyId: item.companyId,
                title: item.title,
                status: item.status
          }));
  
          console.log(extractedData); // 추출된 데이터 확인
  
             } catch(error) {
                console.error("에러", error);
             } 
            };
            companyList();
    }, []);

    return (
        <div className="content">
            <div className="mypage-top">
                <div className="mypage-icon"></div>
                <div className="name-email-number">
                    <div className="mypage-name">{cookies.name}</div>
                    <div className="mypage-email-number">
                        <div className="mypage-email">{cookies.email}</div>
                        <div className="mypage-number">{cookies.phone}</div>
                    </div>
                </div>
            </div>
            <div className="mypage-middle">
                <div className="mypage-edit">
                    <h2>이력서 수정</h2>
                </div>
                <div className="mypage-write-resume">
                    <div className="mypage-write-resume-title">
                        안녕하세요. 저는 {cookies.name}입니다.
                    </div>
                    <button className="mypage-write-resume-btn" onClick={writeResume}>이력서 작성</button>
                </div>
                <div className="mypage-int"></div>
            </div>
            <div className="mypage-bottom">
                <div className="mypage-see">
                    {noticeList.map((item) => (
                    <div className="mypage-see-notice">
                        {item.userId} / {item.title} / {item.status}
                    </div>
                    )
                    )}
                </div>
                
                {/* 내가 지원한 공고 출력*/}
            </div>
        </div>
        
        
    )
}
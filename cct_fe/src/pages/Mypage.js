import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Cookies } from "react-cookie";
import "../css/Mypage.css";

export default function Mypage(){
    const cookies = new Cookies();
    const [noticeList, setNoticeList] = useState([]);
    const navigate = useNavigate()
    const name = cookies.get("name");       // 쿠키에서 이름 가져오기
    const email = cookies.get("email");     // 쿠키에서 이메일 가져오기
    const phone = cookies.get("phone");     // 쿠키에서 폰번호 가져오기
    
    const writeResume = e => {      // 이력서 작성으로 이동
        navigate('/resume/writeresume')
    }

    const MovetoMainpage = e => {   // 메인페이지로 이동
        navigate('/')
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
        <div className="content margin_top">   
            <div className="mypage-top">    {/* 마이페이지 상단부분 */}
                <div className="mypage-icon"></div>     {/* 마이페이지 아이콘 */}
                <div className="name-email-number">     {/* 이름, 이메일, 번호 */}
                    <div className="mypage-name">{name}</div>   {/* 이름 보여주기 */}
                    <div className="mypage-email-number">   {/* 이메일과 폰번호 부분 */}   
                        <div className="mypage-email">{email}</div> {/* 이메일 */}
                        <div className="mypage-number">{phone}</div>    {/* 폰번호 */}
                    </div>
                </div>
            </div>
            <div className="mypage-middle"> {/* 마이페이지 중단부분 */}
                <div className="mypage-edit">   {/* 이력서 수정부분 */}
                    <h2>이력서 수정</h2>    
                </div>
                <div className="mypage-write-resume">   {/* 마이페이지 이력서 작성 */}
                    <div className="mypage-write-resume-title"> {/* 이력서 타이틀 */}
                        안녕하세요. 저는 {name}입니다.
                    </div>
                    <button className="mypage-write-resume-btn" onClick={writeResume}>이력서 작성</button>  {/* 이력서 작성칸 누르면 수정페이지로 넘어감 */}
                </div>
                <div className="mypage-int"></div>
            </div>
            <div className="mypage-bottom">     {/* 마이페이지 하단부분 */}
                <div className="mypage-see">    {/* 지원이력 보여지는 부분 */}
                {noticeList.length > 0 ? (      // noticeList가 존재하면, 리스트 출력
                    noticeList.map((item) => (          // 리스트 출력
                        <div key={item.companyId} className="mypage-see-notice">    
                        {item.userId} / {item.title} / {item.status}
                        </div>
                    ))
                    ) : (
                        <div>
                            <p>지원한 내역이 없습니다..</p> 
                            <button className="move-mainpaage" onClick={MovetoMainpage}>지원하러 가기</button>  {/* 지원한 내역이 없으면 이동 버튼 생성 */}
                        </div>
                    )}
                </div>  
                {/* 내가 지원한 공고 출력*/}
            </div>
        </div>
        
        
    )
}
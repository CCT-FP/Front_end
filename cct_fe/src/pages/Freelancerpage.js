import React from "react";
import { useEffect, useState } from 'react';
import '../css/Freelancerpage.css';
import Modal from 'react-modal';
import axios from 'axios';
export default function Freelancerpage (){
    const [popup, setPopup] = useState(false);  // 팝업창 오픈 여부
    const [Filter, setFilter] = useState(false);    // 필터 팝업 오픈 여부
    
    useEffect(() => {
        //리스트 불러오기
        const resumeList = async () => {
            try { 
                const response = await axios.get("/resumes")
                const data = response.data;	
                
                // 데이터에서 필요한 값 추출
        const extractedData = data.map((item) => ({
            userId: item.userId,
            projectList: item.projectList,
            stack: item.stack,
            period: item.period
          }));
  
          console.log(extractedData); // 추출된 데이터 확인
  
             } catch(error) {
                console.error("Error fetching data:", error);
             } 
            };
            resumeList();
    }, []);

    const showResumePopup = () => {   // 팝업창 오픈
        setPopup(true);
    };

    return (
        <div>
            <div className="header">
        
            </div>

             <div className="freelancer-content-body">  {/* 프리랜서 페이지 컨텐츠 구역 */}
                <div className="freelancer-top-content"> {/* 프리랜서 페이지 컨텐츠 상단(필터, 내이력보기 등) */}
                    <div className="freelancer-top-content-top">
                        <span className="freelancer-top-content-explanation content-margin">
                            <span className="margin-right">프로젝트를 등록하면</span> <br></br>기업의 컨텍이 들어올 수 있어요
                        </span>
                        <span className="freelancer-top-content-seeresume content-margin margin">
                            <button className="seeresume" onClick={showResumePopup}>내 이력서 보기</button>
                            {popup}
                        </span>
                        </div> {/* 상단 컨텐츠: 설명, 내이력보기 구역 */}
                    <div className="freelancer-top-content-bottom"> {/* 상단 컨텐츠: 필터링 버튼 구역 */}
                       <button className="freelancer-top-content-bottom-filter">필터 버튼</button>
                        </div> 
                </div>

                <div className="freelancer-bottom-content"> {/* 프리랜서 페이지 하단 컨텐츠 구역 */}
                    <div className="freelancer-bottom-content-resume"> {/* 프리랜서 페이지 하단 컨텐츠 이력서 구역 */}
                        <div className="freelancer-bottom-content-resume-title"></div>  {/* 프리랜서 페이지 하단 컨텐츠 이력서 제목  */}
                        <div className="freelancer-bottom-content-resume-spec"></div> {/* 프리랜서 페이지 하단 컨텐츠 이력서 스펙 */}
                        <div className="freelancer-bottom-content-resume-detail"></div> {/* 프리랜서 페이지 하단 컨텐츠 이력서 내용 */}
                    </div>
                </div>
            </div>
        </div>
    )
}
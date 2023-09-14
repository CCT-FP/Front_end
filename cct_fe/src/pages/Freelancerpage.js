import React from "react";
import { useEffect, useState } from 'react';
import '../css/Freelancerpage.css';
import Modal from 'react-modal';
import axios from 'axios';
import FilterPopup from "../components/FilterPopup";
import ResumePopup from "../components/ResumePopup";

export default function Freelancerpage (){
    const [popup, setPopup] = useState(false);  // 팝업창 오픈 여부
    const [filter, setFilter] = useState(false);    // 필터 팝업 오픈 여부
    const [list, setList] = useState([]);   // list 스테이트

    useEffect(() => {
        //리스트 불러오기
        const resumeList = async () => {
            try { 
                const response = await axios.get(`//localhost:8080/resumes`)
                const data = response.data;	
                console.log(data)
                setList(data)
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
            resumeList();
    }, []);

    const showResumePopup = () => {   // 팝업창 오픈
        setPopup(true);
    };

    const showFilterPopup = () => {   // 필터창 오픈
        setFilter(true);
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
                            <ResumePopup
                                setPopup={setPopup}
                                popup={popup}
                            />
                        </span>
                        </div> {/* 상단 컨텐츠: 설명, 내이력보기 구역 */}
                    <div className="freelancer-top-content-bottom"> {/* 상단 컨텐츠: 필터링 버튼 구역 */}
                       <button className="freelancer-top-content-bottom-filter" onClick={showFilterPopup}>필터 버튼</button>
           
                    <FilterPopup            // 필터 팝업창
                    setFilter={setFilter}
                    filter={filter} 
                    />
                       
                        </div> 
                </div>

                <div className="freelancer-bottom-content"> {/* 프리랜서 페이지 하단 컨텐츠 구역 */}
                    <div className="freelancer-bottom-content-resume"> {/* 프리랜서 페이지 하단 컨텐츠 이력서 구역 */}
                    {list.map((item) => (
            	    <div key={item.userId} className= "freelancer-bottom-content-resume" >  {/* 리스트 목록 */}
                        <div className="freelancer-bottom-content-resume-title">안녕하세요. {item.userId}입니다.</div> {/* 이력서 작성자 */} 
                         
                        <p className="freelancer-bottom-content-resume-spec">{item.stack}</p>   {/* 작성자의 기술 */}
                        <p className="freelancer-bottom-content-resume-detail">{item.period}</p>    {/* 작성자의 경력 */}
                        
                        <ul> {/* 프로젝트 리스트 */}
                            {item.projectList.map((project,index)=>(    
                                <li key={index}>{project}</li>))}
                        </ul>
        	    </ div >
        	    ))}
                        {/* <div className="freelancer-bottom-content-resume-title"></div>  프리랜서 페이지 하단 컨텐츠 이력서 제목 
                        <div className="freelancer-bottom-content-resume-spec"></div> 프리랜서 페이지 하단 컨텐츠 이력서 스펙
                        <div className="freelancer-bottom-content-resume-detail"></div> 프리랜서 페이지 하단 컨텐츠 이력서 내용 */}
                    </div>
                </div>
            </div>
        </div>
    )
}
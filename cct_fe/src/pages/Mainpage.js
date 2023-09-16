import React from "react";
import { useEffect, useState } from 'react';
import '../css/Mainpage.css';
import Modal from 'react-modal';
import axios from 'axios';
import FilterPopup from "../components/FilterPopup";
import ResumePopup from "../components/ResumePopup";
import { useNavigate, Link } from "react-router-dom";

export default function Mainpage (){
    const [popup, setPopup] = useState(false);  // 팝업창 오픈 여부
    const [filter, setFilter] = useState(false);    // 필터 팝업 오픈 여부
    const [list, setList] = useState([]);   // 전체 list
    const [filterList, setFilterList] = useState([]); // 키워드를 통해 필터링 된 list (경력, 언어, 지역)
    const [selectSpec, setSelectSpec] = useState("");   // 선택된 스펙
    const [selectPeriod, setSelectPeriod] = useState("");   // 선택된 경력
    const navigate = useNavigate()
    useEffect(() => {
        //리스트 불러오기
        const companyList = async () => {
            try { 

                const response = await axios.get(`//localhost:8080/listPost`)
                const data = response.data;   
                console.log(data)
                setList(data)

                // 데이터에서 필요한 값 추출
        const extractedData = data.map((item) => ({
                // 명세서 짜여지고 난 후 예정
          }));
  
          console.log(extractedData); // 추출된 데이터 확인
  
             } catch(error) {
                console.error("에러", error);
             } 
            };
            companyList();
    }, []);

    const showCompanyPopup = () => {   // 팝업창 오픈
        setPopup(true);
    };

    const showFilterPopup = () => {   // 필터창 오픈
        setFilter(true);
    };

    const applyFilters = (filter) => {    // 필터 적용
        let filterList;

        if(selectSpec) {    // 스펙 필터링
            filterList = list.filter((item) => {
                return selectSpec.includes(item.stack); // 선택된 스택을 포함하고 있는지 체크
        });

        } else {    // 아니면 그냥 리스트 담기
            filterList = [...list];
        }

        if(selectPeriod) {  // 선택된 경력이 있으면
            const maxMonths = parseInt(selectPeriod, 10) *12 ;  // 문자열을 숫자로 바꿔서 곱하기 12 (1년, 3년, 5년 같이 년으로 따졌기때문)
            filterList = filterList.filter((item) => {          // filterList를 filter 해서
                const periodMonths = parseInt(item.period, 10); // 담겨져있는 경력들을 periodMonths로 저장
                return periodMonths <= maxMonths;   // 선택한 경력 이하들을 return
            });
        }
        setFilterList(filterList);                  // setFilterList에 filterList를 넣음
    }
    const MovetoDetail = e => {
        console.log(e.target.title)
        navigate('/resume/resumedetail', {state : {userid : e.target.title}})   // 추후 변경
    } 
    return (
        <div>
            <div className="header">
            </div>

             <div className="company-content-body">  {/* 회사 공고 페이지 컨텐츠 구역 */}
                <div className="company-top-content"> {/* 회사 공고 페이지 컨텐츠 상단(필터, 내공고보기 등) */}
                    <div className="company-top-content-top">
                        <span className="company-top-content-explanation content-margin">
                            <span className="margin-right">프로젝트를 등록하면</span> <br></br>프리랜서가 지원 할 수 있어요.
                        </span>
                        <span className="company-top-content-seenotice content-margin margin">
                            <button className="seeresume" onClick={showCompanyPopup}>내 공고 보기</button>
                            <ResumePopup    // 내 공고 보기 팝업
                                setPopup={setPopup}
                                popup={popup}
                            />
                        </span>
                        </div> {/* 상단 컨텐츠: 설명, 내이력보기 구역 */}
                    <div className="company-top-content-bottom"> {/* 상단 컨텐츠: 필터링 버튼 구역 */}
                       <button className="company-top-content-bottom-filter" onClick={showFilterPopup}>필터 버튼</button>
           
                    <FilterPopup            // 필터 팝업
                    setFilter={setFilter}   // setfilter 받아오기
                    filter={filter}         // filter 받아오기
                    applyFilters={applyFilters} // 필터 적용 함수 
                    />
                       
                        </div> 
                </div>
                
                <div className="company-bottom-content"> {/* 회사 공고 페이지 하단 컨텐츠 구역 */}
                    <div className="company-bottom-content-notice"> {/* 회사 공고 페이지 하단 컨텐츠 이력서 구역 */}
                    {filter ? (filterList.map((item) => (   // 필터링 조건이 있다면 filterList 출력 (필터링된 리스트 출력)
                   <div key={item.userId} className= "company-bottom-content-notice" >  {/* 리스트 목록 */}
                        <div className="company-bottom-content-notice-title">안녕하세요. {item.userId}입니다.</div> {/* 공고 작성자 */} 
                         
                        <p className="company-bottom-content-notice-spec">{item.stack}</p>   {/* 공고 필요 기술 */}
                        <p className="company-bottom-content-notice-detail">{item.period}</p>    {/* 공고 필요 경력 */}
                        
                        <ul> {/* 프로젝트 리스트 */}
                            {item.projectList.map((project,index)=>(    
                                <li key={index}>{project}</li>))}
                        </ul>
               </ div >
               ))
                ) : (   // 아니면 전체 이력 리스트 출력
                    list.map((item) => (
                        <div key={item.userId} className= "company-bottom-content-notice" >  {/* 리스트 목록 */}
                        <div className="company-bottom-content-notice-title" title={item.userId} onClick={MovetoDetail}>안녕하세요. {item.userId}입니다.</div> {/* 이력서 작성자 */} 
                         
                        <p className="company-bottom-content-notice-spec">{item.stack}</p>   {/* 작성자의 기술 */}
                        <p className="company-bottom-content-notice-detail">{item.period}</p>    {/* 작성자의 경력 */}
                        
                        <ul> {/* 프로젝트 리스트 */}
                            {item.projectList.map((project,index)=>(    
                                <li key={index}>{project}</li>))}
                        </ul>
               </ div >
                    ))
                )}
                        {/* <div className="freelancer-bottom-content-resume-title"></div>  프리랜서 페이지 하단 컨텐츠 이력서 제목 
                        <div className="freelancer-bottom-content-resume-spec"></div> 프리랜서 페이지 하단 컨텐츠 이력서 스펙
                        <div className="freelancer-bottom-content-resume-detail"></div> 프리랜서 페이지 하단 컨텐츠 이력서 내용 */}
                    </div>
                </div>
            </div>
        </div>
    )
}

// import React, { useEffect } from "react";

// export default function Mainpage() {
//     useEffect(()=>{
        
//     }, [])
    
//     return (
//         <div>
//             <div className="header">
//                 {/* 기업공고페이지(메인 페이지) */}   
//             </div>

//              <div className="company-content-body">  {/* 기업공고 페이지 컨텐츠 구역 */}
//                 <div className="company-top-content"> {/* 기업공고 페이지 컨텐츠 상단(필터, 내 공고보기 등) */}
//                     <div className="company-top-content-top"></div> {/* 상단 컨텐츠: 설명, 내 공고보기 구역 */}
//                     <div className="company-top-content-bottom"></div> {/* 상단 컨텐츠: 필터링 버튼 구역 */}
//                 </div>

//                 <div className="company-bottom-content"> {/* 기업공고 페이지 하단 컨텐츠 구역 */}
//                     <div className="company-bottom-content-notice"> {/* 기업공고 페이지 하단 컨텐츠 공고 구역 */}
//                         <div className="company-bottom-content-notice-title"></div>  {/* 기업공고 페이지 하단 컨텐츠 공고 필요 제목  */}
//                         <div className="company-bottom-content-notice-spec"></div> {/* 기업공고 페이지 하단 컨텐츠 공고 필요 스펙 */}
//                         <div className="company-bottom-content-notice-btn"></div> {/* 기업공고 페이지 하단 컨텐츠 공고 지원하기버튼*/}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
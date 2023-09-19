import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Cookies } from "react-cookie";

export default function MypageCompany(){
    const cookies = new Cookies();
    const [noticeList, setNoticeList] = useState([]);
    const [list, setResumeList] = useState([]);
    const navigate = useNavigate()
    const name = cookies.get("name");       // 쿠키에서 이름 가져오기
    const email = cookies.get("email");     // 쿠키에서 이메일 가져오기
    const phone = cookies.get("phone");     // 쿠키에서 폰번호 가져오기
    
    const writeNotice = e => {      // 공고 작성으로 이동
        navigate('/resume/writenotice')
    }
   
    const MovetoFreelancerpage = e => {
        navigate('/freelancerpage')
    }
    useEffect(() => {
        // 내가 올린 공고 리스트 불러오기
        const companyList = async () => {
            try { 
                
                const response = await axios.get(`//localhost:8080/post/{userId}`)
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

    useEffect(() => {
        //리스트 불러오기
        const resumeList = async () => {
            try { 

                const response = await axios.get(`//localhost:8080/checkResume`)
                const data = response.data;   
                console.log(data)
                setResumeList(data)

                // 데이터에서 필요한 값 추출
        const extractedData = data.map((item) => ({
            id: item.PostResume.id,    // 리스트 작성자 이름
            title: item.PostResume.title,  // 리스트 작성자 타이틀
            career: item.PostResume.career,  // 작성자 경력
            stack: item.PostResume.stack // 작성자 기술
          }));
  
          console.log(extractedData); // 추출된 데이터 확인
  
             } catch(error) {
                console.error("에러", error);
             } 
            };
            resumeList();
    }, []);

    return (
        <div className="content">   
            <div className="mypage-top">    {/* 마이페이지 상단부분 */}
                <div className="mypage-icon"></div>     {/* 마이페이지 아이콘 */}
                <div className="name-email-number">     {/* 회사명, 이메일, 번호 */}
                    <div className="mypage-name">{name}</div>   {/* 회사명 보여주기 */}
                    <div className="mypage-email-number">   {/* 이메일과 폰번호 부분 */}   
                        <div className="mypage-email">{email}</div> {/* 이메일 */}
                        <div className="mypage-number">{phone}</div>    {/* 폰번호 */}
                    </div>
                </div>
            </div>
            <div className="mypage-middle"> {/* 마이페이지 중단부분 */}
                <div className="mypage-edit">   {/* 공고 수정부분 */}
                    <h2>올린 공고</h2>    
                </div>
                <div className="mypage-write-resume">   {/* 마이페이지 공고 작성 */}
                    <div className="mypage-write-resume-title"> {/* 공고 */}
                        {noticeList.length > 0 ? (
                            noticeList.map((item) => (
                                <div key={item.jobPosts.id} className="companypost">
                                    {item.jobPosts.title} / {item.jobPosts.status}
                                </div>
                            ))
                        ) : (
                            <div>
                                <p>올린 공고가 없습니다...</p>  
                            </div>
                        )}
                    </div>
                    <button className="mypage-write-resume-btn" onClick={writeNotice}>공고 수정</button>  {/* 공고 작성칸 누르면 수정페이지로 넘어감 */}
                </div>
                <div className="mypage-int">지원자 목록</div>
            </div>
            <div className="mypage-bottom">     {/* 마이페이지 하단부분 */}
                <div className="mypage-see">    {/* 지원이력 보여지는 부분 */}
                {list.length > 0 ? (      // list가 존재하면, 리스트 출력
                        list.map((item) => (          // 리스트 출력
                        <div key={item.id} className="mypage-see-notice">    
                            {item.title} | {item.stack}
                        </div>
                    ))
                    ) : (
                        <div>
                            <p>지원한 사람이 없습니다...</p> 
                            <button className="move-freelancerpage" onClick={MovetoFreelancerpage}>프리랜서 이력서 보러 가기</button>  {/* 지원한 내역이 없으면 이동 버튼 생성 */}
                        </div>
                    )}
                </div>  
     
            </div>
        </div>
        
        
    )
}
import React,{ useEffect, useState } from "react";
import '../css/WriteNotice.css';
import axios from 'axios';
import FilterPopup from "../components/FilterPopup";
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'; // css import
// import moment from 'moment';
import 'moment/locale/ko';
import { useLocation, useNavigate } from "react-router-dom";

export default function NoticeDetail () {
    const [idSameid, setIsSameid] = useState(false)
    const [list, setList] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const noticeId = location.state.id;
    const id = window.localStorage.getItem('id')

    useEffect(() => {
        //리스트 불러오기
        const companyList = async () => {
            try { 

                const response = await axios.get(`//3.37.93.210:8080/listPost`)
                const data = response.data;   
                console.log(data)
                setList(data)

                // 데이터에서 필요한 값 추출
        const extractedData = data.map((item) => ({
                id: item.id,                        // 공고 키값
                title: item.title,                  // 공고 타이틀
                lanaugeList: item.lanaugeList,      // 필요 언어 리스트 
                description: item.description,      // 디테일 내용
                periodList: item.periodList,        // 예상 소요 기간
                career: item.career,                // 필요 경력
                address: item.address,              // 회사 주소
                manager: item.manager               // 담당자 이름
          }));
  
          console.log(extractedData); // 추출된 데이터 확인
  
             } catch(error) {
                console.error("에러", error);
             } 
            };
            if(noticeId === id){
                setIsSameid(true);
            }
            companyList();
    }, []);

    const MovetoNote = e => {
        navigate('/writenote', {state: {receiverId : noticeId}})
    }

    return( 
        <div>
            공고 디테일 페이지 입니다.
            {list.map((item)=>(
                <div>
                    <div className="noticedetail-title">{item.title}</div>
                    <div className="noticedetail-manager">담당자
                        <div className="noticedetail-manager-name">{item.manager}</div>
                        <button className="noticedetail-movetonote" onClick={MovetoNote}>보내기</button> 
                    </div>
                    <div className="noticedetail-career">{item.career}</div>
                    <div className="noticedetail-lanaugeList">{item.lanaugeList}</div>
                    <div className="noticedetail-periodList">{item.periodList}</div>
                    <div className="noticedetail-description">{item.description}</div>
                    <div className="noticedetail-address">{item.address}</div>
                </div>
            ))}
            
        </div>

    )
}
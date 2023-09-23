import React, {useEffect,    useState} from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Note from "./Note";
import '../css/FreelancerDetail.css'
import {AiOutlineMail} from 'react-icons/ai'

export default function FreelancerDetail(){
    const [isSameid, setIsSameid] = useState(false)
    const [openpop, setOpenpop] = useState(false)
    const location = useLocation()      // 받아주려면 필수
    const navigate = useNavigate()
    const [detaillist, setDetaillist] = useState()
    const userId = location.state.userid    // userid 받기
    const id = window.localStorage.getItem('id')    // 로그인된 id 받기
    useEffect(() => {   
        axios({
            method : 'get',
            url : `//3.37.93.210:8080/resume/${userId}`,
        })
        .then(res => {
            setDetaillist(res.data)
        })
        .catch(err => console.log(err))
        if(userId === id){      // 로그인된 id와 같다면, 쪽지 생성 안하기
            setIsSameid(true)
        }
    }, [])

   

    return(
        <div className="Freelancerdetail top_margin">
            <div className="freelancerdetail-box">
                <div className="freelancerdetail-titlebox">
                    <h1 className="freelancerdetail-title">{detaillist?.title}</h1>
                </div>
            </div>
            <div className="MovetoNote-box">
                <button hidden={isSameid} className="MovetoNotebtn" title="쪽지 보내기" onClick={() => {
                    setOpenpop(true)
                }}><AiOutlineMail size={25}/></button>
            </div>
            <Note isOpen = {openpop} receiver={userId} setOpenpop={setOpenpop}></Note>
            <div className="project-recordbox">
                <h3 className="project-record">프로젝트 내역</h3>
            </div>
            <div className="project-recordlist">
                    <div className="leftside-img"></div>
                    <div className="rightside-projectlist">
                        {
                            detaillist?.projectList?.map((item, index) => {
                                return(
                                    <div className="allprojectlist">
                                        <div className="allprojectlist-listbox" key = {index}>
                                            {item}
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
            </div>
            <div className="project-detailtitle">
                <h3 className="project-detailtitle">상세 내역</h3>
            </div>
            <div className="project-detailbox">
                {
                    <div className="project-detailbox__text">
                        {detaillist?.detail}
                    </div>
                }
            </div>
        </div>
    )
}

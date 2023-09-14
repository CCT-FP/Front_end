import React from "react";
import { useNavigate } from "react-router-dom";

export default function Mypage(){
    const navigate = useNavigate()
    const ResumeList = (lang, yes, place, title) => {

        return(
            <div className="mypage-resume">
                <div className="mypage-point"></div>
                <div className="mypage-resume-list"></div>
            </div>
        )
    }
    const writeResume = e => {
         navigate('/resume/writeresume')
    }
    return (
        <div className="content">
            <div className="mypage-top">
                <div className="mypage-icon"></div>
                <div className="name-email-number">
                    <div className="mypage-name"></div>
                    <div className="mypage-email-number"></div>
                </div>
            </div>
            <div className="mypage-middle">
                <div className="mypage-edit">
                    <h2>이력서 수정</h2>
                </div>
                <div className="mypage-write-resume">
                    <button className="mypage-write-resume-btn" onClick={writeResume}>이력서 작성</button>
                </div>
                <div className="mypage-int"></div>
            </div>
            <div className="mypage-bottom">
                <div className="mypage-see"></div>
                ({ResumeList})
            </div>
        </div>
        
        
    )
}
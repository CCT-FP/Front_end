import React from "react";

export default function Mypage(){
    const ResumeList = (lang, yes, place, title) => {

        return(
            <div className="mypage-resume">
                <div className="mypage-point"></div>
                <div className="mypage-resume-list"></div>
            </div>
        )
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
                    <button className="mypage-write-resume-btn">이력서 작성</button>
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
import React from "react";
import {BsPersonCircle} from 'react-icons/bs'
import { Link } from "react-router-dom";
import '../css/Headerbar.css'

export default function Headerbar(){
    
    return(
        <>
            <div className="headerbar">
                <header className="headerbar-header">
                    <div className="headerbar-logo">
                        로고
                        {/*로고이미지 backgrondimg로 할듯 아니면 그냥 글씨*/}
                    </div>
                    <div className="headerbar-mypage"><Link className="link" to={'/mypage'}><BsPersonCircle size={40}/></Link></div>
                </header>
                <div className="headerbar-navigation">
                    <div className="headerbar-navigation__box">
                        <div className="headerbar-navigation__navigationbtn">
                            <button className="headerbtn headerbar-navigation__navigationbtn--freelancer"><Link className="navigationlink" to={'/freelancerpage'}>개발자</Link></button>
                            <button className="headerbtn headerbar-navigation__navigationbtn--company"><Link className="navigationlink" to={'/'}>회사</Link></button>
                        </div>
                        <div className="headerbar-navigation__signbox">
                            <button className="headerbtn headerbar-navigation__loginbtn"><Link className="navigationlink" to={'/loginpage'}>로그인</Link></button>
                            /
                            <button className="headerbtn headerbar-navigation__joinbtn"><Link className="navigationlink" to={'/joinpage'}>회원가입</Link></button>
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )
}
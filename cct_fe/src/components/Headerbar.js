import React from "react";
import {BsPersonCircle} from 'react-icons/bs'
import { Link } from "react-router-dom";
import '../css/Headerbar.css'

export default function Headerbar(){
    return(
        <>
            <div className="headerbar">
                <header className="headerbar-logoimg">
                    {/*로고이미지 backgrondimg로 할듯*/}
                </header>
                <div className="headerbar-navigation">
                    <div className="headerbar-navigation__signbox">
                        <button className="headerbtn headerbar-navigation__loginbtn"><Link to={'/loginpage'}>로그인</Link></button>
                        /
                        <button className="headerbtn headerbar-navigation__joinbtn"><Link to={'/joinpage'}>회원가입</Link></button>
                    </div>
                    <div className="headerbar-navigation__navigationbtn">
                        <button className="headerbtn headerbar-navigation__navigationbtn--freelancer"><Link to={'/freelancerpage'}>개발자</Link></button>
                        <button className="headerbtn headerbar-navigation__navigationbtn--company"><Link to={'/'}>회사</Link></button>
                    </div>
                    <button className="headerbtn headerbar-navigation__navigationbtn--mypagebtn"><Link to={'/mypage'}><BsPersonCircle/></Link></button>
                </div>
            </div>
        </>
    )
}
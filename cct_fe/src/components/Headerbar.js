import React, { useEffect, useState } from "react";
import {BsPersonCircle} from 'react-icons/bs'
import { Link } from "react-router-dom";
import '../css/Headerbar.css'
import axios from "axios";

export default function Headerbar(){
    const [islogined, setIslogined] = useState(false);   //로그인이 되어있는 여부에 따른 로그인/회원가입 버튼 활성화
    const token = window.localStorage.getItem('token')
    useEffect(()=> {
        if(token){
            setIslogined(true)
        }
    }, [])

    const Logout = e => {
        e.preventDefault();
        axios({
            method : "put",
            url : "//localhost:8080/user/logout"
        })
        .then(res => {
            setIslogined(false)
        })
        .catch(err => console.log(err))
    }
    
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
                            { 
                            islogined ? <button className="logoutbtn" onClick={Logout}>로그아웃</button> :
                                <button className="headerbtn headerbar-navigation__loginbtn"><Link className="navigationlink" to={'/loginpage'}>로그인</Link></button>
                                /
                                <button className="headerbtn headerbar-navigation__joinbtn"><Link className="navigationlink" to={'/joinpage'}>회원가입</Link></button>
                            }
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )
}
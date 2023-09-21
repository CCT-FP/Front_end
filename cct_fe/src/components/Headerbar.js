import React, { useEffect, useState } from "react";
import {BsPersonCircle} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import { Link, useNavigate } from "react-router-dom";
import '../css/Headerbar.css'
import axios from "axios";
import Scout from './Scout'

export default function Headerbar(){
    const [islogined, setIslogined] = useState(false);   //로그인이 되어있는 여부에 따른 로그인/회원가입 버튼 활성화
    const [isopen, setIsopen] = useState(false)
    const token = window.localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(()=>{
        if(token){
            setIslogined(true)
        } else{
            setIslogined(false)
        }
    },[token])

    const MovetoMypage = e => {
        if(islogined){
            navigate('/mypage')
        } else{
            alert('로그인 후 이용해주세요.')
            navigate('/loginpage')
        }
    } 
    const openScout = e => {
        setIsopen(true)
    }
    const Logout = e => {
        e.preventDefault();
        window.localStorage.clear()
        setIslogined(false)
        axios({
        method : "put",
        url : "//localhost:8080/user/logout"
        })
        .then(res => {
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
                    <div className="headerbar-mypage" onClick={MovetoMypage} title="마이페이지"><BsPersonCircle size={40} /></div>
                </header>
                <div className="headerbar-navigation">
                    <div className="headerbar-navigation__box">
                        <div className="headerbar-navigation__navigationbtn">
                            <button className="headerbtn headerbar-navigation__navigationbtn--freelancer"><Link className="navigationlink" to={'/freelancerpage'}>개발자</Link></button>
                            <button className="headerbtn headerbar-navigation__navigationbtn--company"><Link className="navigationlink" to={'/'}>회사</Link></button>
                        </div>
                        <div className="headerbar-navigation__signbox">
                            { 
                            islogined ? 
                            <>
                            <div className="scoutlogoutbox">
                                <button className="logoutbtn" onClick={Logout}>로그아웃</button>
                                <div className="MoveToScoutbtn" onClick={openScout}><AiOutlineMail size={30} title="쪽지함" /></div>
                            </div>
                            <Scout isOpen={isopen} setIsopen={setIsopen}></Scout>
                            </>
                             :
                                <>
                                    <button className="headerbtn headerbar-navigation__loginbtn"><Link className="navigationlink" to={'/loginpage'}>로그인</Link></button>
                                    /
                                    <button className="headerbtn headerbar-navigation__joinbtn"><Link className="navigationlink" to={'/joinpage'}>회원가입</Link></button>
                                </>
                            }
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )
}
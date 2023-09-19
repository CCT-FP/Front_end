import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import '../css/Loginpage.css'
import logoimage from '../img/Frenee.png'

export default function Loginpage() {

    const [userId, setUserId] = useState('')
    const [userPw, setUserPw] = useState('')
    const navigate = useNavigate();

    const InputId = e => {
        setUserId(e.target.value)
    }
    const InputPw = e => {
        setUserPw(e.target.value)
    }

    const Signin = e => {
        e.preventDefault()
        
        const UserInfo = {}
        UserInfo['userId'] = userId
        UserInfo['password'] = userPw
        axios({
            method : 'post',
            url : '//localhost:8080/user/login',
            data : UserInfo
        })
        .then(res => {
            window.localStorage.setItem('token', res.data)
            navigate('/')
        })
        .catch(err => {
            console.log(err)
            alert('로그인 실패')
        })
    }
    return (
        <div className="Loginpage">
             <div className="Loginpage-loginbox">
                <h1 className="Loginpage-loginbox__title">login</h1>
            </div>
            <div className="Loginpage-loginform">
                <img src={logoimage} className="Loginpage-loginform__logotitleimg"></img>
                <div className="Loginpage-loginform__body">
                    <div className="Loginpage-loginform__body--box">
                        <h3 className="loginpage-loginform__idlabel">아이디</h3>
                        <div className="logininfobox">
                            <input type="text" className="loginuserinfo Loginpage-loginfrom__inputid" onChange={InputId}/>
                        </div>
                    </div>
                    <div className="Loginpage-loginform__body--box">
                        <h3 className="loginpage-loginform__pwlabel">비밀번호</h3>
                        <div className="logininfobox">
                            <input type="password" className="loginuserinfo Loginpage-loginfrom__inputpw" onChange={InputPw}/>
                        </div>
                    </div>
                </div>
                <input type="submit" className="signinbtn" onClick={Signin} value={'로그인'}/>
            </div>
        </div>
    )
}
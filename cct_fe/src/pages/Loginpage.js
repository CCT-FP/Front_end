import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import '../css/Loginpage.css'

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
        UserInfo['id'] = userId
        UserInfo['password'] = userPw
        axios({
            method : 'post',
            url : '//localhost:8080/uesr/login',
            data : UserInfo
        })
        .then(res => {
            console.log(res)
            navigate('/main')
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
                <div className="Loginpage-loginform__logotitle"></div>
                <div className="Loginpage-loginform__box">
                    <h3 className="loginpage-loginform__idlabel">아이디</h3>
                    <input type="text" className="Loginpage-loginfrom__inputid" onChange={InputId}/>
                </div>
                <div className="Loginpage-loginform__box">
                    <h3 className="loginpage-loginform__pwlabel">비밀번호</h3>
                    <input type="password" className="Loginpage-loginfrom__inputpw" onChange={InputPw}/>
                </div>
                <input type="submit" className="signinbtn" onClick={Signin}/>
            </div>
        </div>
    )
}
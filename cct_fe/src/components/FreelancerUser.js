import React, { useEffect, useState } from "react";
import '../css/FreelancerUser.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function FreelancerUser(){

    const [userId, setUserId] = useState('')
    const [userPw, setUserPw] = useState('')
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEamil] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [userBirth, setUserBirth] = useState('')
    const [roles, setRoles] = useState('')
    const userCheck = {}

    //유효성 검사
    const [IdCheck, setIdCheck] = useState()
    const [userPwchk, setUserPwchk] = useState()
    const [EmailCheck, setEmailCheck] = useState()

    useEffect(()=>{
        setRoles("USER")
    },[])

    const UserInfo = {}
    const navigate = useNavigate()

    const InputName = e => {
        setUserName(e.target.value)
    }
    const InputId = e => {
        setUserId(e.target.value)
    }
    const InputPw = e => {
        setUserPw(e.target.value)
    }
    const InputPwchk = e => {
        if(e.target.value === userPw){
            setUserPwchk(true)
        }else{
            setUserPwchk(false)
        }
    }
    const InputEmail = e => {
        setUserEamil(e.target.value)
    }
    const InputPhonenum = e => {
        setUserPhone(e.target.value)
    }
    const InputBirth = e => {
        setUserBirth(e.target.value)
    }
    const CheckId = e => {
        userCheck["userCheck"] = userId
        axios({
            method : 'post',
            url : '//localhost:8080/user/idCheck',
            data: userId
        })
        .then(res => {
            console.log(res.data)
            // setIdCheck(res.data.idcheck)
        })
        .catch(err => {
            console.log(err)
            // setIdCheck()
        })
    }
    const CheckEmail = e => {
        userCheck["userCheck"] = userEmail
        axios({
            method : 'post',
            url : '//localhost:8080/user/emailCheck',
            data: userEmail
        })
        .then(res => {
            console.log(res.data)
            // setEmailCheck(res.data.idcheck)
        })
        .catch(err => {
            console.log(err)
            // setEmailCheck()
        })
    }
    const CheckPhone = e => {
        userCheck["userCheck"] = userPhone
        axios({
            method : 'post',
            url : '//localhost:8080/user/phoneCheck',
            data : userPhone
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }
    const JoinComplete = e => {
        e.preventDefault()
        UserInfo['userId'] = userId
        UserInfo['name'] = userName
        UserInfo['password'] = userPw
        UserInfo['email'] = userEmail
        UserInfo['phone'] = userPhone
        UserInfo['birth'] = userBirth
        UserInfo['roles'] = 'USER'
        console.log(UserInfo)

        axios({
            method : 'post',
            url : '//localhost:8080/user/join',
            data : UserInfo
        }).then(res => {
            console.log(res.data)
            alert('회원가입 완료!')
            navigate('/loginpage')
        })
          .catch(err => {console.log(err.data)})
        
        
    }
    return(
        <div className="FreelancerUser">
            <div className="FreelancerUserinfobox">
                <div className="FreelancerUserinfobox-titlebox">
                    <h1 className="FreelancerUserinfobox-titlebox__title">기본정보</h1>
                </div>
                <div className="joinbox-countbox">
                    <h3 className="joinbox-countbox__countpage">3 / 3</h3>
                </div>
                <form className="FreelancerUserinfobox-joinform">
                    <div className="joinform-joinbody">
                        <div className="joinform-joinbody__joinbox">
                            <div>
                                <span className="starimg"></span>
                                <label className="joinform-joinbody__joinbox--label">성명</label>
                            </div>
                            <div className="joinform-joinbody__joinbox--box">
                                <input type='text' className="inputuserinfo joinform-joinbody__joinbox--userinfoFreelancer" placeholder="성함을 입력해주세요." onChange={InputName}/>
                            </div>
                        </div>
                        <div className="joinform-joinbody__joinbox">
                                <label className="joinform-joinbody__joinbox--label">회원 아이디</label>
                            <div className="joinform-joinbody__joinbox--box">
                                <input type='text' className="inputuserinfo joinform-joinbody__joinbox--userinfoId" placeholder="아이디를 입력하세요." onChange={InputId} onBlur={CheckId}/>
                            </div>
                        </div>
                        <div className="joinform-joinbody__joinbox">
                            <label className="joinform-joinbody__joinbox--label">비밀번호</label>
                            <div className="joinform-joinbody__joinbox--box">
                                <input type='password' className="inputuserinfo joinform-joinbody__joinbox--userinfoPw" placeholder="비밀번호를 입력하세요." onChange={InputPw}/>
                            </div>
                        </div>
                        <div className="joinform-joinbody__joinbox">
                            <label className="joinform-joinbody__joinbox--label">비밀번호 확인</label>
                            <div className="joinform-joinbody__joinbox--box">
                                <input type='text' className="inputuserinfo joinform-joinbody__joinbox--userinfoPwchk" placeholder="비밀번호를 다시 입력해주세요." onBlur={InputPwchk}/>
                            </div>
                        </div>
                        <div className="joinform-joinbody__joinbox">
                            <label className="joinform-joinbody__joinbox--label">이메일</label>
                            <div className="joinform-joinbody__joinbox--box">
                                <input type='email' className="inputuserinfo joinform-joinbody__joinbox--userinfoEmail" placeholder="이메일을 입력하세요." onChange={InputEmail} onBlur={CheckEmail}/>
                            </div>
                        </div>
                        <div className="joinform-joinbody__joinbox">
                            <label className="joinform-joinbody__joinbox--label">휴대폰</label>
                            <div className="joinform-joinbody__joinbox--box">
                                <input type='text' className="inputuserinfo joinform-joinbody__joinbox--userinfoTel" placeholder="전화번호를 입력하세요." onChange={InputPhonenum} onBlur={CheckPhone}/>
                            </div>
                        </div>
                        <div className="joinform-joinbody__joinbox">
                            <label className="joinform-joinbody__joinbox--label">생년월일</label>
                            <div className="joinform-joinbody__joinbox--box">
                                <input type='text' className="inputuserinfo joinform-joinbody__joinbox--userinfoDamdang" placeholder="생년월일 6자리를 입력해주세요(yymmdd)" onChange={InputBirth}/>  
                            </div>
                        </div>
                    </div>   
                    <input className="singupcompletebtn" type="submit" value={'회원가입'} onClick={JoinComplete}/>
                </form>
            </div>
        </div>
    )
}
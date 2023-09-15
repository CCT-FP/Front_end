import React, { useEffect, useState } from "react";
import '../css/CompanyUser.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function CompanyUser(){

    const [userCompany, setUserCompany] = useState('')
    const [userId, setUserId] = useState('')
    const [userPw, setUserPw] = useState('')
    const [userPwchk, setUserPwchk] = useState('')
    const [userEmail, setUserEamil] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [userDamdang, setUserDamdang] = useState('')
    const [userAddress, setUserAddress] = useState('')
    const UserInfo = {}
    const navigate = useNavigate()

    useEffect(()=>{
        console.log('컴퍼니')
    },[])

    const InputCompany = e => {
        setUserCompany(e.target.value)
    }
    const InputId = e => {
        setUserId(e.target.value)
    }
    const InputPw = e => {
        setUserPw(e.target.value)
    }
    const InputPwchk = e => {
        setUserPwchk(e.target.value)
    }
    const InputEmail = e => {
        setUserEamil(e.target.value)
    }
    const InputPhonenum = e => {
        setUserPhone(e.target.value)
    }
    const InputDamdang = e => {
        setUserDamdang(e.target.value)
    }
    const InputAddress = e => {
        setUserAddress(e.target.value)
    }
    const JoinComplete = e => {
        e.preventDefault()
        UserInfo['company'] = userCompany
        UserInfo['name'] = userDamdang
        UserInfo['id'] = userId
        UserInfo['password'] = userPw
        UserInfo['email'] = userEmail
        UserInfo['phone'] = userPhone
        UserInfo['address'] = userAddress
        UserInfo['role'] = '기업 선택'
        console.log(UserInfo)

        axios({
            method : 'post',
            url : '//localhost:8080/users/join',
            data : UserInfo
        }).then(res => {
            console.log(res.data)
            alert('회원가입 완료!')
            navigate('/loginpage')
        })
          .catch(err => {console.log(err.data)})
        
        
    }
    return(
        <div className="CompanyUser">
            <div className="CompanyUserinfobox">
                <div className="CompanyUserinfobox-titlebox">
                    <h1 className="CompanyUserinfobox-titlebox__title">기본정보</h1>
                </div>
                <div className="joinbox-countbox">
                    <h3 className="joinbox-countbox__countpage">3 / 3</h3>
                </div>
                <form className="CompanyUserinfobox-joinform">
                    <div className="joinform-joinbody">
                        <div className="joinform-joinbody__joinbox">
                            <label className="joinform-joinbody__joinbox--label">회사명</label>
                            <input type='text' className="joinform-joinbody__joinbox--userinfoCompany" placeholder="회사 명을 입력하세요." onChange={InputCompany}/>
                        </div>
                        <div className="joinform-joinbody__joinbox">
                            <label className="joinform-joinbody__joinbox--label">회원 아이디</label>
                            <input type='text' className="joinform-joinbody__joinbox--userinfoId" placeholder="아이디를 입력하세요." onChange={InputId}/>
                        </div>
                        <div className="joinform-joinbody__joinbox">
                            <label className="joinform-joinbody__joinbox--label">비밀번호</label>
                            <input type='password' className="joinform-joinbody__joinbox--userinfoPw" placeholder="비밀번호를 입력하세요." onChange={InputPw}/>
                        </div>
                        <div className="joinform-joinbody__joinbox">
                            <label className="joinform-joinbody__joinbox--label">비밀번호 확인</label>
                            <input type='text' className="joinform-joinbody__joinbox--userinfoPwchk" placeholder="비밀번호를 다시 입력해주세요." onChange={InputPwchk}/>
                        </div>
                        <div className="joinform-joinbody__joinbox">
                            <label className="joinform-joinbody__joinbox--label">이메일</label>
                            <input type='email' className="joinform-joinbody__joinbox--userinfoEmail" placeholder="이메일을 입력하세요." onChange={InputEmail}/>
                        </div>
                        <div className="joinform-joinbody__joinbox">
                            <label className="joinform-joinbody__joinbox--label">전화번호</label>
                            <input type='text' className="joinform-joinbody__joinbox--userinfoTel" placeholder="전화번호를 입력하세요." onChange={InputPhonenum}/>
                        </div>
                        <div className="joinform-joinbody__joinbox">
                            <label className="joinform-joinbody__joinbox--label">담당자 명</label>
                            <input type='text' className="joinform-joinbody__joinbox--userinfoDamdang" placeholder="이름 / 직책" onChange={InputDamdang}/>
                        </div>
                        <div className="joinform-joinbody__joinbox">
                            <label className="joinform-joinbody__joinbox--label">주소</label>
                            <input type='text' className="joinform-joinbody__joinbox--userinfoAddress" placeholder="상세 주소까지 입력해 주세요.(상세주소까지 입력)" onChange={InputAddress}/>
                        </div>
                    </div>
                    <input type="submit" value={'회원가입'} onClick={JoinComplete}/>
                </form>
            </div>
        </div>
    )
}
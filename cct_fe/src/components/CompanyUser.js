import React, { useEffect, useState } from "react";
import '../css/CompanyUser.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function CompanyUser(){

    const [userCompany, setUserCompany] = useState('')
    const [userId, setUserId] = useState('')
    const [userPw, setUserPw] = useState('')
    const [userEmail, setUserEamil] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [userDamdang, setUserDamdang] = useState('')
    const [userAddress, setUserAddress] = useState('')
    const [roles, setRoles] = useState([])
    const [btnBackcolor, setBtnBackcolor] = useState('gray')
    const UserInfo = {}
    const userCheck = {}
    //유효성 검사
    const [Iderrmsg, setIderrmsg] = useState('')
    const [Pwerrmsg, setPwerrmsg] = useState('')
    const [pwchkmsg, setPwchkmsg] = useState('')
    const [emailmsg, setEmailmsg] = useState('')
    const [phonemsg, setPhonemsg] = useState('')

    const [idmsgcolor, setIdMsgcolor] = useState('')
    const [pwmsgcolor, setPwmsgcolor] = useState('')
    const [pwchkmsgcolor, setPwchkmsgcolor] =useState('')
    const [emailmsgcolor, setEmailmsgColor] = useState('')
    const [phonemsgcolor, setPhonemsgColor] = useState('')

    const [IdCheck, setIdCheck] = useState()
    const [userPwchk, setUserPwchk] = useState()
    const [pwchkchk, setPwchkchk] = useState()
    const [EmailCheck, setEmailCheck] = useState()
    const [PhoneCheck, setPhoneCheck] = useState()
    const [CheckJoin, setCheckJoin] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        setRoles([...roles, "ADMIN"])
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
        if(e.target.value === userPw){
            setPwchkmsg('설정하신 비밀번호와 같습니다.')
            setPwchkmsgcolor('#077912')
            setPwchkchk(true)
        }else{
            setPwchkmsg('설정하신 비밀번호와 다릅니다.')
            setPwchkmsgcolor('red')
            setPwchkchk(false)
        }
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
    useEffect(()=> {
        if(userId && userEmail && userPhone && userPw && userPwchk && userAddress && userCompany && userDamdang && IdCheck && pwchkchk && EmailCheck && PhoneCheck){
            setCheckJoin(true)
            setBtnBackcolor('#077912')
        } else{
            setCheckJoin(false)
            setBtnBackcolor('gray')
        }
    }, [userId, userEmail, userPhone, userPw, userPwchk, userAddress, userCompany, userDamdang, IdCheck, pwchkchk, EmailCheck, PhoneCheck])
    
    const CheckId = e => {
        userCheck["userCheck"] = userId
        axios({
            method : 'post',
            url : '//localhost:8080/user/idCheck',
            data: userCheck
        })
        .then(res => {
            console.log(res.data)
            setIderrmsg('사용 가능한 아이디입니다.')
            setIdCheck(true)
            setIdMsgcolor('#077912')
            // setIdCheck(res.data.idcheck)
        })
        .catch(err => {
            console.log(err)
            setIderrmsg('이미 사용 중인 아이디입니다.')
            setIdMsgcolor('red')
            setIdCheck(false)
            // setIdCheck()
        })
    }
    const CheckEmail = e => {
        userCheck["userCheck"] = userEmail
        axios({
            method : 'post',
            url : '//localhost:8080/user/emailCheck',
            data: userCheck
        })
        .then(res => {
            console.log(res.data)
            setEmailmsg('사용 가능한 이메일입니다.')
            setEmailmsgColor('#077912')
            setEmailCheck(true)
            // setEmailCheck(res.data.idcheck)
        })
        .catch(err => {
            console.log(err)
            setEmailmsg('이미 사용중인 이메일입니다.')
            setEmailmsgColor('red')
            setEmailCheck(false)
            // setEmailCheck()
        })
    }
    const JoinComplete = e => {
        e.preventDefault()
        UserInfo['name'] = userCompany
        UserInfo['cname'] = userDamdang
        UserInfo['userId'] = userId
        UserInfo['password'] = userPw
        UserInfo['email'] = userEmail
        UserInfo['phone'] = userPhone
        UserInfo['address'] = userAddress
        UserInfo['roles'] = roles
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
    const CheckPw = e => {
        if(e.target.value.length > 4 && e.target.value.length < 16){
            setPwerrmsg('올바른 비밀번호 형식입니다.')
            setUserPwchk(true)
            setPwmsgcolor('#077912')
        } else{
            setPwerrmsg('5자리 이상 15자리 이하로 입력해주세요')
            setPwmsgcolor('red')
            setUserPwchk(false)
        }
    }
    const CheckPhone = e => {
        userCheck["userCheck"] = userPhone
        axios({
            method : 'post',
            url : '//localhost:8080/user/phoneCheck',
            data : userCheck
        })
        .then(res => {
            console.log(res.data)
            setPhonemsg('사용 가능한 번호입니다.')
            setPhonemsgColor('#077912')
            setPhoneCheck(true)
        })
        .catch(err => {
            console.log(err)
            setPhonemsg('이미 사용중인 번호입니다.')
            setPhonemsgColor('red')
            setPhoneCheck(false)
        })
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
                            <div className="joinform-joinbody__joinbox--box">
                                <input type='text' className="inputuserinfo joinform-joinbody__joinbox--userinfoCompany" placeholder="회사 명을 입력하세요." onChange={InputCompany}/>
                            </div>
                        </div>
                        <div className="joinform-joinbody__totalbox">
                            <div className="joinform-joinbody__joinbox">
                                <label className="joinform-joinbody__joinbox--label">회원 아이디</label>
                                <div className="joinform-joinbody__joinbox--box">
                                    <input type='text' className="inputuserinfo joinform-joinbody__joinbox--userinfoId" placeholder="아이디를 입력하세요." onChange={InputId} onBlur={CheckId}/>
                                </div>
                            </div>
                            <small className="errmsg" style={{color : idmsgcolor}}>
                                    {Iderrmsg}
                            </small>
                        </div>
                        <div className="joinform-joinbody__totalbox">
                            <div className="joinform-joinbody__joinbox">
                                <label className="joinform-joinbody__joinbox--label">비밀번호</label>
                                <div className="joinform-joinbody__joinbox--box">
                                    <input type='password' className="inputuserinfo joinform-joinbody__joinbox--userinfoPw" placeholder="비밀번호를 입력하세요." onChange={InputPw} onBlur={CheckPw}/>
                                </div>
                            </div>
                            <small className="errmsg" style={{color : pwmsgcolor}}>
                                    {Pwerrmsg}
                            </small>
                        </div>
                        <div className="joinform-joinbody__totalbox">
                            <div className="joinform-joinbody__joinbox">
                                <label className="joinform-joinbody__joinbox--label">비밀번호 확인</label>
                                <div className="joinform-joinbody__joinbox--box">
                                    <input type='text' className="inputuserinfo joinform-joinbody__joinbox--userinfoPwchk" placeholder="비밀번호를 다시 입력해주세요." onBlur={InputPwchk}/>
                                </div>
                            </div>
                            <small className="errmsg" style={{color : pwchkmsgcolor}}>
                                    {pwchkmsg}
                            </small>
                        </div>
                        <div className="joinform-joinbody__totalbox">
                            <div className="joinform-joinbody__joinbox">
                                <label className="joinform-joinbody__joinbox--label">이메일</label>
                                <div className="joinform-joinbody__joinbox--box">
                                    <input type='email' className="inputuserinfo joinform-joinbody__joinbox--userinfoEmail" placeholder="이메일을 입력하세요." onChange={InputEmail} onBlur={CheckEmail}/>
                                </div>
                            </div>
                            <small className="errmsg" style={{color : emailmsgcolor}}>
                                    {emailmsg}
                            </small>
                        </div>
                        <div className="joinform-joinbody__totalbox">
                            <div className="joinform-joinbody__joinbox">
                                <label className="joinform-joinbody__joinbox--label">휴대폰</label>
                                <div className="joinform-joinbody__joinbox--box">
                                    <input type='text' className="inputuserinfo joinform-joinbody__joinbox--userinfoTel" placeholder="전화번호를 입력하세요." onChange={InputPhonenum} onBlur={CheckPhone}/>
                                </div>
                            </div>
                            <small className="errmsg" style={{color : phonemsgcolor}}>
                                    {phonemsg}
                            </small>
                        </div>
                        <div className="joinform-joinbody__joinbox">
                            <label className="joinform-joinbody__joinbox--label">담당자 명</label>
                            <div className="joinform-joinbody__joinbox--box">
                                <input type='text' className="inputuserinfo joinform-joinbody__joinbox--userinfoDamdang" placeholder="이름 / 직책" onChange={InputDamdang}/>
                            </div>
                        </div>
                        <div className="joinform-joinbody__joinbox">
                            <label className="joinform-joinbody__joinbox--label">주소</label>
                            <div className="joinform-joinbody__joinbox--box">
                                <input type='text' className="inputuserinfo joinform-joinbody__joinbox--userinfoAddress" placeholder="상세 주소까지 입력해 주세요.(상세주소까지 입력)" onChange={InputAddress}/>
                            </div>
                        </div>
                    </div>
                    <input className="singupcompletebtn" type="submit" value={'회원가입'} style={{backgroundColor : btnBackcolor}} disabled={!CheckJoin} onClick={JoinComplete}/>
                </form>
            </div>
        </div>
    )
}
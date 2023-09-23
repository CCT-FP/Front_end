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
    const [roles, setRoles] = useState([])
    const [btnBackcolor, setBtnBackcolor] = useState('gray')
    const userCheck = {}

    //유효성 검사
    const [IdCheck, setIdCheck] = useState()
    const [userPwchk, setUserPwchk] = useState()
    const [pwchkchk, setPwchkchk] = useState()
    const [EmailCheck, setEmailCheck] = useState()
    const [PhoneCheck, setPhoneCheeck] = useState()
    const [CheckJoin, setCheckJoin] = useState(false)


    const [idmsgcolor, setIdMsgcolor] = useState('')
    const [pwmsgcolor, setPwmsgcolor] = useState('')
    const [pwchkmsgcolor, setPwchkmsgcolor] =useState('')
    const [emailmsgcolor, setEmailmsgColor] = useState('')
    const [phonemsgcolor, setPhonemsgColor] = useState('')

    const [Iderrmsg, setIderrmsg] = useState('')
    const [Pwerrmsg, setPwerrmsg] = useState('')
    const [pwchkmsg, setPwchkmsg] = useState('')
    const [emailmsg, setEmailmsg] = useState('')
    const [phonemsg, setPhonemsg] = useState('')

    useEffect(()=>{
        setRoles([...roles, "USER"])
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
            setPwchkmsg('설정하신 비밀번호와 같습니다.')
            setPwchkmsgcolor('#077912')
        }else{
            setPwchkmsg('설정하신 비밀번호와 다릅니다.')
            setPwchkmsgcolor('red')
        }
    }
    useEffect(()=> {
        if(userId && userEmail && userBirth && userPhone && userPw && userPwchk){
            setCheckJoin(true)
            setBtnBackcolor('#077912')
        } else{
            setCheckJoin(false)
            setBtnBackcolor('gray')
        }
    }, [userId, userEmail, userBirth, userName, userPhone, userPw, userPwchk])
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
            data: userCheck
        })
        .then(res => {
            console.log(res.data)
            setIderrmsg('사용 가능한 아이디입니다.')
            setIdMsgcolor('#077912')
            // setIdCheck(res.data.idcheck)
        })
        .catch(err => {
            console.log(err)
            setIderrmsg('이미 사용 중인 아이디입니다.')
            setIdMsgcolor('red')
            // setIdCheck()
        })
    }
    const CheckPw = e => {
        if(e.target.value.length > 4 && e.target.value.length < 16){
            setPwerrmsg('올바른 비밀번호 형식입니다.')
            setPwmsgcolor('#077912')
        } else{
            setPwerrmsg('5자리 이상 15자리 이하로 입력해주세요')
            setPwmsgcolor('red')
        }
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
            // setEmailCheck(res.data.idcheck)
        })
        .catch(err => {
            console.log(err)
            setEmailmsg('이미 사용중인 이메일입니다.')
            setEmailmsgColor('red')
            // setEmailCheck()
        })
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
        })
        .catch(err => {
            console.log(err)
            setPhonemsg('이미 사용중인 번호입니다.')
            setPhonemsgColor('red')
        })
    }
    const JoinComplete = e => {
        e.preventDefault()
        UserInfo['userId'] = userId
        UserInfo['name'] = userName
        UserInfo['password'] = userPw
        UserInfo['email'] = userEmail
        UserInfo['phone'] = userPhone
        UserInfo['birth'] = userBirth
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

    useEffect(()=>{
        if(IdCheck){
        } else{
        }
    },[IdCheck])

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
                            <label className="joinform-joinbody__joinbox--label">생년월일</label>
                            <div className="joinform-joinbody__joinbox--box">
                                <input type='text' className="inputuserinfo joinform-joinbody__joinbox--userinfoDamdang" placeholder="생년월일 6자리를 입력해주세요(yymmdd)" onChange={InputBirth}/>  
                            </div>
                        </div>
                    </div>   
                    <input className="singupcompletebtn" type="submit" style={{backgroundColor : btnBackcolor}} value={'회원가입'} disabled={!CheckJoin} onClick={JoinComplete}/>
                </form>
            </div>
        </div>
    )
}
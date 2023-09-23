import React,{ useEffect, useState } from "react";
import '../css/WriteResume.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function WriteResume(){
    const [Allproject, setAllproject] = useState([])    //모든 프로젝트 상태저장
    const [intro, setIntro] = useState('')              // 한줄소개 상태저장
    const [project, setProject] = useState('')          // 프로젝트 경험 상태 저장  
    
    const [projectDetail, setProjectDetail] = useState('')      //프로젝트 상세 내용 상태 저장
    const [stack, setStack] = useState([])              // stack(기술스택) 배열 상태 저장
    const [period, setPeriod] = useState([])            // period(기간) 배열 상태 저장
    const [disabled, setDisabled] = useState(true)      // 프로젝트 경험을 작성했을 때만 활성화 하기위한 상태   <Boolean>
    const [issave, setIssave] = useState(true) 
    const [btnBackground, setBtnbackground] = useState('gray')         // 이력서 저장 버튼 상태저장 <Boolean> (이력서 내용에 비어있는 부분에 따른 버튼 활성/비활성화)
    const navigate = useNavigate()                      // 마이페이지로의 전환을 위한 useNavigate Hooks
    const Resume = {}                                   // 백엔드에 전달하는 데이터들을 저장하는 Resume 객체

    const Inputintro = e =>{                            // 한줄소개 input의 상태가 변화되었을 때(글을 쓰거나 지우거나)
        setIntro(e.target.value)                        // 해당 내용을 intro에 set
    }
    const Inputproject = e => {                         // 프로젝트 input의 상태가 변화되었을 때                   
        setProject(e.target.value)                      // 해당 내용을  project에 저장
    }
    const Addstaper = (sta, per) => {                   // sta -> stack(기술스택),  per-> period(기간) , stack과 period에 내용을 추가하기위함
        setStack([...stack, sta])                       //stack 배열에 sta의 값을 추가
        setPeriod([...period, per])                     //period 배열에 per의 값을 추가
    }
    const Addproject = e => {                           // +버튼을 눌렀을 때
        setProject('')                                  // 적었던 내용 빈 칸으로(다를 내용을 바로 적기 위함)
        setAllproject([...Allproject, project])         // + 버튼을 누르고 올라간 프로젝트 경험을 Allproject 배열에 저장
        const sta = project.split('/')[0]               // split함수를 이용하여 project를 '/'을 기준으로 자른 첫 index요소는 stack임 이걸 sta에 저장
        const per = project.split('/')[1]               // split함수를 이용하여 project를 '/'을 기준으로 자른 두 번째 index요소는 period임 이걸 per에 저장
        console.log(Allproject)                         // 이건 그냥 확인할라고
        Addstaper(sta,per)                              // Addstaper 호출
    }
    const DeleteProject = (e, index) => {               // - 버튼을 눌렀을 때
        e.preventDefault();                             // 기본 이벤트 막기
        const updatedProjects = Allproject.filter((item, i) => i !== index);   // -버튼을 누른 프로젝트 경험의 index 기준으로(99라인 참고) index가 같으면 그 요소를 제외하고 배열 재구성
        const updatedStack = stack.filter((item, i)=> i !== index);            // stack도
        const updatedPeriod = period.filter((item, i)=> i !== index)           // period도
        setAllproject(updatedProjects);                                        // 재구성한 allproject를 Allproject에 저장
        setStack(updatedStack)                                                 // stack도              
        setPeriod(updatedPeriod)                                               // period도
    }
    const Inputcontents = e => {                                               // 프로젝트 상세 상태 변환할때
        setProjectDetail(e.target.value)                                       // 내용 ㅖrojectDetail에 저장
    }
    useEffect(()=>{ 
        if(project !== ''){                                                    // project가 비어있지 않다면
            setDisabled(false)                                                 // false면 활성화임
        } else{                                                                // 비었으면
            setDisabled(true)                                                  // 비활성화
        }
    }, [project])                                                              // useEffect 두 번째 인자값이 저런 형태로 있다면 저 안의 값이 변할 때마다 이 useEffect를 호출함

    useEffect(()=>{                                                            // Allproject, intro, projectDetail이 변할때마다 호출
        if(Allproject.length > 0 && intro && projectDetail){                   // 공백이 아니면
            setIssave(false)   
            setBtnbackground('#077912')                                                // 이력서 저장버튼 활성화
        } else{                                                                // 공백이면
            setIssave(true)  
            setBtnbackground('gray')                                                  // 비활성화
        }
    },[intro, project, projectDetail])                                          // 여기있는 값들 변할때마다

    const SaveResume = e => {                                                   // 이력서 저장 버튼을 눌렀을때
        Resume['userId'] = window.localStorage.getItem('userid')                                              // 이건 걍 두셈 userId
        Resume['title'] = intro                                                 // key = title, value = intro
        Resume['projectList'] = Allproject                                      // 72라인 까지 그런형태  
        Resume['detail'] = projectDetail                                        // Resume안의 key value 들임
        Resume['stackList'] = stack
        Resume['periodList'] = period
        e.preventDefault()
        axios({
            method : 'post',                                                    // 호출 형식
            url : '//localhost:8080/resume', 
            headers : {
                "Authorization": `Bearer ${window.localStorage.getItem('token')}`,
            },                                   // url api명세서에 있음
            data : Resume                                                       // 이력서 내용이 담긴 Resume을 data에 담아 보냄
        }).then(res => {                                                        // 통신에 성공했을 때
            console.log(res)                                                    // 그냥 확인할라고
            alert('저장되었습니다.')                                            // 저장 알림
            navigate('/mypage')                                                 // mypage로 이동
        })
          .catch(err => {
            console.log(err)
            alert('이미 작성한 이력서가 있습니다.')
        })                                       // 에러있을 때
    }

    return(
        <div className="WriteResume top_margin">
            <div className="WriteResume-titlebox">
                <h1 className="WriteResume-titlebox__title">이력서</h1>
            </div>
            <div className="WriteResumebox">
                <div className="WriteResume-introbox">
                    <h3 className="WriteResume-introbox__introlabel">한줄 소개 : </h3>
                    <div className="WriteResume-introbox__inputbox">
                        <input type="text" className="WriteResume-introbox__inputintro" placeholder="안녕하세요. 저는 (이름)입니다." onChange={Inputintro} maxLength={30}/>
                    </div>
                </div>
                <div className="WriteResume-project">
                <h3 className="WriteResume-projectlabel">프로젝트 입력</h3>
                {
                    Allproject?.map((item, index) => {
                        return(
                            <div className="allprojectlist">
                                <button key={index} className="deletebtn" onClick={e=>DeleteProject(e, index)}>x</button>
                                <div className="allprojectlist-listbox" key = {index}>
                                    {item}
                                </div>
                            </div>
                        )
                    })
                }
                    <div className="WriteResume-projectbox">
                        <div className="WriteReume-projectbox__box">
                            <button type="button" className="addprojectbtn" disabled={disabled} onClick={Addproject}>+</button>
                            <div className="WriteResume-projectbox__inputbox">
                                <input type="text" className="WriteResume-projectbox__inputproject" placeholder="언어/기간(숫자만, 개월수)/간단한 내역" onChange={Inputproject} value={project}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="WriteResume-projectdetailbox">
                    <div className="WriteResume-detailtitlebox">
                        <h3 className="WriteResume-projectdetilbox__projectdetaillabel">상세내역</h3>
                    </div>
                    <div className="WriteResume-detailbox__inputbox">
                        <textarea className="WriteResume-projectdetilbox__projectdetaillcontents" onChange={Inputcontents} rows={30} cols={100} maxLength={200}></textarea>
                    </div>
                </div>
                <button disabled={issave} style={{backgroundColor : btnBackground}} className="WriteResume-saveresume" onClick={SaveResume}>이력서 저장</button>
        </div>
    </div>
    )
}
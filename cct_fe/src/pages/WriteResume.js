import React,{ useEffect, useState } from "react";
import '../css/WriteResume.css'
import axios from 'axios'

export default function WriteResume(){
    const [Allproject, setAllproject] = useState([])
    const [intro, setIntro] = useState('')
    const [project, setProject] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [issave, setIssave] = useState(true)
    const [projectDetail, setProjectDetail] = useState('')
    const [stack, setStack] = useState([])
    const [period, setPeriod] = useState([])
    const Resume = {}

    const Inputintro = e =>{
        setIntro(e.target.value)
    }
    const Inputproject = e => {
        const pro = e.target.value
        setProject(pro)
    }
    const Addstaper = (sta, per) => {
        setStack([...stack, sta])
        setPeriod([...period, per])
    }
    const Addproject = e => {
        setProject('')
        setAllproject([...Allproject, project])
        const sta = project.split('/')[0]
        const per = project.split('/')[1]
        console.log(Allproject)
        Addstaper(sta,per)
    }
    const DeleteProject = (e, index) => {
        e.preventDefault();
        const updatedProjects = Allproject.filter((item, i) => i !== index);
        const updatedStack = stack.filter((item, i)=> i !== index);
        const updatedPeriod = period.filter((item, i)=> i !== index)
        setAllproject(updatedProjects);
        setStack(updatedStack)
        setPeriod(updatedPeriod)
    }
    const Inputcontents = e => {
        setProjectDetail(e.target.value)
    }
    useEffect(()=>{
        if(project !== ''){
            setDisabled(false)
        } else{
            setDisabled(true)
        }
    }, [project])

    useEffect(()=>{
        if(Allproject !== '' && intro !== '' && projectDetail !== ''){
            setIssave(false)
        } else{
            setIssave(true)
        }
    },[intro, project, projectDetail])

    const SaveResume = e => {
        Resume['userId'] = 'hana'
        Resume['title'] = intro
        Resume['projectList'] = Allproject
        Resume['detail'] = projectDetail
        Resume['stackList'] = stack
        Resume['periodList'] = period
        e.preventDefault()
        axios({
            method : 'post',
            url : '//localhost:8080/resume',
            data : Resume
        }).then(res => console.log(res))
          .catch(err => console.log(err))
    }

    return(
        <div className="WriteResume">
            <div className="WriteResume-titlebox">
                <h1 className="WriteResume-titlebox__title">이력서</h1>
            </div>
            <div className="WriteResume-introbox">
                <h3 className="WriteResume-introbox__introlabel">한줄 소개 : </h3>
                <input type="text" className="WriteResume-introbox__inputintro" placeholder="안녕하세요. 저는 (이름)입니다." onChange={Inputintro} />
            </div>
            <h3 className="WriteResume-introbox__projectlabel">프로젝트 입력</h3>
            {
                Allproject.map((item, index) => {
                    return(
                        <div className="allprojectlist">
                            <button key={index} className="deletebtn" onClick={e=>DeleteProject(e, index)}>x</button>
                            <div className="allprojectlist-listbox" key = {index}>;label
                                {item}
                            </div>
                        </div>
                    )
                })
            }
            <div className="WriteResume-projectbox">
                <button type="button" className="addprojectbtn" disabled={disabled} onClick={Addproject}>+</button>
                <input type="text" className="WriteResume-projectbox__inputproject" placeholder="[언어/프로젝트기간(개월수)/간단한 내역]으로 적어주세요" onChange={Inputproject} value={project}/>
            </div>
            <div className="WriteResume-projectdetailbox">
                <h3 className="WriteResume-projectdetilbox__projectdetaillabel">상세내역</h3>
                <textarea className="WriteResume-projectdetilbox__projectdetaillcontents" onChange={Inputcontents} rows={50} cols={100}></textarea>
            </div>
            <button disabled={issave} className="WriteResume-saveresume" onClick={SaveResume}>이력서 저장</button>
        </div>
    )
}
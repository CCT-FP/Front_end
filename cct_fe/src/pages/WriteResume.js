import React,{ useEffect, useState } from "react";
import '../css/WriteResume.css'

export default function WriteResume(){
    const [Allproject, setAllproject] = useState([])
    const [intro, setIntro] = useState('')
    const [project, setProject] = useState('')
    const [disabled, setDisabled] = useState(true)

    const Inputintro = e =>{
        setIntro(e.target.value)
    }
    const Inputproject = e => {
        setProject(e.target.value)
    }
    const Addproject = e => {
        setProject('')
        setAllproject([...Allproject, project])
        console.log(Allproject)
    }
    useEffect(()=>{
        if(project !== ''){
            setDisabled(false)
        } else{
            setDisabled(true)
        }
    }, [project])
    return(
        <div className="WriteResume">
            <div className="WriteResume-titlebox">
                <h1 className="WriteResume-titlebox__title">이력서</h1>
            </div>
            <div className="WriteResume-introbox">
                <h3 className="WriteResume-introbox__introlabel">한줄 소개 : </h3>
                <input id="intro" type="text" className="WriteResume-introbox__inputintro" placeholder="안녕하세요. 저는 (이름)입니다." onChange={Inputintro} />
            </div>
            <h3 className="WriteResume-introbox__projectlabel">프로젝트 입력</h3>
            {
                Allproject.map(item => {
                    return(
                        <div key = {item}>
                            {item}
                        </div>
                    )
                })
            }
            <div className="WriteResume-projectbox">
                <button type="button" className="addprojectbtn" disabled={disabled} onClick={Addproject}>+</button>
                <input id="project" type="text" className="WriteResume-projectbox__inputproject" placeholder="[언어/회사/간단한 내역]으로 적어주세요" onChange={Inputproject} value={project}/>
            </div>
            <div className="WriteResume-projectdetailbox">
                <h3 className="WriteResume-projectdetilbox__projectdetaillabel">상세내역</h3>
                <textarea id='projectdetail' rows={200} cols={100}></textarea>
            </div>
            <button className=""></button>
        </div>
    )
}
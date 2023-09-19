import React,{ useEffect, useState } from "react";
import '../css/WriteResume.css'
import axios from 'axios'
import FilterPopup from "../components/FilterPopup";

export default function WriteNotice(){
    const [Allproject, setAllproject] = useState([])    // 모든 프로젝트 상태 저장
    const [intro, setIntro] = useState('')              // 한줄소개 상태저장
    const [project, setProject] = useState('')          // 프로젝트 경험 상태 저장
    const [disabled, setDisabled] = useState(true)      // 프로젝트 작성했을 때만 활성화 하기 위한 상태
    const [issave, setIssave] = useState(true)          // 이력서 저장 버튼 상태저장
    const [projectDetail, setProjectDetail] = useState('')  // 프로젝트 상세 내용 상태 저장
    const [stack, setStack] = useState([])              // stack 배열 상태 저장
    const [period, setPeriod] = useState([])            // period 배열 상태 저장
    const Resume = {}                                   // 백엔드에 전달하는 데이터들을 저장하는
    
    const [filter, setFilter] = useState(false);        // filter팝업 상태 저장
    const [addList, setAddList] = useState([]);         // 추가된 스펙, 경력, 지역
    const [selectData, setSelectData] = useState([])    // filter팝업에서 저장하는 리스트

    const applyFilters = (selectData) => {  // filter팝업에서 받아온 데이터 저장하기
        setSelectData(selectData);
    } 
    const showFilterPopup = () => {   // 필터창 오픈
        setFilter(true);
    };
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

    const SaveNotice = e => {
        Resume['userId'] = 'hana'
        Resume['title'] = intro
        Resume['projectList'] = Allproject
        Resume['detail'] = projectDetail
        Resume['stackList'] = stack
        Resume['periodList'] = period
        e.preventDefault()
        axios({
            method : 'post',
            url : '//localhost:8080/jobPost',
            data : Resume
        }).then(res => console.log(res))
          .catch(err => console.log(err))
    }

    return(
        <div className="WriteNotice">
            <div className="WriteNotice-titlebox">
                <h1 className="WriteNotice-titlebox__title">이력서</h1>
            </div>
            <div className="WriteNotice-introbox">
                <h3 className="WriteNotice-introbox__introlabel">한줄 소개 : </h3>
                <div className="WriteNotice-introbox__inputbox">
                    <input type="text" className="WriteNotice-introbox__inputintro" placeholder="[사용언어/기간/지역/간단한 소개]로 적어주세요." onChange={Inputintro}/>
                </div>
            </div>
            <div className="WriteNotice-project">
            <button className="WriteNotice-projectlabel" onClick={showFilterPopup}>키워드 입력</button> {/* filter팝업 오픈 */}
                <FilterPopup
                    setFilter={setFilter}
                    filter={filter}
                    applyFilters={applyFilters}
                    />
            {
                selectData.map((item, index) => {
                    return(
                        <div className="keyword">
                            <button key={index} className="deletebtn" onClick={e=>DeleteProject(e, index)}>x</button>
                            <div className="keyword-box" key = {index}>;label
                                {item}
                            </div>
                        </div>
                    )
                })
            }
                <div className="WriteNotice-projectbox">
                    <div className="WriteNoticeprojectbox__box">
                        <button type="button" className="addprojectbtn" disabled={disabled} onClick={Addproject}>+</button>
                        <div className="WriteNotice-introbox__inputbox">
                            <input type="text" className="WriteNotice-projectbox__inputproject" placeholder="[언어/프로젝트기간(개월수)/간단한 내역]으로 적어주세요" onChange={Inputproject} value={project}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="WriteNotice-projectdetailbox">
                <h3 className="WriteNotice-projectdetilbox__projectdetaillabel">상세내역</h3>
                <div className="WriteNotice-introbox__inputbox">
                    <textarea className="WriteNotice-projectdetilbox__projectdetaillcontents" onChange={Inputcontents} rows={30} cols={80}></textarea>
                </div>
            </div>
            <button disabled={issave} className="WriteNotice-saveresume" onClick={SaveNotice}>공고 저장</button>
        </div>
    )
}
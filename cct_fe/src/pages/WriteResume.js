import React,{ useState } from "react";
import '../css/WriteResume.css'

export default function WriteResume(){
    const Allproject = []
    const [project, setProject] = useState(Allproject)
    return(
        <div className="WriteResume">
            <div className="WriteResume-titlebox">
                <h1 className="WriteResume-titlebox__title">이력서</h1>
            </div>
            <div className="WriteResume-introbox">
                <label htmlFor="intro" className="WriteResume-introbox__introlabel">한줄 소개 : </label>
                <input id="intro" type="text" className="WriteResume-introbox__inputintro" placeholder="안녕하세요. 저는 (이름)입니다."/>
            </div>
            <div className="WriteResume-introbox">
                <label htmlFor="project" className="WriteResume-introbox__projectlabel">프로젝트 입력</label>
                <input id="project" type="text" className="WriteResume-introbox__inputproject" placeholder="[언어/회사/간단한 내역]으로 적어주세요"/>
            </div>
            {
                // '기본으로 적는 칸 있고, 버튼 누르면 input에 있는 value를 Allproject에추가 map함수로 Allproject에 있는거 뽑아오기'
            }
        </div>
    )
}
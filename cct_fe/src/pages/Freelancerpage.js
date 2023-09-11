import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Headerbar from '../components/Headerbar';
import '../css/Freelancerpage.css'

export default function Freelancerpage (){
    return (
        <div>
            <div className="header">
            </div>

             <div className="freelancer-content-body">  {/* 프리랜서 페이지 컨텐츠 구역 */}
                <div className="freelancer-top-content"> {/* 프리랜서 페이지 컨텐츠 상단(필터, 내이력보기 등) */}
                    <div className="freelancer-top-content-top">
                        <span className="freelancer-top-content-explanation content-margin">
                            <span className="margin-right">프로젝트를 등록하면</span> <br></br>기업의 컨텍이 들어올 수 있어요
                        </span>
                        <span className="freelancer-top-content-seeresume content-margin margin">
                            <button className="seeresume">내 이력서 보기</button>
                        </span>
                        </div> {/* 상단 컨텐츠: 설명, 내이력보기 구역 */}
                    <div className="freelancer-top-content-bottom"></div> {/* 상단 컨텐츠: 필터링 버튼 구역 */}
                </div>

                <div className="freelancer-bottom-content"> {/* 프리랜서 페이지 하단 컨텐츠 구역 */}
                    <div className="freelancer-bottom-content-resume"> {/* 프리랜서 페이지 하단 컨텐츠 이력서 구역 */}
                        <div className="freelancer-bottom-content-resume-title"></div>  {/* 프리랜서 페이지 하단 컨텐츠 이력서 제목  */}
                        <div className="freelancer-bottom-content-resume-spec"></div> {/* 프리랜서 페이지 하단 컨텐츠 이력서 스펙 */}
                        <div className="freelancer-bottom-content-resume-detail"></div> {/* 프리랜서 페이지 하단 컨텐츠 이력서 내용 */}
                    </div>
                </div>
            </div>
        </div>
    )
}
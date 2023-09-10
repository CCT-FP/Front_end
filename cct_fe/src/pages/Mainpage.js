import React, { useEffect } from "react";

export default function Mainpage() {
    useEffect(()=>{
        
    }, [])
    
    return (
        <div>
            <div className="header">
                {/* 기업공고페이지(메인 페이지) */}   
            </div>

             <div className="company-content-body">  {/* 기업공고 페이지 컨텐츠 구역 */}
                <div className="company-top-content"> {/* 기업공고 페이지 컨텐츠 상단(필터, 내 공고보기 등) */}
                    <div className="company-top-content-top"></div> {/* 상단 컨텐츠: 설명, 내 공고보기 구역 */}
                    <div className="company-top-content-bottom"></div> {/* 상단 컨텐츠: 필터링 버튼 구역 */}
                </div>

                <div className="company-bottom-content"> {/* 기업공고 페이지 하단 컨텐츠 구역 */}
                    <div className="company-bottom-content-notice"> {/* 기업공고 페이지 하단 컨텐츠 공고 구역 */}
                        <div className="company-bottom-content-notice-title"></div>  {/* 기업공고 페이지 하단 컨텐츠 공고 필요 제목  */}
                        <div className="company-bottom-content-notice-spec"></div> {/* 기업공고 페이지 하단 컨텐츠 공고 필요 스펙 */}
                        <div className="company-bottom-content-notice-btn"></div> {/* 기업공고 페이지 하단 컨텐츠 공고 지원하기버튼*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, {useState} from 'react';

export default function FilterPopup() {
    
    // const closeFilterPopup = () => {
    //     setFilter(false);
    // }

    return(
        <div className="filter-popup">  {/* 필터링 팝업*/}
            {/* <button className='closeFilterPopup' onClick={closeFilterPopup}>X</button> 닫기 버튼 */}
            <div className='filter-popup-title'>필터 추가하기</div>     {/* 필터 제목*/}
            <div className='filter-popup-career'>                    {/* 경력 파트 */}
                <div className='filter-popup-career-text'>경력</div>    {/* 경력 파트 제목*/}
                <div className='filter-popup-career-btn'>            {/*경력 선택 버튼*/}
                    <button className='filter-popup-career-1'></button> {/* 1년*/}
                    <button className='filter-popup-career-3'></button> {/* 3년*/}
                    <button className='filter-popup-career-5'></button> {/* 5년*/}
                </div>
            </div>

            <div className='filter-popup-spec'>         {/* 스펙 부분 */}
                <div className='filter-popup-spec-title'>기술</div> {/* 스펙 제목 */}
                <div className='filter-popup-spec-btn'>     {/* 스펙 버튼 */}
                    <button className='filter-popup-spec-java'>JAVA</button>    {/* 자바 버튼*/}
                    <button className='filter-popup-spec-spring'>SPRING</button>    {/* 스프링 버튼 */}
                </div>
            </div>

            <div className='filter-popup-place'>    {/* 지역 선택 */}
                <div className='filter-popup-place-title'>지역</div>    {/* 지역 선택 제목 */}

            </div>
        </div>
    )
}
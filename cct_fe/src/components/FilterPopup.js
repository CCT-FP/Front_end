import React, {useState} from 'react';

import Modal from 'react-modal';

export default function FilterPopup({setFilter, filter}) {
    const [java, setJava] = useState(false);
    const closeFilterPopup = () => {    // 모달창 없애기
        setFilter(false);
    }

    const customModalStyles = {     // 모달창 디자인
        overlay: {
          backgroundColor: " rgba(0, 0, 0, 0.4)",
          width: "100%",
          height: "100vh",
          zIndex: "10",
          position: "fixed",
          top: "0",
          left: "0",
        },
        content: {
          width: "52.7vw",
          height: "95vh",
          zIndex: "150",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "10px",
          boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
          backgroundColor: "white",
          justifyContent: "center",
          overflow: "auto",
          padding: "0",
        },
      };

    return(
        <Modal isOpen={filter} onRequestClose={closeFilterPopup} 
     
        
        style={customModalStyles}>
        <div className="filter-popup"> {/* 필터링 팝업 */}
        <button className="close-btn" onClick={()=> {setFilter(false)}}>X</button> {/* 닫기버튼 */} 
            <div className='filter-popup-title'>필터 추가하기</div>     {/* 필터 제목*/}
            <div className='filter-popup-career'>                    {/* 경력 파트 */}
                <div className='filter-popup-career-text'>경력</div>    {/* 경력 파트 제목*/}
                <div className='filter-popup-career-select'>            {/*경력 선택 버튼*/}
                <select className='filter-popup-career-option'>
                    <option className='filter-popup-career-1' value={1}>1년 이하</option>
                    <option className='filter-popup-career-3' value={3}>3년 이하</option>
                    <option className='filter-popup-career-5' value={5}>5년 이하</option>
                </select>
                
                </div>
            </div>
            
            <div className='filter-popup-spec'>         {/* 스펙 부분 */}
                <div className='filter-popup-spec-title'>기술</div> {/* 스펙 제목 */}
                <div className='filter-popup-spec-btn'>     {/* 스펙 버튼 */}
                    JAVA
                    <input className='filter-popup-spec-java'
                        type='checkbox'
                        
                        ></input>
                     {/* <button className='filter-popup-spec-java'>JAVA</button>    자바 버튼  */}
                     {/* <button className='filter-popup-spec-spring'>SPRING</button>    스프링 버튼  */}
                </div>
            </div>

            <div className='filter-popup-place'>    {/* 지역 선택 */}
                <div className='filter-popup-place-title'>지역</div>    {/* 지역 선택 제목 */}

            </div>
        </div>
        </Modal>
    )
}
import React, {useState} from 'react';
import Select from 'react-select';
import Modal from 'react-modal';

export default function FilterPopup({setFilter, filter, applyFilters}) {
    const [filterOption, setFilterOption] = useState({
        spec: [],
        period: '',
        location: []
    });
   
    const specData = [  // 기술 데이터
        { value: 'HtmlCss', label: 'HTML/CSS' },   
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'Java', label: 'Java' },
        { value: 'C', label: 'C' },
        { value: 'C++', label: 'C++' },
        { value: 'C#', label:'C#' },
        { value:'Python',label:'Python'}
      ];

    const closeFilterPopup = () => {    // 팝업창 없애기
        setFilter(false);
    }

    const handleChangeSpec = (selectedOptions) => {
        const selectedSpecs = selectedOptions.map(option => option.value);
        setFilterOption({ ...filterOption, spec:selectedSpecs });
     }

    const handlePeriodChange = (e) => {
        filterOption.period=e.value;
    }
    const handleClickApply = () => {
        // 필터링 조건을 부모 컴포넌트로 전달
        applyFilters(filterOption);
     
        // 모달 닫기 등의 동작 수행
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
        <button className="close-btn" onClick={()=> {setFilter(false)}}>창 닫기</button> {/* 닫기버튼 */} 
            <div className='filter-popup-title'>필터 추가하기</div>     {/* 필터 제목*/}
            <div className='filter-popup-career'>                    {/* 경력 파트 */}
                <div className='filter-popup-career-text'>경력</div>    {/* 경력 파트 제목*/}
                <div className='filter-popup-career-select'>            {/*경력 선택 버튼*/}
                <select className='filter-popup-career-option' onChange={handlePeriodChange}>
                    <option value="">전체</option>
                    <option value="1">1년 이하</option>
                    <option value="3">3년 이하</option>
                    <option value="5">5년 이하</option>
                </select>
                
                </div>
            </div>
            
            <div className='filter-popup-spec'>         {/* 스펙 부분 */}
                <div className='filter-popup-spec-title'>기술</div> {/* 스펙 제목 */}
                   <Select
                        isMulti
                        options={specData}
                        onChange={handleChangeSpec}
                        placeholder="주력 언어 선택"  
                    />
                
                </div>
            </div>

            <div className='filter-popup-location'>    {/* 지역 선택 */}
                <div className='filter-popup-location-title'>지역</div>    {/* 지역 선택 제목 */}

            </div>
            <button className='filter-popup-apply' onClick={handleClickApply}>적용하기</button>
        
        </Modal>
    )
}
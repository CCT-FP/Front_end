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
    
    const locationData = [  // 지역 데이터
        { value: 'Seoul', label: '서울'},   // 서울
        { value: 'Busan', label: '부산'},   // 부산
        { value: 'Daegu', label: '대구'},   // 대구
        { value: 'Incheon', label: '인천'}, // 인천
        { value: 'Gwangju', label: '광주'}, // 광주
        { value: 'Ulsan', label: '울산'},   // 울산
        { value: 'Sejong', label: '세종'},  // 세종
        { value: 'Gyeonggi', label: '경기도'},    // 경기도 그룹
        // { value: 'Suwon', label: '수원'},
        // { value: 'Seongnam', label: '성남'},
        // { value: 'Uijeongbu', label: '의정부'}
        { value: 'Gangwon', label: '강원도'},   // 강원도 그룹
        { value: 'Chungbuk', label: '충청북도'},    // 충청북도 그룹
        { value: 'Chungnam', label: '충청남도'},    // 충청남도 그룹
        { value: 'Jeonbuk', label: '전라북도'}, // 전라북도 그룹
        { value: 'Jeonnam', label: '전라남도'}, // 전라남도 그룹
        { value: 'Gyeongbuk', label: '경상북도'},   // 경상북도 그룹
        { value: 'Gyeongnam', label: '경상남도'}, // 경상남도 그룹
        { value: 'Jeju', label: '제주도'}   // 제주도 그룹
    ];

    const closeFilterPopup = () => {    // 팝업창 없애기
        setFilter(false);
    }

    const handleChangeSpec = (selectedOptions) => {     // 스펙이 바뀌면 selectedSpecs에 선택된 값들 저장 후 setFilterOption으로 전달
        const selectedSpecs = selectedOptions.map(option => option.value);
        setFilterOption({ ...filterOption, spec:selectedSpecs });
     }

    const handleChangePeriod = (e) => { // 경력이 바뀌면 필터옵션으로 값을 전달
        filterOption.period=e.value;
    }

    const handleChangeLocation = (e) => {
        const selectedLocation = e.map(option => option.value);
        setFilterOption({...filterOption, location: selectedLocation});
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
                <select className='filter-popup-career-option' onChange={handleChangePeriod}>
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
                <Select
                    isMulti
                    options={locationData}
                    onChange={handleChangeLocation}
                    placeholder="근로 위치 선택"
                />
                
            </div>
            <button className='filter-popup-apply' onClick={handleClickApply}>적용하기</button>
        
        </Modal>
    )
}
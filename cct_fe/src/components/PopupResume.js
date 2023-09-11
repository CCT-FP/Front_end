function PopupResume ({setPopupOpen, id, title, content, company}) {
    // 팝업 끄기
    const closePopup = () => {
        setPopupOpen(false);
    };
    
    return (
        <div className="popup">
            <button className="close-btn" onClick={closePopup}>
                X
            </button>
            <div className="resume-list-box">
                <div className="resume-title"></div>
                <div className="resume-content"></div>
                <div className="resume-company"></div>
            </div>
        </div>
    )
}
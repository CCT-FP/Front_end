import Modal from 'react-modal';

export default function ResumePopup ({setPopup, popup}) {
    // 팝업 끄기
    const closePopup = () => {
        setPopup(false);
    };
    
    const customModalStyles = {
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

    return (
        <Modal isOpen={popup} onRequestClose={closePopup} 
     
        
        style={customModalStyles}>
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
        </Modal>
    )
}
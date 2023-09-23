import Modal from "react-modal";
import React, { useEffect } from "react";
import axios from "axios";

export default function ScoutDetailModal({ isOpen, closeModal, item }) {
  // Modal 내용 정의
  useEffect(()=> {
    axios({
        method: 'get',
        url : '//3.37.93.210:8080/scout/read',
        data : item
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  },[])
  const customModalStyles = {     // 모달창 디자인
              overlay: {
                backgroundColor: " rgba(0, 0, 0, 0.4)",
                width: "100%",
                height: "100vh",
                zIndex: "200",
                position: "fixed",
                top: "0",
                left: "0",
              },
              content: {
                width: "52.7vw",
                height: "95vh",
                zIndex: "201",
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
    <Modal isOpen={isOpen} style={customModalStyles}>
      {/* 추가 Modal 내용 */}
      <div>
        {/* Modal 내용 */}
        <button onClick={closeModal}>닫기</button>
      </div>
    </Modal>
  );
}

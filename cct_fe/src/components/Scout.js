// import Modal from "react-modal";
// import React, { useEffect, useState } from "react";
// import { AiOutlineMail } from "react-icons/ai";
// import '../css/Scout.css'
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import ScoutDetail from "./ScoutDetail";

// export default function Scout ({isOpen, setIsopen}) {
//      const [isreceive, setIsreceive] = useState(true)
//      const [receivelist, setReceivelist] = useState([])
//      const [sendlist, setSenderlist] = useState([])
//      const [openscoutDetail, setOpenscoutDetail] = useState(false)
//      const navigate = useNavigate()
//      const customModalStyles = {     // 모달창 디자인
//           overlay: {
//             backgroundColor: " rgba(0, 0, 0, 0.4)",
//             width: "100%",
//             height: "100vh",
//             zIndex: "10",
//             position: "fixed",
//             top: "0",
//             left: "0",
//           },
//           content: {
//             width: "52.7vw",
//             height: "95vh",
//             zIndex: "150",
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             borderRadius: "10px",
//             boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
//             backgroundColor: "white",
//             justifyContent: "center",
//             overflow: "auto",
//             padding: "0",
//           },
//         };
//         const closeModal = e => {
//           setIsopen(false)
//         }
//         const receiveScoute = e => {
//           setIsreceive(true)
//         }
//         const sendScoute = e => {
//           setIsreceive(false)
//         }
//         useEffect(()=>{
//           if(isreceive){
//                axios({
//                     method : 'get',
//                     url : `//localhost:8080/scout/receiver/${window.localStorage.getItem('userid')}`
//                })
//                .then(res => {
//                     setReceivelist(res.data)
//                })
//                .catch(err => console.log(err))
//           } else{
//                axios({
//                     method : 'get',
//                     url : `//localhost:8080/scout/sender/${window.localStorage.getItem('userid')}`
//                })
//                .then(res=>{
//                     setSenderlist(res.data)
//                })
//                .catch(err => console.log(err))
//           }
//         }, [isreceive])

//         const openScoutDetail = e => {
//           setOpenscoutDetail(true)
//         }

//     return (
//        <>
//             <Modal isOpen={isOpen} style={customModalStyles}>
//                <div className="Scoutbox">
//                     <div className="closebox">
//                          <button className="closebtn" onClick={closeModal}>X</button>
//                     </div>
//                     <div className="NoteTitle">
//                          <h1><AiOutlineMail size={50} color="black"/></h1>
//                     </div>
//                     <div className="scoutnavigate">
//                          <button className="scoutreceiver" onClick={receiveScoute}>받은 쪽지함</button>
//                          |
//                          <button className="scoutsender" onClick={sendScoute}>보낸 쪽지함</button>
//                          <button onClick={openScoutDetail}></button>
//                     </div>
//                     <hr/>
//                     <div className='scoutlistbox'>
//                          {
//                               isreceive ?
//                                 receivelist?.map(item => 
//                                    <>
//                                         <h3 className="scoutlisttitle" onClick={openScoutDetail}>item.title</h3>
//                                         <div className="scoutsenderid">
//                                              <div>item.sender</div>
//                                         </div>
//                                         <Modal isOpen = {openscoutDetail}></Modal>
//                                    </>
//                                    ) : 
//                                    sendlist?.map(item => 
//                                    <>
//                                         <h3 className="scoutlisttitle">item.title</h3>
//                                         <div className="scoutsenderid">
//                                              <div>item.receiver</div>
//                                         </div>
//                                    </>
//                               )
//                          }
//                     </div>
//                </div>
//             </Modal>
//             <ScoutDetailModal isOpen={openscoutDetail} closeModal={closeScoutDetail} />
//        </> 
// )}


import Modal from "react-modal";
import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import '../css/Scout.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ScoutDetailModal from "./ScoutDetailModal"; // ScoutDetailModal 추가

export default function Scout ({isOpen, setIsopen}) {
  const [isreceive, setIsreceive] = useState(true)
  const [receivelist, setReceivelist] = useState([])
  const [sendlist, setSenderlist] = useState([])
  const [openscoutDetail, setOpenscoutDetail] = useState(false)
  const navigate = useNavigate()
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

  const closeModal = () => {
    setIsopen(false)
  }

  const receiveScout = () => {
    setIsreceive(true)
  }

  const sendScout = () => {
    setIsreceive(false)
  }

  useEffect(() => {
    if (isreceive) {
      axios({
        method: 'get',
        url: `//localhost:8080/scout/receiver/${window.localStorage.getItem('userid')}`
      })
        .then(res => {
          setReceivelist(res.data)
        })
        .catch(err => console.log(err))
    } else {
      axios({
        method: 'get',
        url: `//localhost:8080/scout/sender/${window.localStorage.getItem('userid')}`
      })
        .then(res => {
          setSenderlist(res.data)
        })
        .catch(err => console.log(err))
    }
  }, [isreceive])

  const openScoutDetail = () => {
    setOpenscoutDetail(true)
  }

  const closeScoutDetail = () => {
    setOpenscoutDetail(false)
  }

  return (
    <>
      <Modal isOpen={isOpen} style={customModalStyles}>
        <div className="Scoutbox">
          <div className="closebox">
            <button className="closebtn" onClick={closeModal}>X</button>
          </div>
          <div className="NoteTitle">
            <h1><AiOutlineMail size={50} color="black" /></h1>
          </div>
          <div className="scoutnavigate">
            <button className="scoutreceiver" onClick={receiveScout}>받은 쪽지함</button>
            |
            <button className="scoutsender" onClick={sendScout}>보낸 쪽지함</button>
            <button onClick={openScoutDetail}></button>
          </div>
          <hr />
          <div className='scoutlistbox'>
            {
              isreceive ?
                receivelist?.map(item =>
                  <>
                    <h3 className="scoutlisttitle" onClick={openScoutDetail}>{item.title}</h3>
                    <div className="scoutsenderid">
                      <div>{item.sender}</div>
                    </div>
                  </>
                ) :
                sendlist?.map(item =>
                  <>
                    <h3 className="scoutlisttitle">{item.title}</h3>
                    <div className="scoutsenderid">
                      <div>{item.receiver}</div>
                    </div>
                  </>
                )
            }
          </div>
        </div>
      </Modal>
      {/* 추가 Modal 컴포넌트 렌더링 */}
      <ScoutDetailModal isOpen={openscoutDetail} closeModal={closeScoutDetail} />
    </>
  )
}

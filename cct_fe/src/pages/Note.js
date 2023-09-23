import React, { useEffect, useState } from "react";
import axios from 'axios'
import {AiOutlineMail} from 'react-icons/ai'
import '../css/Note.css'
import Modal from "react-modal";

export default function Note ({isOpen, setOpenpop, receiver}) {   

    const [noteTitle, setNoteTitle] = useState('')
    const [noteContents, setNoteContents] = useState('')
    const [countContents, setCountContents] = useState(0)
    const [isNotnull, setIsNotnull] = useState(false)
    const NoteInfo = {}
    const InputTitle = e => {
        setNoteTitle(e.target.value)
    }
    const InputContents = e => {
        const count = e.target.value.length
        setNoteContents(e.target.value)
        setCountContents(count)
    }
    const sendNote = e => {
        e.preventDefault()  
        console.log(receiver)
        NoteInfo['sender'] = window.localStorage.getItem('id')
        NoteInfo['receiver'] = receiver
        NoteInfo['title'] = noteTitle
        NoteInfo['message'] = noteContents
        console.log(NoteInfo)
        axios({
            method : 'post',
            headers : {
                'Authorization' : `Bearer ${window.localStorage.getItem('token')}`
            },
            url : '//3.37.93.210:8080/scout/save',
            data : NoteInfo
        }).then(res => {                //응답 받고 상태값들 초기화
            console.log(res.data.success)
            alert(res.data.message)
            setCountContents(0)
            setNoteTitle('')
            setNoteContents('')
            setOpenpop(false)
        }).catch(err => {
            console.log(err)
            setOpenpop(false)
        })
    }

    useEffect(()=>{
        if(noteTitle && noteContents){
            setIsNotnull(true)
        } else{
            setIsNotnull(false)
        }
    },[noteTitle, noteContents])

    const closeModal = e => {
        setOpenpop(false)
        setCountContents(0)
        setNoteContents('')
        setNoteTitle('')
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
          width: "40vw",
          height: "70vh",
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
        <Modal isOpen={isOpen} style={customModalStyles}>
            <div className="WriteNote">
                <div className="closebox">
                    <button className="closebtn" onClick={closeModal}>X</button>
                </div>
                <div className="NoteTitle">
                    <h1><AiOutlineMail size={50} color="black"/></h1>
                </div>
                <div className="WriteNoteboxtitle">
                    <h3 className="Notetitletext">제목</h3>
                    <input className="Notetitle" type="text" placeholder="제목을 입력해주세요." onChange={InputTitle}/>
                </div>
                <div className="WriteNoteboxContents">
                    <div className="Notedetails-titletext">
                        <div className="Notedetails-titletextbox">
                            <h3 className="Notedetails">내용</h3>
                        </div>
                        <div className="Notebottom">
                            <textarea className="Notedetails" cols={60} rows={20} onChange={InputContents} maxLength={200}></textarea>
                            <h4 className="countInfo" style={{
                                marginTop:0,
                                color : "gray"
                                }}>{`${countContents} / 200`}</h4>
                        </div>
                    </div>
                    <button className="sendNote" disabled={!isNotnull} onClick={sendNote}>보내기</button>
                </div>
            </div>
        </Modal>
    )
}
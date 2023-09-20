import React, { useEffect, useState } from "react";
import axios from 'axios'
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
            url : '//localhost:8080/scout',
            data : NoteInfo
        }).then(res => {
            console.log(res.data.success)
            alert(res.data.message)
            setOpenpop(false)
        }).catch(err => {
            console.log(err)
            setOpenpop(false)
        })
    }

    useEffect(()=>{
        if(noteTitle && noteContents){
            setIsNotnull(true)
        }
    },[noteTitle, noteContents])

    return(
        <Modal isOpen={isOpen}>
            <div className="WriteNote">
                <div className="NoteTitle">
                    <h1>쪽지</h1>
                </div>
                <div className="WriteNoteboxtitle">
                    <h3 className="Notetitletext">제목</h3>
                    <input className="Notetitle" type="text" placeholder="제목을 입력해주세요." onChange={InputTitle}/>
                </div>
                <div className="WriteNoteboxContents">
                    <div className="Notedetails-titletext">
                    <h3 className="Notedetails">내용</h3>
                    <h3 className="countInfo">글자수 제한 : {`${countContents} / 200`}</h3>
                    </div>
                    <textarea className="Notedetails" cols={60} rows={20} onChange={InputContents} maxLength={200}></textarea>
                    <button className="sendNote" disabled={!isNotnull} onClick={sendNote}>보내기</button>
                </div>
            </div>
        </Modal>
    )
}
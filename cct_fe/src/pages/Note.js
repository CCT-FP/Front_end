import React from "react";
import {useLocation} from 'react-router-dom';
import '../css/Note.css'

export default function Note () {
    const location = useLocation()
    const receiverId = location.state.receiverId

    return(
        <div className="WriteNote">
            <input className="Notetitle" type="text" placeholder="제목을 입력해주세요."/>
            <textarea className="Notedetails" cols={30} rows={40}></textarea>
        </div>
    )
}
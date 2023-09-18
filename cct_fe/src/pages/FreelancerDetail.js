import React, {useEffect, useId, useState} from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Note from "./Note";
import '../css/FreelancerDetail.css'

export default function FreelancerDetail(){
    const [isSameid, setIsSameid] = useState(false)
    const [openpop, setOpenpop] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const userId = location.state.userid
    const id = window.localStorage.getItem('id')
    useEffect(() => {
        axios({
            method : 'get',
            url : `//localhost:8080/resume/${userId}`,
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        if(userId === id){
            setIsSameid(true)
        }
    }, [])

   

    return(
        <div className="Freelancerdetail">
            <button className="MovetoNotebtn" onClick={() => {
                setOpenpop(true)
            }}></button>
            <Note isOpen = {openpop} receiver={userId} setOpenpop={setOpenpop}></Note>
        </div>
    )
}

import React, {useEffect,    useState} from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Note from "./Note";
import '../css/FreelancerDetail.css'

export default function FreelancerDetail(){
    const [isSameid, setIsSameid] = useState(false)
    const [openpop, setOpenpop] = useState(false)
    const location = useLocation()      // 받아주려면 필수
    const navigate = useNavigate()
    const userId = location.state.userid    // userid 받기
    const id = window.localStorage.getItem('id')    // 로그인된 id 받기
    useEffect(() => {   
        axios({
            method : 'get',
            url : `//localhost:8080/resume/${userId}`,
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        if(userId === id){      // 로그인된 id와 같다면, 쪽지 생성 안하기
            setIsSameid(true)
        }
    }, [])

   

    return(
        <div className="Freelancerdetail top_margin">
            <button className="MovetoNotebtn" onClick={() => {
                setOpenpop(true)
            }}></button>
            <Note isOpen = {openpop} receiver={userId} setOpenpop={setOpenpop}></Note>
        </div>
    )
}

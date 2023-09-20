import React, {useEffect, useState} from "react";
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
        .then(res => {
            
        })
        .catch(err => console.log(err))
        if(userId === id){      // 로그인된 id와 같다면, 쪽지 생성 안하기
            setIsSameid(true)
        }
    }, [])

   

    return(
        <div className="freelancerDetail">
            <h2 className="introducefreelancer">{`안녕하세요. ${1}`}</h2>
        </div>

        // <div className="Freelancerdetail">
        //     {
        //         isSameid ?  <>
        //         <div>
        //             <button className="MovetoNotebtn" onClick={() => {
        //                 setOpenpop(true)
        //             }}></button>
        //         </div>
        //         </> 
        //         :
        //         <>
        //             <div></div>
        //        </>
        //     }
        //     <Note isOpen = {openpop} receiver={userId} setOpenpop={setOpenpop}></Note>
        //</div>
    )
}

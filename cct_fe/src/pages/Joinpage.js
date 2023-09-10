import React, { useState } from "react";
import '../css/Joinpage.css'
import {BsFillBuildingFill} from 'react-icons/bs'
import {MdOutlineEmojiPeople} from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import Agreepage from "./Agreepage";

export default function Joinpage () {
    const [selectbox, setSelectbox] = useState(null);
    const navigate = useNavigate()

    const MovetoAgree = e => {
        setSelectbox(e.target.title)
        console.log(e.target.title)
    }

    return(
        <>
        {
            selectbox ? <Agreepage/> :
            <div className="joinbox">
            <div className="joinbox-titlebox">
                <h1 className="joinbox-titlebox__title">회원가입</h1>
            </div>
            <div className="joinbox-countbox">
                <h3 className="joinbox-countbox__countpage">1 / 3</h3>
            </div>
            <div className="joinbox-selectbox">
                <div className="joinbox-companybox" title="company" onClick={MovetoAgree}>
                    <BsFillBuildingFill size={130}/>
                    {/*기업 이모지 들어갈 곳*/}
                    <h2 className="joinbox-companybox__companytext">기업</h2>
                </div>
                <div className="joinbox-freelancerbox" title="freelancer" onClick={MovetoAgree}>
                    <MdOutlineEmojiPeople size={130}/>
                    {/*프리랜서이모지 */}
                    <h2 className="joinbox-freelancerbox__freelancertext">프리랜서</h2>
                </div>
            </div>   
        </div>
        } 
        </>    
       
    )
}
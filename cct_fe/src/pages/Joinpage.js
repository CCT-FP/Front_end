import React from "react";
import '../css/Joinpage.css'
import { useNavigate } from "react-router-dom";

export default function Joinpage () {
    const navigate = useNavigate()

    const MovetoAgree = e => {
        const selected = e.target.title
        navigate('/joinpage/agreepage', { state: { selected : selected} })
    }

    return(
        <div className="joinbox">
            <div className="joinbox-titlebox">
                <h1 className="joinbox-titlebox__title">회원가입</h1>
            </div>
            <div className="joinbox-countbox">
                <h3 className="joinbox-countbox__countpage">1 / 3</h3>
            </div>
            <div className="joinbox-selectbox">
                <div className="joinbox-companybox" title='company' onClick={MovetoAgree}>
                    <div className="companyimg" title="company"></div>
                    <h2 className="joinbox-companybox__companytext" title="company">기업</h2>
                </div>
                <div className="joinbox-freelancerbox" title="" onClick={MovetoAgree}>
                    <div className="freelancerimg" title=""></div>
                    <h2 className="joinbox-freelancerbox__freelancertext" title="">프리랜서</h2>
                </div>
            </div>   
        </div>
    )
}
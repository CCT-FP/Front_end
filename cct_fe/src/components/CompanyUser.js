import React, { useEffect } from "react";
import '../css/CompanyUser.css'

export default function CompanyUser(){
    useEffect(()=>{
        console.log('컴퍼니')
    },[])
    return(
        <div className="CompanyUser">
            <div className="CompanyUserinfobox">
                <div className="CompanyUserinfobox-titlebox">
                    <h1 className="CompanyUserinfobox-titlebox__title">기본정보</h1>
                </div>
                <div className="joinbox-countbox">
                    <h3 className="joinbox-countbox__countpage">3 / 3</h3>
                </div>
                <form className="CompanyUserinfobox-joinform">
                    <div className="joinform-joinbody">
                        <div className="joinform-joinbody__joinbox">
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
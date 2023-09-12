import React from "react";

export default function Loginpage() {
    return (
        <div className="Loginpage">
             <div className="Loginpage-loginbox">
                <h1 className="Loginpage-loginbox__title">login</h1>
            </div>
            <div className="Loginpage-loginform">
                <div className="Loginpage-loginform__logotitle">Frenee</div>
                <div className="Loginpage-loginform__box">
                    <h3 className="loginpage-loginform__idlabel">아이디</h3>
                    <input className="Loginpage-loginfrom__inputid"/>
                </div>
            </div>
        </div>
    )
}
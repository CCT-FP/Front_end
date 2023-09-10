import React, { useEffect, useState } from "react";
import '../css/agreepage.css'
import { useLocation, useNavigate } from "react-router-dom";
import checked from '../img/checked.png'
import nochecked from '../img/nochecked.png'

export default function Agreepage(){

    const [isAllChecked, setIsAllChecked] = useState(nochecked)
    const [isChecked1, setIsChecked1] = useState(nochecked)
    const [isChecked2, setIsChecked2] = useState(nochecked)
    const [isvision, setIsVision] = useState(false)
    const [background, setBackgound] = useState('#B4B4B4')

    const location = useLocation();
    const navigate = useNavigate()

    const onAllcheck = e => {
        if(isAllChecked === nochecked){
            console.log(1)
            setIsAllChecked(checked)
            setIsChecked1(checked)
            setIsChecked2(checked)
        } else{
            setIsAllChecked(nochecked)
            setIsChecked1(nochecked)
            setIsChecked2(nochecked)
        }
    }
    const onCheck1 = e => {
        if(isChecked1 === nochecked){
            setIsChecked1(checked)
        } else{
            setIsChecked1(nochecked)
        }
    }
    const onCheck2 = e => {
       if(isChecked2 === nochecked){
        setIsChecked2(checked)
       } else{
        setIsChecked2(nochecked)
       }
    }

    useEffect(()=>{
        if(isChecked1 === checked && isChecked2 === checked){
            setIsVision(true)
            setBackgound('#077912')
            setIsAllChecked(checked)
        }else{
            setIsVision(false)
            setBackgound('#B4B4B4')
            setIsAllChecked(nochecked)
        }
    }, [isChecked1, isChecked2])

    const MovetoUserinfo = e => {
        navigate('/joinpage/userinfo', {state : {selected : location.state.selected}})
    }

    return(
        <div className="agreepage">
            <div className="joinbox-titlebox">
                <h1 className="joinbox-titlebox__title">약관동의</h1>
            </div>
            <div className="joinbox-countbox">
                <h3 className="joinbox-countbox__countpage">2 / 3</h3>
            </div>
            <div>
                <img src={isAllChecked} id="checkallagree" className="agreebox-allagreecheckbox" onClick={onAllcheck}/>
                <label htmlFor="checkallagree">전체동의</label>
            </div>
            <div>
                <img src={isChecked1} onClick={onCheck1}/>
            </div>
            <div>
                <img src={isChecked2} onClick={onCheck2}/>
            </div>
            <button style={
                {backgroundColor : background}
            }
            disabled={!isvision}
            onClick={MovetoUserinfo}>다음 {'>'}</button>
        </div>
    )
}

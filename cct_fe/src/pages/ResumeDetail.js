import React, {useEffect, useState} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function ResumeDetail(){
    const [idSameid, setIsSameid] = useState(false)
    const location = useLocation()
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
        <>
            hi
        </>
    )
}

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CompanyUser from "../components/CompanyUser";
import FreelancerUser from "../components/FreelancerUser"

export default function Userinfo(){
    const location = useLocation();
    const selected = location.state.selected;
    window.localStorage.setItem("role", selected);
    
    useEffect(()=>{
        console.log(selected)
    },[])
    return(
        <>
            {selected ? <CompanyUser/> : <FreelancerUser/>}
        </>
    )
}
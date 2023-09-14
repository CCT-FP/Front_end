import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CompanyUser from "../components/CompanyUser";
import FreelancerUser from "../components/FreelancerUser"

export default function Userinfo(){
    const location = useLocation()
    const selected = location.state.selected
    useEffect(()=>{
        console.log(selected)
    },[])
    return(
        <>
            {selected ? <CompanyUser/> : <FreelancerUser/>}
        </>
    )
}
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CompanyUser from "../components/CompanyUser";
import FreelancerUser from "../components/FreelancerUser"

export default function Userinfo(){
    const location = useLocation()
    const [isselected, setIsSelected] = useState(null)

    useEffect(()=>{
        const selected = location.state.selected
        if(selected === 'company'){
            setIsSelected(true)
        } else{
            setIsSelected(false)
        }
    })
    

    return(
        <>
            {isselected ? <CompanyUser/> : <FreelancerUser/>}
        </>
    )
}
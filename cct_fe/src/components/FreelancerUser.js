import React, { useEffect } from "react";
import '../css/Freelancerpage.css'

export default function FreelancerUser (){
   useEffect(()=>{
        console.log('프리랜서') 
   },[]) 
   return(
      <>
      <h1 className="i">프리랜서임!</h1>

      </>
   )

}
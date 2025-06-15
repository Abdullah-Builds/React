import React from "react";
import { useParams } from "react-router";

export default function User(){
    const {userid} = useParams() 
    return(
        <div className="text-center bg-amber-50 p-4 m-4" >User : {userid}</div>
    )
}
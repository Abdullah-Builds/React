import React,{useContext} from "react";
import UserContext from "../context/UserContext";

export default function Profile(){
    const {user} = useContext(UserContext)

    if( user === " " ) return <div className="font-black text-5xl flex justify-center items-center pt-10">Please Sign In</div>

    else return (
        <div className="font-black text-5xl flex justify-center items-center pt-10">
        Welcome {user.username}
        </div>
    )
}
import React,{useState,useContext} from "react";
import UserContext from "../context/UserContext";

export default function Login(){
    const [username,setusername] = useState(" ")
    const [password,setpassword] = useState(" ")
    const {setuser} = useContext(UserContext)

    const handleSubmit = (e)=>{
       e.preventDefault()
       setuser({ username, password });
    }

   return (
  <div className="flex justify-center items-center pl-7 pt-7">
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        className="border px-2 py-1"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        className="border px-2 py-1"
      />
      <button onClick={handleSubmit} className="px-4 py-1 bg-black text-white rounded">
        Submit
      </button>
    </div>
  </div>
);

}
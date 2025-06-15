import React, { useState, useRef } from "react";


function Comp() {
     const max = 100;
     const min = 1;

     const [ToGuess] = useState(Math.floor(Math.random() *(max - min + 1)) + min);
     const [msg,setmsg] = useState("")
     const inputRef = useRef();

     function solve(){
     
      if(parseInt(inputRef.current.value) === ToGuess){
       setmsg("You guessed the right Number")
      }
      else{
       setmsg("Wrong Guess .Something Invalid Occured")
      }
 };

  return (
      <div className="  mt-30 p-1 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
          <div className="h-[300px] bg-black sm:p-10 p-6 rounded-xl">
            <div className="">
              <h5 className="text-xl font-bold text-gray-200 mb-7">Guess the Number</h5>
              <label className="px-4 py-8 text-white">
                Enter the Number to Guess
              </label>
              <input ref={inputRef} type = "number" className="bg-white text-black rounded-4xl p-2 mt-3 mr-4"></input>
              <button onClick={solve} className="px-4 py-4 bg-white text-black rounded-2xl ">Submit</button>
              <p className="text-white">{msg}</p>
            </div>
          </div>
        </div>
    
  );
}

export default Comp;

import { useState } from "react";


function Name( handleformSubmit){

    const[InputName, setInputName] = useState('')
    



    // THIS IS USED TO OPEN CHAT WINDOW
    function handleformSubmit(e){
        e.preventDefault()
        const trimmer = InputName.trim();
        if(!trimmer) return


    }

    return(<>
    {/* ENTER YOUR UNAME TO START CHATTING */}
    <div className="min-h-screen flex items-center justify-center "> 
      <div className="border-0 rounded-2xl flex flex-col p-10 gap-2 shadow-2xl">
        <div className="font-bold text-2xl ">
          <h1>Enter your name</h1>
          </div>
        <div className="font-light text-gray-500 ">
          <span className="">Enter your name start chatting. This will be to identify</span>
          </div>
        <div className="mt-3">
        <form onSubmit={handleformSubmit} className="flex flex-col gap-2">
          <input className=" border-2 border-gray-400  p-2 rounded-xl shadow-2xl outline-green-600 hover:border-green-600  "
          
          value={InputName}
          onChange={(e)=>setInputName(e.target.value)}
          placeholder="full name"
          
          />
          <button
          type="submit"
          className="ml-60 block border-0 rounded-full shadow-2xl p-1.5 bg-green-700 left-80 text-white hover:bg-green-800 ">Continue</button>
        </form>
        </div>
      </div>
    </div>





    </>)
};

export default Name;
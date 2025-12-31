


function Window(){


    return(<>
    <div className=" h-full max-w-2xl overflow-hidden flex flex-col   bg-gray-300">
         {/* top HEADER */}
        <div className="w-auto shadow border rounded-tr-lg rounder-tl-lg flex justify-between p-3.5 bg-white ">
            <div className="flex gap-2 items-center">
            <div className="bg-green-900 text-3xl w-15 h-15 flex justify-center items-center font-semibold text-white border rounded-full">R</div>
            <div>
                <div className="font-semibold text-xl">RealTime Chatting Group</div>
                <div className="text-sm font-light text-gray-400 italic"><span>USER is typing....</span></div>
            </div>
            </div>
            <div className="flex items-center font-bold  gap-1"><span className="font-semibold text-gray-400">Signed in as</span>User</div>
            

        </div>
        {/* chat Window */}
        <div className="h-11/12 flex-1 overflow-y-auto space-y-3 flex flex-col bg-zinc-500">
            


        </div>
        {/* MESSAGE SENDER */}
        <div>

        </div>


    </div>
    
    </>)
}

export default Window;
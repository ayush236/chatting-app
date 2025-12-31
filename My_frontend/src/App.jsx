import { useState } from "react";

function App() {

      const[InputName, setInputName] = useState('');
      const[userName, setUserName] = useState('');
      const[showNamePopup, setShowNamePopup] = useState(true);
      const[Messages, setMessages ] = useState([]);
      const[text, settext]= useState([])
  


//THIS IS FUNCTION IS USED FOR TIME STAMP FOR MESSAGE
function formatTime(ts){
  const d = new Date(ts);
  const hh = String(d.getHours()).padStart(2,'0')
  const mm = String(d.getMinutes()).padStart(2,'0')
  return `${hh}:${mm}`
}

  
// THIS IS USED TO OPEN CHAT WINDOW
    function handleformSubmit(e){
        e.preventDefault()
        const trimmer = InputName.trim();
        if(!trimmer) return
        setUserName(trimmer);
        setShowNamePopup(false);

    }

    // MESSAGE SENDING 
    function sendMessage(){
      const t = text.trim();
      if(!t) return ;

      //USER MESSAGE
      const msg ={
        id: Date.now(),
        sender:userName,
        text: t,
        ts: Date.now()
      };
      setMessages((m)=>[...m, msg]);
      settext('');
    }

    // handling enter key to send message 
    function handlekeyDown(e){
      if(e.key == 'Enter' && e.ShiftKey){
        e.preventDefault();
        sendMessage();
      }
    }



  return (
    <>
        <>
{/* NAME POPUP */}
{showNamePopup && (
  <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-100 to-green-300">
    <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
      <h1 className="text-2xl font-bold text-gray-800">Enter your name</h1>
      <p className="text-sm text-gray-500 mt-1">
        This will be used to identify you in the chat
      </p>

      <form onSubmit={handleformSubmit} className="mt-6 space-y-4">
        <input
          value={InputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Full name"
          className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-xl font-medium transition"
        >
          Continue
        </button>
      </form>
    </div>
  </div>
)}

{/* CHAT WINDOW */}
{!showNamePopup && (
  <div className="min-h-screen flex items-center justify-center bg-zinc-200 p-4">
    <div className="w-full max-w-3xl h-[90vh] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">

      {/* HEADER */}
      <div className="flex items-center justify-between p-4 bg-green-700 text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-900 rounded-full flex items-center justify-center font-bold">
            {userName[0]}
          </div>
          <div>
            <div className="font-semibold">Realtime Group Chat</div>
            <div className="text-xs opacity-80 italic">Users are typing…</div>
          </div>
        </div>
        <div className="text-sm">
          Signed in as <span className="font-semibold">{userName}</span>
        </div>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-zinc-100">
        {Messages.map((m) => {
          const mine = m.sender === userName;
          return (
            <div key={m.id} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[75%] p-3 rounded-2xl shadow 
                ${mine ? "bg-green-200" : "bg-white"}`}
              >
                <div className="text-sm">{m.text}</div>
                <div className="flex justify-between mt-1 text-[11px] text-gray-500">
                  <span className="font-semibold">{m.sender}</span>
                  <span>{formatTime(m.ts)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* INPUT */}
      <div className="p-3 bg-white border-t flex gap-3">
        <textarea
          value={text}
          onKeyDown={handlekeyDown}
          onChange={(m) => settext(m.target.value)}
          placeholder="Type a message..."
          rows={1}
          className="flex-1 resize-none px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-green-500"
        />
        <button 
        onClick={sendMessage}
        className="bg-green-600 hover:bg-green-700 text-white px-6 rounded-xl font-medium">
          Send
        </button>
      </div>

    </div>
  </div>
)}
</>


    </>
  );
}

export default App;

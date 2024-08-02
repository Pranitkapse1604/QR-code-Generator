import React, { useState } from 'react'

function App() {
  let [inputValue,setinputValue]=useState("");
  let [imgUrl,setimgUrl]=useState("");

  const updateValue=(e)=>{
    setinputValue(e.target.value);
  }

  const generateQR=async()=>{
    let url=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;

    let response=await fetch(url);
    

    console.log(response.url);
    setimgUrl(response.url);
  }
 


  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-900">

      <div className="max-w-[400px] w-[90%] bg-white p-4 rounded-md">
        <h2 className="text-center text-2xl my-2 font-bold">QR Code Generator</h2>
        <div>
          <input onChange={updateValue} className="border-[1px] border-black w-full py-1 px-2 rounded-sm my-2" type="text" placeholder='Enter Url or Name'/>
        </div>
        <div className="w-full flex items-center justify-center my-4"><img src={imgUrl} alt="" /></div>
        <div>
          <input onClick={generateQR} className="text-white font-semibold w-full py-1 px-2 rounded-sm my-2 bg-blue-600 cursor-pointer" type="submit" value="Generate"/>
        </div>
      </div>
    </div>
  )
}

export default App
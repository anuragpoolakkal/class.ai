"use client";
import { useState } from "react";
import { FiMic, FiMicOff, FiRefreshCcw } from "react-icons/fi";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export default function Class() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const [isMute, setIsMute] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center w-full h-[100vh] bg-white justify-evenly">
      <div className="flex w-[80vw] h-[80vh] p-5 bg-white rounded-xl shadow-xl border-2">
        <div className="h-full w-full bg-black rounded-lg">

        </div>
        <div className="ml-5">
          <h1 className="font-bold text-4xl mb-5">Sample Presentation</h1>  
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, error. Tempore incidunt aut ea consectetur eius voluptatibus eum necessitatibus, recusandae, quae enim beatae veritatis sequi doloribus culpa ex unde voluptate!
          </p>
        </div>
      </div>
      {/* Controls */}
      <div className="flex border-2 rounded-lg p-2">
        <button className="btn btn-primary btn-square mr-2 text-xl" onClick={()=>{
          setIsMute(!isMute);
        }}>{isMute ? <FiMicOff/> : <FiMic/>}</button>
        <button className="btn btn-primary btn-square text-xl" onClick={()=>window.location.reload()}><FiRefreshCcw /></button>
      </div>
    </div>
  )
}

"use client";
import { useEffect, useState } from "react";
import { FiCheck, FiMic, FiMicOff, FiRefreshCcw } from "react-icons/fi";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export default function Class() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript.split(" ").length > 7) {
      console.log(transcript);
      resetTranscript();
    }
  }, [transcript])

  return (
    <div className="flex flex-col items-center w-full h-[100vh] bg-white justify-evenly">
      <div className="relative flex w-[80vw] h-[80vh] p-5 bg-white rounded-xl shadow-xl border-2">  
        <div className="h-full w-full bg-black rounded-lg">

        </div>
        <div className="ml-5">
          <h1 className="font-bold text-4xl mb-5">Sample Presentation</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, error. Tempore incidunt aut ea consectetur eius voluptatibus eum necessitatibus, recusandae, quae enim beatae veritatis sequi doloribus culpa ex unde voluptate!
          </p>
        </div>
        <div className="flex justify-center items-center w-full absolute bottom-2">
          <p className="rounded-md p-2 bg-[#00000080] text-white">{transcript}</p>
        </div>
      </div>
      {/* Controls */}
      <div className="flex">
        <div className="flex border-2 rounded-lg p-2">
          <button className={"btn btn-primary btn-square mr-2 text-xl " + (!listening ? "btn-error" : "")} onClick={() => {
            if (listening) {
              SpeechRecognition.stopListening();
            }
            else {
              SpeechRecognition.startListening({ continuous: true });
            }
          }}>{!listening ? <FiMicOff /> : <FiMic />}</button>
          <button className="btn btn-primary btn-square text-xl mr-2" onClick={() => window.location.reload()}><FiRefreshCcw /></button>
          <button className="btn btn-primary text-xl" onClick={() => window.location.reload()}><FiCheck />Finish</button>
        </div>
      </div>
    </div>
  )
}

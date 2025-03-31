import React, { useState } from "react";

const AudioPlayer = () => {
  const [audioSrc, setAudioSrc] = useState(null);
  const [file, setFile] = useState(null);

  const handleAudioUpload = (event) => {
    const audio = event.target.files[0];
    console.log(audio);

    if (audio) {
      const objectURL = URL.createObjectURL(audio);
      setAudioSrc(objectURL);
      setFile((file) => audio);
    }
  };

  return (
    <>
      <div className="flex gap-2">
        <label
          htmlFor="audioFile"
          className="bg-rose-600 p-1 rounded-md border-1 hover:bg-rose-800 hover:cursor-pointer"
        >
          Select Sound
        </label>
        <input
          className=""
          type="file"
          id="audioFile"
          name="audio"
          accept="audio/*"
          onChange={handleAudioUpload}
        />
      </div>
      {audioSrc && (
        <audio controls>
          <source src={audioSrc} type="audio/mpeg" />
        </audio>
      )}
    </>
  );
};

export default AudioPlayer;

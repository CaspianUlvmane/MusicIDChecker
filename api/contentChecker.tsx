import React, { useState } from "react";

const ContentChecker = () => {
  const [file, setFile] = useState(file);
  const [status, setStatus] = useState("");
  const [videoId, setVideoId] = useState(null);
  const [claims, setClaims] = useState([]);

  const uploadToYouTube = async () => {
    setStatus("Checking Content ID...");
    setFile(file);
    try {
      // Use Google OAuth to get the user's access token (handled separately)
      //   const accessToken = await getGoogleAccessToken();
      const accessToken = "AIzaSyCpwk-E4iNE9cklY3MMKbeTUL-98zivgo8";
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        "https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            snippet: {
              title: file.name,
              description: "Uploaded via Content ID Checker",
              categoryId: "10", // Music category
            },
            status: {
              privacyStatus: "private",
            },
          }),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        setVideoId(responseData.id);
        setStatus("Uploaded! Checking for Content ID claims...");
        checkContentID(responseData.id, accessToken);
      } else {
        setStatus("Upload failed. Check console.");
        console.error(responseData);
      }
    } catch (error) {
      console.error(error);
      setStatus("Error uploading video.");
    }
  };

  const checkContentID = async (videoId, accessToken) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=contentDetails,contentOwnerDetails`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (data.items.length > 0) {
        setClaims(data.items[0].contentDetails?.contentIdClaims || []);
      } else {
        setClaims([]);
      }
      setStatus("Content ID check complete.");
    } catch (error) {
      console.error(error);
      setStatus("Error checking Content ID.");
    }
  };

  return (
    <div>
      <h2>YouTube Content ID Checker</h2>
      <button
        className="bg-rose-600 p-1 rounded-md border-1 hover:bg-rose-800 hover:cursor-pointer"
        onClick={uploadToYouTube}
      >
        Check
      </button>
      <p>{status}</p>
      {videoId && <p>Uploaded Video ID: {videoId}</p>}
      {claims.length > 0 ? (
        <div>
          <h3>Content ID Claims:</h3>
          <ul>
            {claims.map((claim, index) => (
              <li key={index}>
                {claim.policy} - {claim.owner}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No Content ID issues detected.</p>
      )}
    </div>
  );
};

export default ContentChecker;

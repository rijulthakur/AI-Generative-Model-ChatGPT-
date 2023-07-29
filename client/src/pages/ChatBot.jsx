import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Prompt from "../components/Prompt";
import "./css/ChatBot.css";

const ChatBot = () => {
  const [text, settext] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/openai/chatbot", { text });
      console.log(data);
      setResponse(data);
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <>
      {!loggedIn ? (
        <Prompt />
      ) : (
        <div className="bot-container">
          {error !== "" && (
            <div className="error-parent">
              <div className="error-content">{error}</div>
            </div>
          )}

          <form className="bot-form" onSubmit={handleSubmit}>
            <textarea
              placeholder="Start chatting....."
              required
              rows="4"
              value={text}
              onChange={(e) => {
                settext(e.target.value);
              }}
            />

            <button type="submit">Chat</button>
          </form>

          <div className="bot-response">
            {response ? response : "The response will be displayed here."}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;

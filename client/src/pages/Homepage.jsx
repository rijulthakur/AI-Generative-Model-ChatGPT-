import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Homepage.css";
import Prompt from "../components/Prompt";

const Homepage = () => {
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));
  return (
    <>
      {!loggedIn ? (
        <Prompt />
      ) : (
        <div className="card-container">
          <div className="card">
            <h4 className="card-title">Text Generator</h4>
            <div className="card-content" onClick={() => navigate("/summary")}>
              <i className="fa-solid fa-comment"></i>
              <div className="card-desc">
                
                <h6>Summarize long text into short sentences</h6>
              </div>
            </div>
          </div>
          <div className="card">
            <h4 className="card-title">Paragraph Generator</h4>
            <div
              className="card-content"
              onClick={() => navigate("/paragraph")}
            >
              <i className="fa-solid fa-message"></i>
              <div className="card-desc">
                
                <h6>Generate Paragraph with words</h6>
              </div>
            </div>
          </div>
          <div className="card">
            <h4 className="card-title">AI ChatBot</h4>
            <div className="card-content" onClick={() => navigate("/chatbot")}>
              <i className="fa-solid fa-code"></i>
              <div className="card-desc">
                
                <h6>Chat With AI Chatbot</h6>
              </div>
            </div>
          </div>
          <div className="card">
            <h4 className="card-title">Javascript Converter</h4>
            <div
              className="card-content"
              onClick={() => navigate("/js-converter")}
            >
              <i className="fa-solid fa-comment-dots"></i>
              <div className="card-desc">
                
                <h6>Translate English to JavaScript code</h6>
              </div>
            </div>
          </div>
          <div className="card">
            <h4 className="card-title">Science Fictious Images</h4>
            <div
              className="card-content"
              onClick={() => navigate("/scifi-image")}
            >
              <i className="fa-solid fa-camera"></i>
              <div className="card-desc">
                
                <h6>Generate Scifi images</h6>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;

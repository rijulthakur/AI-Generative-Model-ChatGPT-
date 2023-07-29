import React, { useState } from "react";
import axios from "axios";
import Prompt from "../components/Prompt";
import "./css/Summary.css";

const Summary = () => {
  const [text, settext] = useState("");
  const [summary, setSummary] = useState("");
  const [error, setError] = useState("");
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/openai/summary", { text });
      console.log(data);
      setSummary(data);
    } catch (err) {
      console.log(err);
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
        <div className="summary-container">
          {error !== "" && (
            <div className="error-parent">
              <div className="error-content">{error}</div>
            </div>
          )}
          <form className="summary-form" onSubmit={handleSubmit}>
            <h3>Enter your text for summarization</h3>

            <textarea
              required
              value={text}
              onChange={(e) => {
                settext(e.target.value);
              }}
            />

            <button type="submit">Generate</button>
          </form>

          <div className="summary-solution">
            <p>
              {summary
                ? summary
                : "Just wait for a few minutes, the response will be displayed here."}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Summary;


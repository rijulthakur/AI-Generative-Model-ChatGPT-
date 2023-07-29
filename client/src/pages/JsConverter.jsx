import React, { useState } from "react";
import axios from "axios";
import Prompt from "../components/Prompt";
import "./css/JsConverter.css";

const JsConverter = () => {
  const [text, settext] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/openai/js-converter", {
        text,
      });
      console.log(data);
      setCode(data);
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
        <div className="converter-container">
          {error !== "" && (
            <div className="error-parent">
              <div className="error-content">{error}</div>
            </div>
          )}
          <form className="converter-form" onSubmit={handleSubmit}>
            <h3>Text To JavaScript</h3>

            <textarea
              required
              value={text}
              onChange={(e) => {
                settext(e.target.value);
              }}
            />

            <button type="submit">Convert</button>
          </form>

          <div className="resultant-code">
            {code ? (
              <pre>
                <code className="code-content">{code}</code>
              </pre>
            ) : (
              <h5>
                Your text will be converted into a JavaScript Code.
              </h5>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default JsConverter;

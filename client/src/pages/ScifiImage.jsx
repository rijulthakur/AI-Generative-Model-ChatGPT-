import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Prompt from "../components/Prompt";
import "./css/ScifiImage.css";

const ScifiImage = () => {
  const [text, settext] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/openai/scifi-image", { text });
      console.log(data);
      setImage(data);
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
        <div className="sci-container">
          {error !== "" && (
            <div className="error-parent">
              <div className="error-content">{error}</div>
            </div>
          )}
          <form className="sci-form" onSubmit={handleSubmit}>
            <h3>Sci-fi Image</h3>
            <textarea
              placeholder="Add your text"
              type="text"
              required
              rows="5"
              value={text}
              onChange={(e) => {
                settext(e.target.value);
              }}
            />

            <button type="submit">Submit</button>
          </form>

          <div className="sci-img">
            {image ? (
              <img src={image} alt="Sci-Fi Image" />
            ) : (
              <h5>
                It will produce a Sci-Fi Image of any normal creature or thing
              </h5>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ScifiImage;

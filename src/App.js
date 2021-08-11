import React, { useState } from "react";
import "./styles.css";

const database = {
  kashmiri: [
    { name: "rista", rating: "4/5" },
    { name: "tabakhmaaz", rating: "5/5" }
  ],
  italian: [
    { name: "pasta", rating: "4/5" },
    { name: "pizza", rating: "4.5/5" }
  ],
  indian: [
    { name: "vada pav", rating: "4/5" },
    { name: "pani puri", rating: "4.5/5" }
  ]
};

export default function App() {
  const [autoFoodGenre, setFoodGenre] = useState("kashmiri");

  function foodGenreClickHandler(item) {
    setFoodGenre(item);
  }

  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: "lightgray",
          fontSize: "2em",
          padding: "1.5rem",
          borderRadius: "0.5rem"
        }}
      >
        🥧goodfood
      </h1>

      <p style={{ fontSize: "smaller" }}>
        checkout my favourite foods. select a genre to get started.
      </p>

      <div>
        {Object.keys(database).map((item) => (
          <button
            style={{
              borderRadius: "0.3rem ",
              padding: "0.3rem",
              margin: "0.7rem",
              paddingLeft: "0.5rem",
              paddingRight: "0.3rem",
              cursor: "pointer",
              backgroundColor: "burlywood",
              border: "1.3px solid black"
            }}
            onClick={() => foodGenreClickHandler(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <hr />

      <div style={{ textAlign: "center" }}>
        <ul
          style={{
            paddingInlineStart: "0"
          }}
        >
          {database[autoFoodGenre].map((foodItem) => (
            <li
              style={{
                margin: " 1rem auto",
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "50%",
                // margin : "auto",
                borderRadius: "0.5rem"
              }}
              key={foodItem.name}
            >
              <div style={{ fontSize: "larger" }}> {foodItem.name} </div>
              <div style={{ fontSize: "smaller" }}> {foodItem.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

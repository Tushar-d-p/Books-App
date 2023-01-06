import React, { useState } from "react";
import "./styles.css";

var Javascript = {
  first: {
    name: "Eloquent Javascript",
    rating: "4.5/5"
  },
  Second: {
    name: "Javascript in depth",
    rating: "4/5"
  }
};

var SpringBoot = {
  first: {
    name: "Spring in Action",
    rating: "4/5"
  },
  Second: {
    name: "Spring in learning",
    rating: "3.5/5"
  }
};

var Nodejs = {
  first: {
    name: "Node in Action",
    rating: "4.5/5"
  },
  Second: {
    name: "NodeJs in Depth",
    rating: "4/5"
  }
};

export default function App() {
  var [book, setBook] = useState([]);

  function handleClick(event) {
    var input = event.target.value;

    if ("Javascript" === input) {
      book = Object.entries(Javascript);

      setBook(book);

      console.log(book);
    } else if ("SpringBoot" === input) {
      book = Object.entries(SpringBoot);

      setBook(book);

      console.log(book);
    } else {
      book = Object.entries(Nodejs);

      setBook(book);

      console.log(book);
    }
  }
  return (
    <div className="App">
      <h1>Good Books</h1>
      <h2>The most recomended programming books</h2>
      <button
        style={{ margin: "1rem" }}
        value="Javascript"
        onClick={handleClick}
      >
        Javascript
      </button>
      <button
        style={{ margin: "1rem" }}
        value="SpringBoot"
        onClick={handleClick}
      >
        Spring Boot
      </button>
      <button style={{ margin: "1rem" }} value="Nodejs" onClick={handleClick}>
        Node js
      </button>
      <hr style={{ width: "50vw", margin: "0.5rem auto" }} />
      {book.map(function (value) {
        return (
          <div
            key={value[1].rating}
            style={{
              border: "1px solid grey",
              margin: "2rem auto",
              width: "25vw",
              borderRadius: "7px"
            }}
          >
            <h4 style={{ margin: "0", padding: "0.5rem" }}>{value[1].name}</h4>
            <h6 style={{ margin: "0", padding: "0.5rem" }}>
              {value[1].rating}
            </h6>
          </div>
        );
      })}
    </div>
  );
}

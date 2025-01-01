import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  // async function getJokes() {
  //   const data = await fetch("http://localhost:4000/jokes", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   console.log(data);

  //   const response = await data.json();

  //   console.log(response);
  //   setJokes(response);
  // }

  async function getJokes() {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <>
      <h1>Jokes</h1>
      {/* <div>{jokes}</div> */}
      {jokes.map((joke) => {
        return (
          <div key={joke.id}>
            <h3>{joke.joke}</h3>
            <p>{joke.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;

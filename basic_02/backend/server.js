import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why don't scientists trust atoms? Because they make up everything.",
      content: "Joke 1",
    },
    {
      id: 2,
      joke: "Why don't scientists trust atoms? Because they make up everything.",
      content: "Joke 2",
    },
    {
      id: 3,
      joke: "Why don't scientists trust atoms? Because they make up everything.",
      content: "Joke 3",
    },
    {
      id: 4,
      joke: "Why don't scientists trust atoms? Because they make up everything.",
      content: "Joke 4",
    },
    {
      id: 5,
      joke: "Why don't scientists trust atoms? Because they make up everything.",
      content: "Joke 5",
    },
  ];

  res.send(jokes);
});

app.listen(4000, () => {
  console.log(`server is running on port 4000`);
});

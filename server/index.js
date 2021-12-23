const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
           "Your Javascript skills are stellar.",		 
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["Soon your time will come.", 
          "Your future is bright.",
          "You are coding your future.",
          "The odds are in your favor.",
          "Comfort awaits you.",
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
});

app.get("/api/greeting", (req, res) => {
  const greetings = ["Hey", 
          "Hi",
          "Hello",
          "Howdy",
  ];

  //choose random greeting
  let randomIndex = Math.floor(Math.random() * greetings.length);
  let randomGreeting = greetings[randomIndex];

  res.status(200).send(randomGreeting);
});

// app.post("/api/goal", (req, res) {
//   document.getElementById("goal1") = "Be great."
//   document.getElementById("goal2") = "Do great things."
//   document.getElementById("goal3") = "Never give up."
  
//   res.status(200).send(allGoals);
// });



app.listen(4002, () => console.log("Server running on 4002"));

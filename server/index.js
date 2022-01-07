const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const user = [
  { name: 'Chance', age: 26 },
  { name: 'Bob', age: 25 },
  { name: 'Sue', age: 29 }
];

app.post('/api/users', (req, res) => {
  console.log(req.body);
  res.status(201).send('Created User')
})

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


app.delete("/api/fortune/:fortune", (req, res) => {
  const targetId = +req.params.id;

        const foundIndex = fortune.findIndex(goal => {
            return fortune.id === targetId
        })

        fortune.splice(foundIndex, 1);

        res.status(200).send(fortune);
    }),





app.listen(4002, () => console.log("Server running on 4002"));

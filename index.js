const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true })); // Middleware, built into express, previously bodyParser

// When we visit localhost:3000 we are making a GET request
app.get("/", (req, res) => {
  res.send(`
    <div>
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="passwordConfirmation" placeholder="password confirmation" />
        <button>Sign Up</button>
      </form>
    </div>
  `);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Account created!!!");
});

app.listen(3000, () => {
  console.log("Listening");
});

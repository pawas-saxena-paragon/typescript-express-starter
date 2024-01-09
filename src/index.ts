import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import peopleRouter from './people/people.route'; 

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

app.use('/people', peopleRouter);

app.get("/", (req, res) => {
  res.send("Hello service is up");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send({ sucess: true });
});


app.listen(port, () => {
  console.log(`app listening on ${port}`);
});

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require(`./controller`)

app.get("/api/compliment", getCompliment);
app.get(`/api/fortune`, getFortune)

// !!!!!!!!
// drop down that deletes a person off the site/ delete
// text feild that judges your taste in music/ post
// a button that changes the people on the page/ put
// !!!!!!!!

app.listen(4000, () => console.log("Server running on 4000"));

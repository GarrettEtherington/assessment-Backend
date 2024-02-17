const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require(`./controller`)
const { findHouse } = require(`./controller`)
const { killButton } = require(`./controller`)
const { postStuff } = require(`./controller`)

app.get("/api/compliment", getCompliment);
app.get(`/api/fortune`, getFortune)
app.get(`/api/home`, findHouse)
app.delete(`/api/ded`, killButton)
app.post(`/api/poste`, postStuff) 

app.listen(4000, () => console.log("Server running on 4000"));

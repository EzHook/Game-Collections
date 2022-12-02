require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/game-routes');
const cors = require('cors');
const app = express();
const mongoServer = process.env.MONGODB_CLIENT_ID;

//middleware
app.use(express.json());
app.use(cors());
app.use("/games", router);

mongoose.connect(mongoServer)
    .then(()=> console.log("sucessfully connected"))
        .then(() => app.listen(5000))
          .catch((err) => {
        console.log(err);
     });


import express from "express";
// const express = require("express");
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// //database
// mongoose.connect("mongodb://localhost:27017/auth",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// });()=>{
//     console.log("connected to DB")
// }

//model
//user schema
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
//module.exports = User;

//routes routes
app.post("/Login", (req, res) => {
  const { username, password } = req.body;
  User.findone({ username: username }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "login sucess", user: user });
      } else {
        res.send({ message: "wrong credentials" });
      }
    } else {
      res.send("not register");
    }
  });
});
app.post("/Register", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  User.findOne({ username: username }, (err, user) => {
    if (user) {
      res.send({ message: "user already exist" });
    } else {
      const user = new User({ username, password });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "sucessfull" });
        }
      });
    }
  });
});


// app.listen(6969,()=>{
//     console.log("started")
// })

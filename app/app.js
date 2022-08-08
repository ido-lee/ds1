"use strict";

const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// views 정의
app.set("views", "./src/views");
app.set("view engine", "ejs");


app.use("/", home); //use -> 미드 웨어를 등록

module.exports = app;
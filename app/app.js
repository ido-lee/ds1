"use strict";

const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 정의
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)); // `${__dirname}` : 작성파일의 경로(app.js)

app.use("/", home); //use -> 미드 웨어를 등록

module.exports = app;
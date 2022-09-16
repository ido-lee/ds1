"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require('morgan')


const app = express();
dotenv.config()

const accessLogStream = require("./src/config/log")

// 라우팅
const home = require("./src/routes/home");


const logger = require("./src/config/logger");
logger.error("Hello donggeon.");

// 앱 정의
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)); // `${__dirname}` : 작성파일의 경로(app.js)     login ejs 에서 사용
app.use(bodyParser.json());
// url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(morgan('common', { stream: accessLogStream}));
app.use("/", home); //use -> 미드 웨어를 등록

module.exports = app;
const express = require('express');
const mysql = require('mysql2/promise');
const AWS = require('aws-sdk');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;

// db 관련 설정
const db = require('../models');
db.sequelize
  .sync({force: false})
  .then(() => {
    console.log('DB 연결 성공');
  })
  .catch(err => console.log(err));


const s3 = new AWS.S3();

// 쿠키, 세션 설정
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));

// 로그인을 위한 Passport 세팅
const passportConfig = require('./passport');
passportConfig();

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

// 라우트 설정
const authRouter = require('./routes/auth');
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.json({message : "App is running on docker container"});
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});

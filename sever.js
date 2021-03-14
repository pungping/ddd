let http = require('http'); 
let daytime = require('./timemodule'); /// เรียกใช้เวลาบนเว็ปจาก module " timemodule.js"
const express = require("express");
const app = express();
const mongoose = require('mongoose');
///const initRoutes = require("./routes/web"); /// เริ่ม route
//const { lchown } = require('fs');
///import {  } from "C:/Users/ASUS/Desktop/express-app/database/db.js";///
//const db = require('./database/db'); ซ้อม
///const ping = require('body-parser');/// ลบทีหลัง 

///intial connect to db///
///connectDB();  
mongoose.connect('mongodb+srv://iamtanawood:p1i2n3k4@employee.awyvq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
http.createServer(function(req, res){       /// call back function เป็น request and Response
    if(req.url==='/'){
      res.writeHead(200 ,{'Content-Type' : 'text/html'});
      res.write('Current Day and Time: ' + daytime.myTime());  /// เเสดงผลเวลาที่แสดงบนหน้าจอโดยใช้ตัวแปล mydaytim จากการสร้างผ่าน module "timemodule"
      res.end('Synchro');
    }
 
})

//app.use(express.urlencoded({ extended: true }));
///initRoutes(app);

let port = 3000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
}) 
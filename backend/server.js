const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const requestRoute = require("./routes/requests");
const trackRoute = require("./routes/tracks");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
var sid = "AC8bac1b724e2463597f0458b3120bf254";
var auth_token = "5c2e3a9a019ef030e7be5bfb11b6df8d";
var twilio = require("twilio")(sid, auth_token);

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB")).catch(err=>console.log(err));

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "images")
    }, filename:(req,file,cb) => {
        cb(null, "hello.jpeg");
    }
});

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req,res)=>{
    res.status(200).json("File has been uploaded.");
});

app.post("/api/msg", async (req, res) => {
    twilio.messages
      .create({
        from: "+12727702470",
        to: req.body.to,
        body: req.body.message,
      })
      .then(function (res) {
        console.log("message has been sent!");
      })
      .catch(function (err) {
        console.log(err);
      });
  });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/requests", requestRoute);
app.use("/api/tracks", trackRoute);

app.listen("5000", () => {
    console.log("Backend is running.");
});
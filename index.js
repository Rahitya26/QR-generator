import express from "express";
import bodyParser from "body-parser";
import qr from "qr-image";
import fs from "fs";
const app = express();
const port = 3000;
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));

app.listen(port,()=>{
    console.log(`Server is listening on ${port}.`);
});

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/submit",(req,res)=>{
    var url= req.body.url_hold;    
    var qr_img=qr.image(url);
    qr_img.pipe(fs.createWriteStream("public/Qrcode.png"));
    res.render("index1.ejs");
});
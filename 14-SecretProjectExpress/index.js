//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3002;
var userIsAuthorised = false;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

function checkPassword(req, res, next){
    if(req.body["password"] === "ILoveProgramming"){
        userIsAuthorised = true;
        
    }
    console.log("user give pass : "+req.body.password);
    next();
}

app.use(checkPassword);  

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
  })




app.post("/check", (req, res) => {
    //Do something with the data
    if(userIsAuthorised){
        res.sendFile(__dirname + "/public/secret.html");
        //res.sendStatus(201);
    }
    else{
        //res.sendStatus(401);
        res.sendFile(__dirname + "/public/index.html");
        console.log("Wrong password");
    }
  });  
  
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
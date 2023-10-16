import express from 'express';
const app = express();
const port = 3002;

app.get("/", (req, res)=>{
    res.send("Hello vikas");
});

//3000 is port number
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});

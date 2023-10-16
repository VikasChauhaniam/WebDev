import express from 'express';
const app = express();
const port = 3000;

//3000 is port number
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
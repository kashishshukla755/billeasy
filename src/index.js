const express = require('express');
const app = express();
const route = require("./routes/routes")


app.use(express.json());


app.use('/',route)

app.listen(3000,()=>{
    console.log("server on port 3000")
})

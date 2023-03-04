const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors());
require("dotenv").config();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(require("./routes/routes"));
app.listen(port,()=>{
    console.log(`Server is listen on ${port}`);
});
const express = require("express");
require("dotenv").config();
const app = express();
const cors = require('cors')
app.use(cors());
const port = 3000 || process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(require("./routes/routes"));
app.listen(port,()=>{
    console.log(`Server is listen on ${port}`);
});
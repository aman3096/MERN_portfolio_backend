const mongoose = require('mongoose');
const DB = process.env.DB
mongoose.connect( DB, { useNewUrlParser: true, maxPoolSize: 10,useUnifiedTopology: true,  })
.then(()=>{
  console.log("Connection Success")}).catch((err)=>console.log("Connection failed",err));


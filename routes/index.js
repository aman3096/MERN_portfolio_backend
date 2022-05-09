var express = require('express');
const bcrypt = require('bcryptjs');
var router = express.Router();
const dataModules = require('../Modules/Users')
var Person = require("../Model/Person");
const User = require("../Model/userSchema")
const jwt = require("jsonwebtoken")
// var Data = require("../Modules/Users")
/* GET home page. */
const data1 = dataModules.data1;
console.log("data1", data1);

const middleware = (req,res,next)=>{
  console.log("Hello My Middleware")
  next()
}
router.get("/",middleware,(req,res)=>{
  res.send("Hello to Home Page")
})
router.get("/about", (req,res)=>{
  res.send("Hello to about page")
})
router.get("/contact",(req,res)=>{
  res.send("Hello to Contact Page")
})
router.get("/signin",(req,res)=>{
  res.cookie("cookie","Aman");
  res.send("Hello to Sign In Page")
})
router.get("/signup",(req,res)=>{
  res.send("Hello to Sign Up Page")
})
//promises
// router.post("/register",(req,res)=>{
//   const { name, email, work, phone, password, cpassword } = req.body
//   console.log(`${name} ${email} ${work} ${phone} ${password} ${cpassword}`);
//   // res.json({message:req.body})
//   if(!name || !email || !work || !phone || !password || !cpassword){
//     res.status(422).json({error: "Plz fill the fields correctly"});
//   }
//   User.findOne({email:email}).then(userExist=>{
//     if(userExist){
//       return res.status(422).json({error:"Email already exists"})
//     }
//     const user = new User({ name, email, work, phone, password, cpassword})
//     user.save().then(()=> {
//       res.status(201).json({message:"new user add success"})
//     }).catch(err=>res.status(500).json({error:"registeration failed"}))
//   }).catch(err => console.log(err))
//   res.json({message:req.body})
  
// })

//asyc -await way
router.post("/register", async (req,res)=>{
  const { name, email, work, phone, password, cpassword } = req.body
  console.log(`${name} ${email} ${work} ${phone} ${password} ${cpassword}`);
  // res.json({message:req.body})
  if(!name || !email || !work || !phone || !password || !cpassword){
    res.status(422).json({error: "Plz fill the fields correctly"});
  }
  try {
  const userExist = await User.findOne({email:email})
  if(userExist){
    return res.status(422).json({error:"Email already exists"})
  }
  const user = new User({ name, email, work, phone, password, cpassword})
  const userRegister = await user.save();
  if(userRegister){
    res.status(201).json({message:"new user add success"})
  }else{
    res.status(500).json({error:"registeration failed"})
  }
 
  res.json({message:req.body})
}
catch(err){
  console.log(err);
}
  
})

//signin route
router.post("/signin", async (req,res)=>{
  let token;
  try{
    const { email, password } = await req.body; 

    if(!email || !password){
     return res.status(400).send({error:"Invalid Credentials"})
    }

    const userLogin = await User.findOne({email: email})
    // console.log("Our", userLogin);
  if(userLogin){
    const isMatch = await bcrypt.compare(password,userLogin.password)

    token = await userLogin.generateAuthToken();
    console.log("the token is", token);
    
    res.cookie("jwtoken", token, {
      expires: new Date(Date.now()+2589200000),
      httpOnly: true
    })
    
    if(!isMatch){
      res.json({error:"Login Error"})
    }else{
      res.json({message:"User Login Success"});
    }
  }else{
    res.json({error:"Enter full credentialssss"})
  }
  }
  catch(err){
    console.log(err)
  }
})
router.route("/fetch").get(function(req, res) {
  Person.findById("62285ad4a901959a32f7b339", (err, result)=> {
    if (err) {
      res.send(err);
    } else {
      res.render("list",{data:result});
    }
  });
});
router.get('/get', function(req, res, next) {
  //  console.log("Hurry",Data.data1); 
  //  res.send(req.hostname);  
  Person.updateOne({age:25},{age:26},(err,docs)=>{
     if(!err){
       res.send(docs);
     }
     else{
       res.status(500)
       console.log("err",err);
       res.send(err);
     }
   })
  // Person.find((err, docs) => {
  //     if (!err) {
  //         res.render("list", {
  //             data: docs
  //         });
  //     } else {
  //         console.log('Failed to retrieve the Course List: ' + err);
  //     }
  // });

});

router.route('/test')
.get((req,res)=>res.send('Get any book'))
.post((req,res)=>res.send("Add a book"))
.put((req,res)=>res.send("Update the book"))

module.exports = router;

//functions only 
//import connection class
//use connection to return data in routes.js
//export this class 
const dotenv = require("dotenv");
const res = require("express/lib/response");
const mongoose = require("mongoose");
const connectionPool = require("../connection")
dotenv.config({path:"../config.env"})

// const data1 = connectionPool.connection1.once('open', () => {
    // We are connected
    // console.log("Here we are @ connection1",connectionPool.connection1.db.collection)
    // console.log("mongodb is connected!!",connectionPool.connection1.collection('peoples',(err,data)=>{
    //     if(err){
    //         throw err
    //     }
    //     return data;
    // }));
    // // mongoose.connection.db.listCollections().toArray(function (err, names) {
    //     console.log("names",names); // [{ name: 'dbname.myCollection' }]
    //     module.exports.Collection = names;
    // });
    // var User = mongoose.model('User', new mongoose.Schema({ url: String, favouriteFoods: [String], age: Number}, { collection : 'people' }));   // collection name;
    // User.find({name: "Aman Tandon"}, function(err, data) { console.log("Hello",err, data, data.length);});
    // console.log("User",User)
 
// });

// const data2 = connectionPool.connection2.once('open', () => {
    // We are connected
    // console.log("Here we are @ connection2",connectionPool.connection2)
// });

// exports.data1 = data1;
// exports.data2 = data2; 
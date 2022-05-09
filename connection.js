const mongoose = require('mongoose');
//connection pool in mongoDB and use it in routes
// mongoose.connect('mongodb+srv://aman:Condition2@cluster0.9kxmo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });


const connection1 = mongoose.createConnection('mongodb+srv://aman:Condition2@cluster0.57daa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, maxPoolSize:10, useUnifiedTopology: true});
const connection2 = mongoose.createConnection('mongodb+srv://aman:Condition2@cluster0.57daa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, maxPoolSize:10, useUnifiedTopology: true});

exports.connection1 = connection1;
exports.connection2 = connection2;
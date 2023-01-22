const express= require('express');
require('dotenv').config()
const { connection } = require('./configs/db');
// const { UserModel } = require('./models/User.model');
const app= express();
app.use(express.json());

const {userRoute}= require('./routes/users.route')
// const {postRoute}= require('./routes/note.route')
// const {authenticate}= require('./middleware/verify.middleware')
app.use('/users', userRoute);
// app.use(authenticate);
// app.use('/posts', postRoute);


app.listen(process.env.port, async()=>{
    try {
        await connection;
        console.log("Connected To DB");
    } catch (error) {
        console.log("Error while connecting DB");
    }
    console.log("Running on PORT");
})
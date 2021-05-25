import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js";
import fileUpload  from 'express-fileupload';
import cors from 'cors'

const PORT = 5000;
const DB_URL= `mongodb+srv://user:user@cluster0.6cu44.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}));
app.use('/api', router)


async function startApp(){
    try{
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log("Server running"))
    }catch (e){
        console.log(e)
    }
}

startApp()




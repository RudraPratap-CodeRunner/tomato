// import mongoose from "mongoose";

// export const  connectDB = async () =>{

//     await mongoose.connect('{ Add your mongodb URI Here }/food-del').then(()=>console.log("DB Connected"));
   
// }


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.

import mongoose from 'mongoose'
export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://rudrapratapsingh:ruchi2011@cluster0.splz07z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/project1').then(()=>{
        console.log('connected to tomato')
    })
}
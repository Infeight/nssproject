import {connect, Schema, model} from "mongoose";

connect("mongodb+srv://siddamsettysumanth2003:0pxKNAxEfszvNweI@cluster0.ydcevt9.mongodb.net/Nss?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
  console.log("connected to DB");
}).catch((err)=>{
  console.log(err.message);
})


const eventSchema = new Schema({
   Event:{
     type:String,
     required:true
    },
    Title:{
      type:String,
      required:true
    },
    Image:{
    type:String
    },
    pdf:{
      type:String
    }
  })

  const events = model("events",eventSchema);

  const upeventSchema = new Schema({
    Event:{
      type:String,
      required:true
     },
     Title:{
       type:String,
       required:true
     },
     Image:{
      data:Buffer,
     contentType:String
     },
     Date:{
       type:String
     }
   })

   const upevents = model("upevents", upeventSchema)

   const expSchema = new Schema({
    Name:{
      type:String,
      required:true
     },
     Batch:{
       type:String,
       required:true
     },
     Exp:{
     type:String,
     required:true
     }

   })
   const experience = model("experience",expSchema)

   const imageSchema = new Schema({
    name:{
      type:String,
      required:true
    },
    event:{
      type:String,
      required:true
    },
    image:{
      data:Buffer,
      contentType:String
    },
  
   })

   const image = model("imagestore",imageSchema)

   const pdfSchema = new Schema({
    name:{
      type:String,
      required:true
    },
   
    pdf:{
      data:Buffer,
      contentType:String
    }
  
   })

   const pdf = model("imagepdf",pdfSchema)

  export default {events, upevents,experience,image,pdf};


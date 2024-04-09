import { Schema, model,models,Document } from "mongoose";

export interface IReachOut extends Document {
    _id: String,
    title: string;
    description?: string;
    location?: string;
    createdAt: Date;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    price: string;
    isFree: boolean;
    url?: string;
    category: {_id:string, name:string};
    host: {_id:string, firstName:string, lastName:string}
}

const ReachoutSchema = new Schema({
    title:{
        type:String, 
        required:true,       
    },
    description:{
        type:String, 
       
    },
    location:{
        type:String,        
    },
    createdAt:{
        type:Date, 
        default: Date.now
        
    },
    imageUrl:{
        type:String, 
        required:true,
       
    },
    startDate:{
        type:Date, 
        default:Date.now
        
    },
    endDateTime:{
        type:Date, 
        default:Date.now,

        
    },
    price:{type:String},
    isFree:{
        type:Boolean,
        default:false
    },
    url:{type:String},
    category:{type:Schema.Types.ObjectId, ref: "Category"},
    host:{type:Schema.Types.ObjectId, ref: "User"}
})

export const Reachout = models.Reachout || model("Reachout", ReachoutSchema)

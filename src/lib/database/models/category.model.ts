import { Document, Schema, model, models} from "mongoose"
export interface Icategory extends Document {
    _id: string;
    name: string;
}

const CategorySchema = new Schema({
    name:{type: String, required:true, unique:true},

}) 

const Category = models.Category || model("Category", CategorySchema)

export default Category
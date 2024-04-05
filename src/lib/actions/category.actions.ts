"use server"

import { CreateCategoryParams } from "../../../types"
import { connectedToDB } from "../database"
import Category from "../database/models/category.model"
import { handleError } from "../utils"

export const createCategory =async ({ categoryName }: CreateCategoryParams)=>{
      try{
        await connectedToDB();
        const newCategory = await Category.create({ name:categoryName })
        return JSON.parse(JSON.stringify(newCategory))
      } catch (error) {
        handleError(error)
      }
}

export const fetchAllCategory =async ()=>{
    try{
      await connectedToDB();
      const categoryItems = await Category.find()
      return JSON.parse(JSON.stringify(categoryItems))
    } catch (error) {
      handleError(error)
    }
}
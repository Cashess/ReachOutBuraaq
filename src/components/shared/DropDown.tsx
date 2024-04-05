import React, { startTransition, useEffect, useState } from 'react';
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import { Icategory } from '@/lib/database/models/category.model';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle, AlertDialogTrigger,} from "@/components/ui/alert-dialog"
import { Input } from '../ui/input';
import { createCategory, fetchAllCategory } from '@/lib/actions/category.actions';
  

type DropDownProps={
    value?:string
    onChangeHandler?:() => void
}

const DropDown = ({value, onChangeHandler}:DropDownProps) => {
    const [categories, setCategories] = useState<Icategory[]>([])
    const [ newCategory, setNewCategory] = useState("")



    const handleAddCategory = () => {
            createCategory({
              categoryName: newCategory.trim()
            })
            .then((category)=> {
              setCategories((prevState) => [...prevState, category])
            })
    }

    useEffect(()=> {
        const getCategories = async () => {
          const categorieslist = await fetchAllCategory();

          categorieslist && setCategories(categorieslist as Icategory[])
        }

        getCategories();
    }, [])


  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
        <SelectTrigger className="selected-field">
            <SelectValue placeholder="category" />
        </SelectTrigger>
        <SelectContent>
           {categories.length > 0 && categories.map((category)=>(
            <SelectItem key={category._id} value={category._id} className='select-item p-regular-14 text-black bg-red-400'>
                {category.name}
            </SelectItem>
           ))}
        <AlertDialog>
            <AlertDialogTrigger className='p-medium-14 flex w-full rounded-sm py-3 pl-7 text-blue-900 hover:bg-primary-50 focus:text-primary-500'>Add category</AlertDialogTrigger>
            <AlertDialogContent className='bg-white text-blue-700'>
                <AlertDialogHeader>
                <AlertDialogTitle>New Category?</AlertDialogTitle>
                 <AlertDialogDescription>
                   <Input type="text" placeholder="category name" className="input-field mt-3" onChange={(e)=>setNewCategory(e.target.value)}/> 
                 </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => startTransition(handleAddCategory)}>Add</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

        </SelectContent>
</Select>

  )
}

export default DropDown
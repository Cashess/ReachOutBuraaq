"use client"
import React from 'react';
import {Form,FormControl,FormField,FormItem,FormMessage,}from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button';
import {useForm} from "react-hook-form";
import * as z  from "zod";
import { Textarea } from '../ui/textarea';
import { zodResolver } from "@hookform/resolvers/zod"
import { reachOutFormSchema } from '@/lib/database/validators';
import { reachOutDefaultValues } from '../../../constants';
import DropDown from './DropDown';
import {FileUploader} from './FileUploader';
import { useState } from "react"
import Image from 'next/image';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"  
import { Checkbox } from '../ui/checkbox';
import { useUploadThing } from "@/lib/uploadthing"
import { useRouter } from 'next/navigation';
import { createReachOut } from '@/lib/actions/reachOut.actions';
import { IReachOut } from '@/lib/database/models/reachOut.model';


type ReachOutFormProps = {
    userId: string
    type: "Create" | "Update"
    reachout?: IReachOut
    

}

const ReachOutForm = ({userId, type,reachout,}: ReachOutFormProps) => {
  const [ files, setFiles] = useState<File[]>([])   
  const {startUpload} = useUploadThing("imageUploader")
  const router= useRouter();
   const initialValues = reachOutDefaultValues;

    const form = useForm<z.infer<typeof reachOutFormSchema>>({
      resolver: zodResolver(reachOutFormSchema),
      defaultValues: initialValues,
    })
    
    // 2. Define a submit handler.
   async function onSubmit(values: z.infer<typeof reachOutFormSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      let uploadedImageUrl =values.imageUrl
      
      if (files.length > 0 ) {
        const uploadedImages = await startUpload(files)
        if(! uploadedImages) {
          return
        }
        uploadedImageUrl = uploadedImages[0].url
      }
      if(type === "Create") {
        try{
         
             const newReachOut = await createReachOut({
              reachout: {
                ...values, imageUrl: uploadedImageUrl,
             
              },
              userId,
              path: '/profile'
             })

             if(newReachOut) {
              form.reset();
              router.push(`/reachOut/${newReachOut._id}`)
             }
        } catch (error) {
          console.log(error);
        }
      }
    }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className='flex flex-col  gap-5 md:flex-row'>

      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
            <FormItem className='w-full'>
            
            <FormControl>
              <Input placeholder="Reach-Out title" {...field} className='input-field text-grey-600' />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
        <FormField
        control={form.control}
        name="categoryId"
        render={({ field }) => (
            <FormItem className='w-full'>
            
            <FormControl>
              <DropDown onChangeHandler={field.onChange} value= {field.value} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
        </div>
        <div className="flex flex-col gap-5 md:flex-row mt-5">
        <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
            <FormItem className='w-full'>
            
            <FormControl className="h-110">
              <Textarea placeholder="Reach-Out Description" {...field} className='textarea rounded-2xl text-grey-600' />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
        <FormField
        control={form.control}
        name="imageUrl"
        render={({ field }) => (
            <FormItem className='w-full'>
            
            <FormControl className="h-70">
             <FileUploader onFieldChange={field.onChange} imageUrl={field.value} setFiles={setFiles}/>
             </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
        </div>
        <div className='flex flex-col gap-4 md:flex-row'>
        <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
            <FormItem className='w-full'>
            
            <FormControl>
                <div className='flex-center h-[52px] w-full overflow-hidden rounded-full bg-gray-100 px-4 py-3 text-blue-800'>
            <Image src="/icons/location-grey.svg" alt="" width={26} height={26}/>
              <Input placeholder="Reach-Out location, Online or Delivered" {...field} className='input-field' />
                </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
          
        </div>
        <div className='flex flex-col gap-5 md:flex-row'>
            <FormField
                  control={form.control}
                  name="startDateTime"
                  render={({ field }) => (
                      <FormItem className='w-full'>
                      <FormControl>
              <div className='flex-center h-[52px] w-full overflow-hidden rounded-full bg-gray-100 px-4 py-3'>
                          <Image src="/icons/calendar.svg" alt="calendar" width={26} height={26}/>
                          <p className='ml-3 whitespace-nowrap text-grey-500'>
                              Start Date:
                          </p>
                          <DatePicker
                      selected={field.value}
                      onChange={(date: Date) => field.onChange(date)}
                      showTimeSelect
                      timeInputLabel="Time:" 
                      dateFormat="MM/dd/yyyy h:mm aa"
                      wrapperClassName="datePicker"
                    />
              </div>
                </FormControl>
                <FormMessage />
                </FormItem>
      )}
    />
                <FormField
                      control={form.control}
                      name="endDateTime"
                      render={({ field }) => (
                          <FormItem className='w-full'>
                          <FormControl>
                  <div className='flex-center h-[52px] w-full overflow-hidden rounded-full bg-gray-100 px-4 py-3'>
                              <Image src="/icons/calendar.svg" alt="calendar" width={26} height={26}/>
                              <p className='ml-3 whitespace-nowrap text-grey-500'>
                                  end Date:
                              </p>
                              <DatePicker
                          selected={field.value}
                          onChange={(date: Date) => field.onChange(date)}
                          showTimeSelect
                          timeInputLabel="Time:" 
                          dateFormat="MM/dd/yyyy h:mm aa"
                          wrapperClassName="datePicker"
                        />
                  </div>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
          )}
        />

        </div>

        <div className='flex fllex-col gap-4 md:flex-row'>
        <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                          <FormItem className='w-full'>
                          <FormControl>
                  <div className='flex-center h-[52px] w-full overflow-hidden rounded-full bg-gray-100 px-4 py-3'>
                              <Image src="/icons/dollar.svg" alt="dollar" width={26} height={26}/>
                             <Input type='number' placeholder="Price" {...field} className='p-regular-16 border-0 bg-green-200 outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-black'/>
                             <FormField
                      control={form.control}
                      name="isFree"
                      render={({ field }) => (
                          <FormItem>
                          <FormControl>
                  <div className='flex flex-center'>
                    <label htmlFor="isFree" className='whitespace-nowrap pr-4 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-60 text-black'> Free Ticket</label>
                    <Checkbox id="isFree" onCheckedChange={field.onChange} checked={field.value} className="mr-3 h-5 w-5 border-3 border-primary-500 bg-black"  />

                  </div>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
          )}
        />
                  </div>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
          )}
        />
        <FormField
        control={form.control}
        name="url"
        render={({ field }) => (
            <FormItem className='w-full'>
            
            <FormControl>
                <div className='flex-center h-[52px] w-full overflow-hidden rounded-full bg-gray-100 px-4 py-3 text-blue-800'>
            <Image src="/icons/link.svg" alt="Link" width={26} height={26}/>
              <Input placeholder="URL" {...field} className='input-field' />
                </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
        
        </div>
      <Button type="submit" size='lg' disabled={form.formState.isSubmitting} className='button col-span-2 w-full'>{form.formState.isSubmitting? ("Submitting..."): `${type} ReachOut`}</Button>
    </form>
  </Form>
  )
} 

export default ReachOutForm
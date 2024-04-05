'use client'
 
import { useFormStatus } from 'react-dom'
import { MdAdd, MdSave } from 'react-icons/md'
 
export function SubmitButton({user, product}) {
  const { pending } = useFormStatus()
 
  return (
    <button type="submit" aria-disabled={pending}>
      Add {<MdSave/>? <MdAdd/> : user || product}
    </button>
  )
}
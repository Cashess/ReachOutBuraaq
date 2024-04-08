import { IReachOut } from "@/lib/database/models/reachOut.model"
import Link from "next/link";
import Image from "next/image";
import { formatDateTime } from '@/lib/utils';
import { auth } from "@clerk/nextjs"
import DeleteComfirmationCard from '@/components/shared/DeleteComfirmationCard'

type CardProps = {
    reachout: IReachOut,
    hasOrderLink?:boolean,
    hidePrice?:boolean,
    reachoutId?: string
}
const Card =({reachout, hasOrderLink, hidePrice,reachoutId}:CardProps)=> {
    const {sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;
    const isReachOutCreator = userId === reachout.host._id.toString();
    return(
        <div className='group relative flex min-h-[376px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]'>
         <Link href={`/reachOut/${reachout._id}`} style={{backgroundImage: `url(${reachout.imageUrl})`}} className='flex-center flex-grow bg-gray-50 bg-cover bg-center text-black'
         />

         {isReachOutCreator && !hidePrice && (
            <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all"> 
                <Link href={`/reachOut/${reachout._id}/update`}>
                    <Image src="/icons/edit.svg" alt="edit" width={25} height={25}/>
                </Link>
                <DeleteComfirmationCard reachoutId={reachout._id.toString()} />
            </div>
         )}
         <Link href={`/reachOut/${reachout._id}`} className='flex min-h-[230px] flex-col gap-3 p-5 md:gap-4'>
          {!hidePrice && <div className='flex gap-2 text-black'>
            <span className='p-semibold-14 w-min rounded-3xl bg-green-200 px-4 py-0 '>
                {reachout.isFree ? "FREE" : `$${reachout.price}`}
            </span >
            <p className='p-semibold-16 w-min rounded-full bg-grey-600/10 px-4 py-1  '>
                {reachout.category.name}
            </p>
          </div>}
          <p className='p-medium-16 p-medium-18 text-black'>
               {formatDateTime(reachout.startDateTime).dateTime}
          </p>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
            {reachout.title}
          </p>
          <div className='flex-between w-full'>
           <p className='p-medium-14 md:p-medium-16 text-black'>
            {reachout.host.firstName} {reachout.host.lastName}
           </p>
           {hasOrderLink && (
               <Link href={`orders?reachoutId=${reachout._id}`} className="flex gap-2">
                 <p className='text-black'>
                    Order details
                 </p>
                 <Image src="/icons/arrow.svg" alt="search" width={13} height={13}/>
               </Link>
           )}
          </div>
         </Link>
        </div>
    )
}

export default Card
import React from 'react'
import { SearchParamProps } from '../../../../../types'
import { getReachOutById, getRelatedReachOutsByCategory } from '@/lib/actions/reachOut.actions'
import Image from 'next/image';
import { formatDateTime } from '@/lib/utils';
import Collections from "@/components/shared/Collections" 

const ReachOutDetails = async ({params:{id}, searchParams}:SearchParamProps) => {
  const reachOut = await getReachOutById(id);
  const relatedReachOuts = await getRelatedReachOutsByCategory({
    categoryId: reachOut.category._id,
    reachoutId: reachOut._id,
    page: searchParams.page as string
  })
  return (
    <>
    <section className='flex justify-center bg-primary-50 bg-dotted-pattern bg-contain'>
        <div className='grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl'>
          <Image src={reachOut.imageUrl} alt="ReachOut image" width={1000} height={1000} className='h-full min-h-[300px] object-contain object-center rounded-2xl'/>
        <div className='flex w-full flex-col gap-7 p-5 md:p-10'>
          <div className='flex flex-col gap-6'>
             <h2 className='h2-bold text-black'>
              {reachOut.title}
             </h2>
             <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                <div className='flex gap-3'>
                <p className='p-bold-20 rounded-full bg-green-600/10 px-5 py-2 text-green-900'>
                {reachOut.isFree ? "Free" : `$${reachOut.price}`}
                </p>
                <p className='p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-gray-800'>
                {reachOut.category.name}
                </p>
                </div>
                <p className='p-medium-18 ml-2 mt-2 sm:mt-0'>
                 by{""}
                 <span className='text-primary-500'>
                  {reachOut.host.firstName} {reachOut.host.lastName}
                 </span>
                </p>
             </div>
          </div>
          {/* CHECKOUT BUTTON*/}

          <div className='flex flex-col gap-5'>
            <div className='flex gap-2 md:gap-3'>
            <Image src="/icons/calendar.svg" alt='calendar' width={35} height={34}/>
            <div className='p-medium-16 lg:p-regular-20 flex flex-wrap items-center '>
              <p className=' text-black'>
                {formatDateTime(reachOut.startDateTime).dateOnly}- {" "}
                {formatDateTime(reachOut.startDateTime).timeOnly}
              </p>
              <p className='ml-1 text-black'>
                {formatDateTime(reachOut.endDateTime).dateOnly} - {" "}
                {formatDateTime(reachOut.endDateTime).timeOnly} 
              </p>
              
              
            </div>
            </div>
            <div className='p-regular-20 flex items-center gap-3 text-black'>
             <Image src="/icons/location.svg" alt='location' width={34} height={34}/>
             <p className='p-medium-16 lg:p-regular-20 '>
               {reachOut.location}
             </p>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
           <p className='p-bold-20 text-grey-500'>
              What you will learn archive
           </p>
           <p className='p-medium-16 lg:p-regular-16 text-black '>
             {reachOut.description}
           </p>
           <p className='p-medium-16 lg:p-regular-16  trucate text-primary-500 underline '>
             {reachOut.url}
           </p>
          </div>
        </div>
        </div>
    </section>
    {/*ReachOut with same category*/}
    <section className='wrapper my-8 flex flex-col md:gap-12'>
      <h2 className='h2-bold'>
        Related Reach-Out
      </h2>
      <Collections 
      data={relatedReachOuts?.data}
      emptyTitle="No ReachOuts Found"
      emptyStateSubtext="Come back again later"
      collectionType="All_ReachOuts"
      limit={6}
      page={1}
      totalPages={2} 
      />
    </section>
    </>
  ) 
}

export default ReachOutDetails
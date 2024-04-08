import {IReachOut} from "@/lib/database/models/reachOut.model"
import Card from '@/components/shared/Card'
import react from "react"

type CollectionsProps ={
    data:IReachOut[],
    emptyTitle: string,
    emptyStateSubtext: string,
    limit: number,
    page: number | string,
    totalPages?: number,
    urlParamName?: string,
    collectionType?: "ReachOut_Hosted" | "my_Tickets" | "All_ReachOuts" 
}


const Collections = ({data, emptyTitle,emptyStateSubtext,page, totalPages=0,collectionType, urlParamName}:CollectionsProps) => {
    return (
        <>
            {data.length > 0 ? (
            <div className='flex flex-col items-center  gap-10'>
             <ul className='grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10'>
               {data.map((reachout)=>{
                const hasOrderLink = collectionType ==="ReachOut_Hosted";
                const hidePrice = collectionType === "my_Tickets";
                return (
                    <li key={reachout.id} className='flex justify-center'>
                       <Card reachout={reachout} hasOrderLink={hasOrderLink} hidePrice={hidePrice}/>
                    </li>
                ) 
               })}
             </ul>
            </div>):
            ( 
                <div className='flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[16px] bg-grey-50 py-28 text-center text-black'>
                    <h3 className='p-bold-18 md:h5-bold'>
                        {emptyTitle}
                    </h3>
                    <p className='p-regular-16'>
                        {emptyStateSubtext}
                    </p>
                </div>
            )}
        </>
    )
}

export default Collections
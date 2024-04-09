import Link from "next/link"
import {Button} from "@/components/ui/button";
import Collections from "@/components/shared/Collections" 
import { auth } from "@clerk/nextjs";
import { getReachOutsByUser } from  "@/lib/actions/reachOut.actions"
const Profile = async () => {
    const {sessionClaims } = auth();
    const userId = sessionClaims?.userId as string
    const hostedReachOuts = await getReachOutsByUser({
         userId, page:1
    })
    return(
        <>
            {/*my tickets */}
            <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
             <div  className='wrapper flex items-center justify-center sm:justify-between text-black '>
               <h3 className='h3-bold text-center sm:text-left'>
                 My Pass Ticket for 
               </h3>
               <Button asChild size="lg" className='button hidden sm:flex'>
                <Link href="/#reachout">
                Explore more reachOut 
                </Link>
               </Button>
             </div>
            </section>
            {/* <section className='wrapper my-8'>
            <Collections 
                data={hostedReachOuts?.data}
                emptyTitle="No ReachOuts Ticket purchase yet"
                emptyStateSubtext="No worries- Puns non intended, more reachout on the way to explore!"
                collectionType="my_Tickets"
                limit={3}
                page={1}
                urlParamName= "OrdersPage"
                totalPages={2} 
                />
            </section> */}
             <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
             <div  className='wrapper flex items-center justify-center sm:justify-between text-black'>
               <h3 className='h3-bold text-center sm:text-left'>
                 Reach-Out-Hosted
               </h3>
               <Button asChild size="lg" className='button hidden sm:flex'>
                <Link href="/reachOut/create">
                Create New ReachOut 
                </Link>
               </Button>
             </div>
            </section>
             <section className='wrapper my-8'>
            <Collections 
                data={hostedReachOuts?.data}
                emptyTitle="No ReachOuts have been created yet"
                emptyStateSubtext="go create some now!"
                collectionType="ReachOut_Hosted"
                limit={3}
                page={1}
                urlParamName= "reachOutPage"
                totalPages={2} 
                />
            </section>
        </>
    )
}

export default Profile;
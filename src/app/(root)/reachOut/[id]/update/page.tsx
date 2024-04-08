import ReachOutForm from "@/components/shared/reachOutForm"
import { auth } from "@clerk/nextjs";
import { getReachOutById } from "@/lib/actions/reachOut.actions"

type UpdateReachOutProps ={
  params:{
    id:string
  }
}

const UpdateReachOut = async ({ params :{id}}:UpdateReachOutProps) => {
    const { sessionClaims } = auth()
    const userId = sessionClaims?.userId as string;
    const reachOut = await getReachOutById(id)
  return (
  <>
   <section className="bg-primary-100 bg-dotted-pattern bg-cover bg-center py5 md:py-10">
    <h3 className="wrapper h3-bold text-center sm:text-left">
        Update a Reach Out

    </h3>

   </section>
   <div className="wrapper my-7">
   <ReachOutForm userId={userId} type="Update" reachout={reachOut} />
   </div>
  </>
  )
}

export default UpdateReachOut
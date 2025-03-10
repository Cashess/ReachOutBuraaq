import ReachOutForm from "@/components/shared/reachOutForm"
import { auth } from "@clerk/nextjs"


const CreateReachOut = () => {
    const { sessionClaims } = auth()
    const userId = sessionClaims?.userId as string;
  return (
  <>
   <section className="bg-primary-100 bg-dotted-pattern bg-cover bg-center py5 md:py-10">
    <h3 className="wrapper h3-bold text-center sm:text-left">
        Create a Reach Out

    </h3>

   </section>
   <div className="wrapper my-7">
   <ReachOutForm userId={userId} type="Create"  />
   </div>
  </>
  )
}

export default CreateReachOut
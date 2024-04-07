import { authMiddleware } from "@clerk/nextjs";
 

export default authMiddleware({

  publicRoutes: [
    "/",
    "/dashboard",
    "/api/webhooks/clerk",
    "/api/webhooks/stripe",
    "/api/uploadthing"
],
ignoredRoutes:[
    "/api/webhooks/clerk",
    "/api/webhooks/stripe",
    "/api/uploadthing",
    "/dashboard/iuser",
    "/dashboard/iproducts",
]
});
 
export const config = {
  matcher: [
    
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/(api|trpc)(.*)"
  ]
};
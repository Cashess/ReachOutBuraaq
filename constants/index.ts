export const headerLinks=[
    {
        label:"Home",
        route:"/"
    },
    {
        label:"Create ReachOut",
        route:"/reachOut/create"
    },
    {
        label:"My Profile",
        route:"/dashboard"
    },
   
]

export const reachOutDefaultValues = {
    title: "",
    description:"",
    location:"",
    imageUrl:"",
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: "",
    price:"",
    isFree:false,
    url:"",
}
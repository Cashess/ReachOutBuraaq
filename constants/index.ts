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
        label:"Org-Dash",
        route:"/dashboard"
    },
    {
        label:"My Profile",
        route:"/profile"
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
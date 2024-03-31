import Link from "next/link";
import Image from "next/image";
import {  SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"
import NavbarItems from "@/components/shared/NavbarItems"
import MobileNavItems from "./MobileNavItems";
const Header= ()=>{
    return(
        <header className="w-full border-b">
           <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
         <Image src="/buraaq Logo.png" alt="solutions" height={129} width={125} className="rounded-full"/>
        </Link>
        <SignedIn>
            <nav className=" md:flex-between hidden w-full max-w-xs ">
                <NavbarItems/>
            </nav>

        </SignedIn>
        <div className="flex w-32 justify-end gap-3">
        <SignedIn>
            <UserButton afterSignOutUrl="/"/>
        <MobileNavItems/>
        </SignedIn>
        <SignedOut> 
            <Button asChild className="rounded-full text-white bg-gray-950" size="lg">
            <Link href="/sign-in">
                login
            </Link>
            </Button>
        </SignedOut>
        </div>
           </div> 
        </header>
    )
}
export default Header
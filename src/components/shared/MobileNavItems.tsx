import {Sheet, SheetContent,SheetTrigger,} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import NavbarItems from "./NavbarItems"
const MobileNavItems = () => {
  return (
    <nav className="md:hidden text-black">
        <Sheet>
        <SheetTrigger className="align-middle">
            <Image src="/icons/menu.svg" alt="menu" width={23} height={23} className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-5 bg-green-300 md:hidden">
            <Image src="/buraaq Logo.png" alt="buraaq" width={125} height={70} className="rounded-full"/>
            <Separator className="border border-red-300" />
        <NavbarItems/>
        </SheetContent>
        </Sheet>
</nav>
  )
}

export default MobileNavItems
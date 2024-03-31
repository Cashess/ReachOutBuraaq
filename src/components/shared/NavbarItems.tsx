"use client"
import Link from "next/link"
import { headerLinks } from "../../../constants"
import { usePathname } from "next/navigation"

const NavbarItems = () => {
  const pathname = usePathname();
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-4 md:flex-row">
      {headerLinks.map((links)=>{
        const isActive = pathname ===links.route;
        return (
          <li key={links.route} className={`${isActive && "text-primary-600"} flex-center p-medium-16 whitespace-nowrap`}>
            <Link href={links.route}>
              {links.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavbarItems
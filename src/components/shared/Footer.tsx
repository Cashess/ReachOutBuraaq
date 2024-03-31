import Image from "next/image"
import Link from "next/link"


const Footer = () => {
  return (
    <footer className=" border-t">
      <div className="flex w-full justify-between">
        <Link href="/">
        <Image src="/buraaq Logo.png" alt="solutions" height={100} width={112} className="rounded-full"/>
       </Link>
        <p >
          2024 Buraaq ReachOut. All Rights Reserved 
        </p>
      </div>
    </footer>
  )
}

export default Footer
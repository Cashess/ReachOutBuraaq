import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <>
    <section className='bg-primary-100 bg-dotted bg-pattern bg-contain py-5 md:py-10 overflow-hidden'>
    <div className='wrapper grid grid-cols-1 md:grid-cols-2 2xl:gap-0'>
    <div className='flex flex-col justify-center gap-8'>
     <h1 className='h1-bold text-red-950'>
     ReachOut, Connect, Commemorate: Your ReachOut, Our Platform
     </h1>
     <p className='p-regular-20 md:p-regular-24'>
     Publish and learn helpful tips from 6766+ mentors in the world-class health-Orrganization with our Global ReachOut Cummunity 
     </p>
     <Button size="lg" asChild className='button w-full sm:w-fit'>
     <Link href="#incidents">
     Explore More
     </Link>
     </Button>
    </div> 
    <Image src="/HeroAdvanceAfrica.jpg" alt='Hero' width={900} height={890} className='max-h-[70vh] object-contain object-center 2xl:max-h-[53vh] rounded-full'  />
    </div>
    </section>
    <section id='incidents' className='wrapper my-7 flex flex-col gap-8 md:gap-12'>
      <h2 className='h2-bold'>
      Trusted By <br /> Thousands of Research Institutes
      </h2>
      <div className='flex w-full flex-col gap-5 md:flex-row'>
      Search
      Category
      </div>
    </section>
    </>
  );
}

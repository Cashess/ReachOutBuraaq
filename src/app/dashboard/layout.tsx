import React from 'react'
import Sidebar from '@/components/shared/dashboard/sidebar/sidebar';
import Navbar from '@/components/shared/dashboard/navbar/navbar';
import styles from "@/components/shared/dashboard/dashboard.module.css"
import Footer from '@/components/shared/dashboard/footer/footer';
const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <Sidebar/>
        </div>
        <div className={styles.content}>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    </div>
  )
}

export default layout
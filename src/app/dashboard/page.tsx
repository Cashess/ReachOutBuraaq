import React from 'react'
import Card from '@/components/shared/dashboard/card/card'
import styles from "@/components/shared/dashboard/dashboard.module.css" 
import Transactions from '@/components/shared/dashboard/transactions/transactions'
import Chart from '@/components/shared/dashboard/chart/chart'
import RightBar from '@/components/shared/dashboard/rightbar/rightbar'
const Dashboard = () => {
  return (
    <div className={styles.wrapper}> 
      <div className={styles.main}>
       <div className={styles.cards}>
        <Card/>
        <Card/>
        <Card/>

       </div>
       <Transactions/>
       <Chart/>
      </div>
      <div className={styles.side}>
        <RightBar/>

      </div>
    </div>
  )
}

export default Dashboard
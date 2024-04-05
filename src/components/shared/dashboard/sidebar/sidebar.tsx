import React from 'react'
import styles from "./sidebar.module.css"
import { MdAttachMoney, MdDashboard, MdHelpCenter, MdLogout, MdOutlineSettings, MdPeople, MdShoppingBag, MdSupervisedUserCircle, MdWork } from 'react-icons/md';
import MenuLink from './menuLink/menuLink';
import Image from 'next/image'

const sideMenuItems =[
  {
    title:"Pages",
    list:[
      {
        title:"Dashboard",
        path:"/dashboard",
        icon:<MdDashboard/>
      },
      {
        title:"Users",
        path:"/dashboard/iuser",
        icon:<MdSupervisedUserCircle/>
      },
      {
        title:"Products",
        path:"/dashboard/iproducts",
        icon:<MdShoppingBag/>
      },
      {
        title:"Transactions",
        path:"/dashboard/transactions",
        icon:<MdAttachMoney/>
      }
    ]
  },
  {
    title:"Analytics",
    list:[
      
        {
          title:"Revenue",
          path:"/dashboard/revenue",
          icon:<MdWork/>
        },
        {
          title:"Teams",
          path:"/dashboard/teams",
          icon:<MdPeople/>
        }
      
    ]
  },
  {
    title:"User",
    list:[
      
        {
          title:"Settings",
          path:"/dashboard/settings",
          icon:<MdOutlineSettings/>
        },
        {
          title:"Help",
          path:"/dashboard/help",
          icon:<MdHelpCenter/>
        }
      
    ]
  }

  
]

const Sidebar = async () => {

  return (
    <div className={styles.containers}>
     <div>
      <Image src="/noavatar.png" alt="User" width={50} height={65} className={styles.userImage}/>
        <div className={styles.userDetails}>
          <span className={styles.username}>
            Dr Muhammad
          </span>
          <span className={styles.userTitle}>
            Administrator
          </span>

        </div>
     </div>
     <ul>
     {
        sideMenuItems.map((cat)=>(
          <li key={cat.title}>
                <span className={styles.cat}> 
                {cat.title}
                {
                  cat.list.map((item)=>(
                    <MenuLink item={item} key={item.title}/>
                  ))
                }

                </span>
          </li>
        ))
      }
     </ul>
     <form action="">

     <button className={styles.logout}>
      <MdLogout/>
      logOut
     </button>
     </form>
    </div>
  )
}

export default Sidebar
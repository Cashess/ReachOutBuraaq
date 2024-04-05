
import React from 'react';;
import styles from "./iuser.module.css"
import Search from '@/components/shared/dashboard/search/search';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/components/shared/dashboard/pagination/pagination';


const Iuser = async ({searchParams}) => {
 
  return (
    <div className={styles.container}> 
        <div className={styles.top}>

           <Search placeholder="search for a user..." />
          <Link href="/dashboard/iuser">
          <button className={styles.addButton} >Add New

</button>
</Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>
                name
              </td>
              <td>
                Email
              </td>
              <td>
                Created At
              </td>
              <td>
                Role
              </td>
              <td>
                status
              </td>
              <td>
                Action
              </td>
            </tr>
          </thead>
          <tbody>
        

              
              <tr >
              <td>
                <div className={styles.user}>
                 <Image src= "/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />

                 user.username
                </div>

              </td>
              <td>
                user.email
              </td>
              <td>
               {/* {new Date(user.createdAt).toLocaleString()} */}
            {/* Format the created date before rendering */}
              </td>
              <td>
                user.isAdmin? "Admin":"Client"
              </td>
              <td>
              user.isActive? "Active":"Passive"
              </td>
              <td>
                <div className={styles.buttons}>
                <Link href={`/dashboard/iuser`}>
                <button className={`${styles.button} ${styles.view}`}>
                       View
                </button>
              
              </Link>
              
                  
                  <button className={`${styles.button} ${styles.delete}`}> 
                      Delete
                  </button>
            


                </div>
              </td>
            </tr>
                
          </tbody>
        </table>
        {/* <Pagination count={count} /> */}
    </div> 
  )
}

export default Iuser
import React from 'react';
import styles from "./transactions.module.css"
import Image from 'next/image';

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions

      </h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>
              name
            </td>
            <td>
              Status
            </td>
            <td>
              Date
            </td>
            <td>
              Amount
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Image src="/noavatar.png" alt="" width={45} height={65} className={styles.userImage}/>
           Dr Muhammad
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}> pending

              </span>
            </td>
            <td>
              15.07.2024
            </td>
            <td>
              400$
            </td>
          </tr>
          
          <tr>
            <td>
              <Image src="/noavatar.png" alt="" width={45} height={65} className={styles.userImage}/>
           Dr Muhammad
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}> done

              </span>
            </td>
            <td>
              15.07.2024
            </td>
            <td>
              400$
            </td>
          </tr>
          <tr>
            <td>
              <Image src="/noavatar.png" alt="" width={45} height={65} className={styles.userImage}/>
           Dr Muhammad
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}> cancelled

              </span>
            </td>
            <td>
              15.07.2024
            </td>
            <td>
              400$
            </td>
          </tr>
   
        </tbody>

      </table>
    </div>
  )
}

export default Transactions
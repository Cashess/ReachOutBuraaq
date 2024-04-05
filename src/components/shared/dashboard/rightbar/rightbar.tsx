import React from 'react';
import styles from "./rightbar.module.css"
import Image from 'next/image';
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';

const RightBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
       <div className={styles.bgContainer}>
        <Image src="/AfriAstra.jpg" alt="Doctor" fill className={styles.bg}/>

       </div>
       <div className={styles.texts}>
        <span className={styles.notification}>Available Now

        </span>
        <h3 className={styles.title}>
          How to use the new version of the admin dashboard
        </h3>
        <span className={styles.subtitle}>
          Takes 5  minutes to learn 
        </span>

        <p className={styles.desc}>
           orem ipsum dolor imus
        </p>

        <button className={styles.button}>
            <MdPlayCircleFilled/>
            watch
        </button>


       </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}> coming Soon in sha Allah
          </span>
              <h3 className={styles.title}>
                New server actions are available, partial pre-rendering is coming soon 

              </h3>
              <span className={styles.subtitle}>Boost your productivity

              </span>
              <p className={styles.desc}>

                enk fkkfh fje jkgkd hjkg hksd kflkffkf

              </p>
              <button className={styles.button}>
              <MdReadMore/>
                   Learn 
              </button>
        </div>

      </div>
    </div>
  )
}

export default RightBar
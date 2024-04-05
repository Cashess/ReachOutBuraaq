import React from 'react';
import styles from "./card.module.css";
import { MdSupervisedUserCircle } from 'react-icons/md';


const Card = () => {
  return (
    <div className={styles.container}>
        <MdSupervisedUserCircle size={26}/>
        <div className={styles.texts}>
            <span className={styles.title}>
                 total users
            </span>
            <span className={styles.number}>
                200.527
            </span>

            <span className={styles.detail}>
                <span className={styles.positive}>12%

                </span>
                more than previous values presented
            </span>

        </div>
    </div>
  )
}

export default Card
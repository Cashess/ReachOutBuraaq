import styles from "./iproducts.module.css";
import Link from 'next/link';
import Image from 'next/image';






const IProducts = async () => {
 
  return (
    <div className={styles.container}> 
      <div className={styles.top}>
        
        <Link href="/dashboard/iproducts/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          
            <tr >
              <td>
                <div className={styles.product}>
                  <Image src= "/noproductfound.jpg" alt="" width={40} height={40} className={styles.productImage} />
                  
                </div>
              </td>
              <td>product.desc</td>
              <td>product.price</td>
              <td>
                {/* {new Date(product.createdAt).toLocaleString()} */}666
              </td>
              <td>product.stock</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/iproducts`}>
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                <form action="">

                
                <button className={`${styles.button} ${styles.delete}`}> 
                    Delete
                </button>
                </form>
            

                </div>
              </td>
            </tr>
        
        </tbody>
      </table>
    
      
    </div>
  );
}

export default IProducts;

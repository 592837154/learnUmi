/**
 * title: 个人中心
 * Routes:
 *   - ./PrivateRoute.js
 */
import styles from './profile.css';
import router from 'umi/router';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page profile</h1>
      <button onClick={()=> {router.goBack()}} >返回</button>
      <div className={styles.box}>
        <div className={styles.left}>left</div>
        <div className={styles.right}>right</div>
      </div>
    </div>
  );
}

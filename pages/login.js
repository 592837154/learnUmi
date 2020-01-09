
import styles from './login.css';

export default function () {
  return (
    <div className={styles.normal}>
      <h1>Page login</h1>
      <form>

        用户名<input  className="from-control"/>
        <input type="button"  onClick={() => localStorage.setItem('login', 'true')}/>
      </form>
    </div>
  );
}

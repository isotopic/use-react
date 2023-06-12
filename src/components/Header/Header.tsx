import { Link } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
  const session = { user: { name: 'John' } };

  return (
    <div className={styles.header}>
      <div>
        <Link to="/">
          <img
            src="/images/toolbox.png"
            alt="Tool Box"
            width={90}
            height={90}
          />
          <p className={styles.logo_subtitle}>USE REACT</p>
        </Link>
      </div>
      <div></div>
      <div>
        {session?.user ? (
          <a onClick={() => console.log()}>
            Hello, {session.user.name}.<br />
            [Sign out]
          </a>
        ) : (
          <a onClick={() => console.log()}> [Sign in]</a>
        )}
      </div>
    </div>
  );
}

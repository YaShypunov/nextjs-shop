import Link from 'next/link';
import {useSession, signOut} from 'next-auth/client';

import classes from './main-navigation.module.css';

function MainNavigation() {
  const [session, loading] = useSession();

  console.log( {session, loading});

  const handleLogout = () => {
    signOut();
  };

   return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          {!session && !loading && <li>
            <Link href="/auth">Login</Link>
          </li>
          }
          {session &&<>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
          </> 
          }
         
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

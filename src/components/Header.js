import { useSelector,useDispatch } from 'react-redux';
import classes from './Header.module.css';
import {authenticateActions} from '../store/auth'
const Header = () => {

  const authSelector = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch()

  const logoutHandler=(event)=>{
    event.preventDefault();
    dispatch(authenticateActions.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authSelector && (
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
      )}
    </header>
  );
};

export default Header;

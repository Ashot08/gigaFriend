import classes from './Navigation.module.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className={classes.test}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navigation;

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav container'>
      <h1>Name</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/signin'>Sign In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

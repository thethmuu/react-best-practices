import { Link } from 'react-router-dom';
import Footer from '../Footer';

const AuthLayout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AuthLayout;

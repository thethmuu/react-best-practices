import Footer from '../Footer';

const AuthLayout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default AuthLayout;

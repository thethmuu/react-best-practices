import Footer from '../Footer';
import Navbar from '../Navbar';

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;

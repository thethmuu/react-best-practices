import { Link } from 'react-router-dom';
import AuthLayout from '../components/layouts/AuthLayout';

const SignInPage = () => {
  return (
    <AuthLayout>
      <h2>Sign In Page</h2>
      <p>
        Go back to <Link to='/'>Home</Link>
      </p>
    </AuthLayout>
  );
};

export default SignInPage;

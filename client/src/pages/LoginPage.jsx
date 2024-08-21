import { Form, redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/LoginRegister';
import FormRow from '../components/FormRow';
import CheckRegLog from '../components/CheckRegLog';
import Button from '../UI/Button';
import fetchUrl from '../utils/axios';
import { loginUser } from '../store/slices/user-slice';

const LoginPage = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4>Login</h4>
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />

        <Button
          type="submit"
          btnName={isSubmitting ? 'Submitting...' : 'Submit'}
          className="btn-block"
          disabled={isSubmitting}
        />
        <CheckRegLog checkText="Don't have account?" route="register" />
        <CheckRegLog checkText="Back to Home" route="" routeName="Home" />
      </Form>
    </Wrapper>
  );
};

export default LoginPage;

// Action
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await fetchUrl.post('/auth/login', data);

      store.dispatch(loginUser(response.data.user));
      toast.success('Login successful');
      return redirect('/');
    } catch (err) {
      const errMsg = err?.response?.data?.msg;

      toast.error(errMsg || 'Something went wrong');
      return err;
    }
  };

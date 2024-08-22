import { Form, redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/LoginRegister';
import FormRow from '../components/FormRow';
import CheckRegLog from '../components/CheckRegLog';
import Button from '../UI/Button';
import fetchUrl from '../utils/axios';

const RegisterPage = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4>Register</h4>
        <FormRow type="text" name="firstName" labelText="First" />
        <FormRow type="text" name="lastName" labelText="Last Name" />
        <FormRow type="text" name="username" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />

        <Button
          type="submit"
          btnName={isSubmitting ? 'Submitting...' : 'Submit'}
          className="btn-block"
          disabled={isSubmitting}
        />
        <CheckRegLog checkText="Already member?" route="login" />
        <CheckRegLog checkText="Back to Home" route="" routeName="Home" />
      </Form>
    </Wrapper>
  );
};

export default RegisterPage;

// Action
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await fetchUrl.post('/auth/register', data);

    toast.success('Successfully registered');
    return redirect('/login');
  } catch (err) {
    const errMsg = err?.response?.data?.msg;

    toast.error(errMsg || 'Something went wrong');
    return err;
  }
};

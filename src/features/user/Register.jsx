import { useState } from 'react';
import { Link } from 'react-router-dom';
import LandingIntro from './LandingIntro.jsx';
import ErrorText from '../../components/Typography/ErrorText.jsx';
import InputText from '../../components/Input/InputText.jsx';
import usePostRegis from '../../hooks/usePostRegis.js';

function Register() {
  const INITIAL_REGISTER_OBJ = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const [registerObj, setRegisterObj] = useState(INITIAL_REGISTER_OBJ);
  const { postRegis, loading, error, success } = usePostRegis();

  const submitForm = (e) => {
    e.preventDefault();
    if (registerObj.name.trim() === "") return setError("Name is required!");
    if (registerObj.email.trim() === "") return setError("Email is required!");
    if (registerObj.password.trim() === "") return setError("Password is required!");
    if (registerObj.confirmPassword.trim() === "") return setError("Confirm Password is required!");
    if (registerObj.password !== registerObj.confirmPassword) return setError("Passwords do not match!");

    const registerData = {
      nama_pengguna: registerObj.name,
      email: registerObj.email,
      password: registerObj.password,
      konfirmasi_password: registerObj.confirmPassword
    };

    postRegis(registerData);
  };

  const updateFormValue = ({ updateType, value }) => {
    setRegisterObj({ ...registerObj, [updateType]: value });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
          <div>
            <LandingIntro />
          </div>
          <div className='py-24 px-10'>
            <h2 className='text-2xl font-semibold mb-2 text-center'>Register</h2>
            {success && <div className="text-center text-green-500 mb-4">Registration successful!</div>}
            <form onSubmit={submitForm}>
              <div className="mb-4">
                <InputText defaultValue={registerObj.name} updateType="name" containerStyle="mt-4" labelTitle="Name" updateFormValue={updateFormValue} />
                <InputText defaultValue={registerObj.email} updateType="email" containerStyle="mt-4" labelTitle="Email" updateFormValue={updateFormValue} />
                <InputText defaultValue={registerObj.password} type="password" updateType="password" containerStyle="mt-4" labelTitle="Password" updateFormValue={updateFormValue} />
                <InputText defaultValue={registerObj.confirmPassword} type="password" updateType="confirmPassword" containerStyle="mt-4" labelTitle="Confirm Password" updateFormValue={updateFormValue} />
              </div>
              {error && <ErrorText className="mt-8">{error}</ErrorText>}
              <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>Register</button>
              <div className='text-center mt-4'>Already have an account? <Link to="/login"><span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Login</span></Link></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import bg from '../../assets/bg.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
  
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');
  const [succcesLogin, setSuccesLogin] = useState('');

  const handleLogin = e => {
      e.preventDefault();

      const form = new FormData(e.currentTarget);
      const email = form.get('email');
      const password = form.get('password');
      
      
  
  
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/;
      if (!passwordRegex.test(password)) {
          setLoginError('Password must contain at least 6 characters and may include letters, numbers, and special characters.');
          return;
      }

      setLoginError('');
      setSuccesLogin('');
      signIn(email, password)
          .then(result => {
              console.log(result.user);
              setSuccesLogin('User Login Suucesfully')
              navigate(location?.state ? location.state : '/');
              Swal.fire({
                  icon: 'success',
                  title: 'Login Successful',
                  text: 'You have successfully Login.',
              });
              const user = {email, password};
              fetch('https://assignment-ten-sarvar-ieycy5jmi-misbahs-projects.vercel.app/users', {
                  method: 'POST',
                  headers:{
                      "Content-Type":"application/json"
                  },
                  body: JSON.stringify(user)
              })
              .then(res =>res.json())
              .then(data =>{
                  console.log(data)
              })

          })
          .catch(error => {
              console.error(error);
              setLoginError(error.message);
              Swal.fire({
                  icon: 'error',
                  title: 'Login Error',
                  text: error.message,
              });
          })
  }
  const handleGoogleSignIn = () => {
      signInWithGoogle().then(result => {
          console.log(result.user);
          navigate(location?.state ? location.state : '/');
      })

  }





  return (
    <div style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
  }}>
    <div className='flex justify-center items-center min-h-screen bg-opacity-25' >
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-blue-300 text-gray-900 bg-opacity-50'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Log In</h1>
          <p className='text-sm text-gray-800'>
            Sign in to access your account
          </p>
        </div>
        <form
        onSubmit={handleLogin}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='current-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
              Continue
            </button>
          </div>
        </form>
        <div className='space-y-1'>
          <button className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
            Forgot password?
          </button>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-800'>
          Don&apos;t have an account yet?{' '}
          <Link
            to='/signup'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
    </div>
  )
}

export default Login

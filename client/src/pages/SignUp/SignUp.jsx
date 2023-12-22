import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import bg from '../../assets/bg.png'
import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
  
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState('');
  const [succesReg, setSuccesReg] = useState('');

  const handleRegister = e => {

      e.preventDefault();
      console.log(e.currentTarget)
      const form = new FormData(e.currentTarget);
      const name = form.get('name');
      const photo = form.get('photo');
      const email = form.get('email');
      const password = form.get('password');


      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/.test(password)) {

          setRegisterError('Password must contain at least 6 characters and may include letters, numbers, and special characters.');
          Swal.fire({
              icon: 'error',
              title: 'Registration Error',
              text: 'Password must contain at least 6 characters and may include letters, numbers, and special characters.'
          });
          return;
      }

      console.log(email, password);
      setRegisterError('');
      setSuccesReg('');


      createUser(name, photo, email, password)
          .then((userCredential) => {
              const user = userCredential.user;

              setSuccesReg('user create Successfully')
              console.log('User registered successfully:', user);
              navigate('/login');
              Swal.fire({
                  icon: 'success',
                  title: 'Registration Successful',
                  text: 'You have successfully registered.'
              });
              return;

          })
          .catch((error) => {
              console.error('Registration error:', error.message);

              setRegisterError(error.message);
              Swal.fire({
                  icon: 'error',
                  title: 'Registration Error',
                  text: error.message
              });
              return;

          });
  }
  return (
    <div style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
  }}>
    <div className='flex justify-center items-center min-h-screen bg-opacity-30' >
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-blue-300 text-gray-900 bg-opacity-50'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-800'>Welcome to Task Mangement</p>
        </div>
        <form
        onSubmit={handleRegister}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            {/* <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div> */}
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
                autoComplete='new-password'
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
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-800'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-800'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
    </div>
  )
}

export default SignUp

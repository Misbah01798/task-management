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


      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6}$/.test(password)) {

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
    <div>
            

            <div className="hero bg-base-200" style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
            }}>
                <div className="">
                    <div className="text-center">
                        <h1 className="text-5xl text-white font-bold">Please Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-50">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>


                        </form>
                        {/* {
                        registerError && <p>{registerError}</p>
                    }
                    {
                        succesReg && <p>{succesReg}</p>
                    } */}
                        <p className="text-center text-xl">Already Have an Account <Link to='/login' className="text-red-400 font-bold">Login</Link></p>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default SignUp

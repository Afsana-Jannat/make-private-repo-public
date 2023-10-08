import Navbar from '../../components/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';
import AnotherLoginSide from '../../components/AnotherLoginSide/AnotherLoginSide';
import { toast } from 'react-toastify';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        if (password.length < 6) {
            return toast.error("password should be at least 6 characters longs");
          }
        
          // Check if the password contains at least one alphabet character (a-zA-Z)
          if (!/[a-zA-Z]/.test(password)) {
            return toast.error("password need at least 1 alphabet");
          }
        
          // Check if the password contains at least one symbol character
          if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            return toast.error("password need at least 1 symbol");
          }
        signIn(email, password)
        .then(() =>{
            toast.success("log in successs")

            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            toast.error(error.message)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='text-center items-center'>
            <h2 className='text-3xl my-10'>Please Login</h2>
            
            <form onSubmit={handleLogin} className="md:w-3/4 lg:1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-outline btn-secondary">Login</button>
                </div>
                
            </form>
            <p className='mt-4 text-xl'>Do not have an account? 
            <Link 
            className='text-blue-400 font-bold'
             to="/register">Register</Link></p>
             <AnotherLoginSide></AnotherLoginSide>
            </div>
            

        </div>
    );
};

export default Login;
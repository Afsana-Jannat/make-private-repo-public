import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';
import AnotherLoginSide from '../../components/AnotherLoginSide/AnotherLoginSide';

const Login = () => {
    const {signIn} = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
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
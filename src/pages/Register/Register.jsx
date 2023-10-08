
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const {createUser, handleUpdateProfile} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email');
        const img = form.get("img")
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

        //  create user,
        createUser(email, password)
        .then(result => {
            // updateProfile(auth)
            
            handleUpdateProfile(name, img)
            .then(() =>{
                toast.success("user Create success")
                navigate("/")
            })
        })
        .catch(error =>{
            toast.error(error.message)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='text-center items-center'>
            <h2 className='text-3xl my-10'>Please Register</h2>
            <form onSubmit={handleRegister} className="md:w-3/4 lg:1/2 mx-auto">
            <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">ImageURL</span>
                    </label>
                    <input type="text" name='img' placeholder="ImageURL" className="input input-bordered" required />
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
                    <button className="btn btn-outline btn-secondary">Register</button>
                </div>
            </form>
            <p className='mt-4 text-xl'>Already have an account? <Link className='text-blue-400 font-bold' to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
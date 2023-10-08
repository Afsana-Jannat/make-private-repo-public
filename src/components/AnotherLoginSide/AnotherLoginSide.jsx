
import { useContext } from 'react';
import {FaGoogle} from 'react-icons/fa'
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const AnotherLoginSide = () => {
    const {googleHandleLogin} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const handleGoogleLogin = () =>{
        googleHandleLogin()
        .then(()=>{
            toast.success("log in successs")
            navigate(location?.state ? location.state : '/');

        })
        .catch(error =>{
            toast.error(error.message)
        })
    }
    return (
        <div>
            <div className="text-center mt-6 p-4 space-y-3">
                <h2 className="text-3xl font-bold">
                    Login with</h2>
                    <button onClick={handleGoogleLogin} className="btn btn-outline w-56">
                        <FaGoogle></FaGoogle>
                        Login with Google
                    </button>
            </div>
        </div>
    );
};

export default AnotherLoginSide;
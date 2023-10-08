
import {FaGoogle} from 'react-icons/fa'
const AnotherLoginSide = () => {
    return (
        <div>
            <div className="text-center mt-6 p-4 space-y-3">
                <h2 className="text-3xl font-bold">
                    Login with</h2>
                    <button className="btn btn-outline w-56">
                        <FaGoogle></FaGoogle>
                        Login with Google
                    </button>
            </div>
        </div>
    );
};

export default AnotherLoginSide;
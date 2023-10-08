import { Outlet } from "react-router-dom";
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div className="">
            <Outlet></Outlet>
            <ToastContainer autoClose={900}></ToastContainer>
        </div>
    );
};

export default Root;
import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import EventCart from "../../components/EventCart";


const Services = () => {
    const event = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl font-bold text-center my-4">All events</h2>
            <EventCart eventcart={event}></EventCart>
        </div>
    );
};

export default Services;
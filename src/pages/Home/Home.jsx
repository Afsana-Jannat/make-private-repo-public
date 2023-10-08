
import { useLoaderData } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import EventCart from '../../components/EventCart';
import Footer from '../../components/Footer';


const Home = () => {

    const eventcart = useLoaderData()
    console.log(eventcart)
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <h2 className='text-3xl text-zinc-500 text-center mt-6 font-bold'><i>Community and Cultural Events</i></h2>
            <EventCart eventcart={eventcart}></EventCart>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;
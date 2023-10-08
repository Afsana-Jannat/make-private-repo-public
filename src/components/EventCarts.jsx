
import { Link } from 'react-router-dom';

const EventCarts = ({events}) => {
    const {id, event_type, description, image} = events || {}

    return (
        <div>
            <div className="py-10 md:ml-20 relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
      {event_type}
    </h6>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      {description}
    </p>
    <a className="inline-block" href="#">
    <Link 
            className='text-blue-300 font-bold'
             to={`/events/${id}`}>Read More...</Link>
    </a>
  </div>
</div>
        </div>
    );
};

export default EventCarts;
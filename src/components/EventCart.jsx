import EventCarts from "./EventCarts";


const EventCart = ({eventcart}) => {
    console.log(eventcart)
    return (
        <div>
            <div className="items-center mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 ml-10">
                {
                    eventcart ?.map(events => <EventCarts 
                        key={events.id}
                        events={events}></EventCarts>)
                }
            </div>
        </div>
    );
};

export default EventCart;

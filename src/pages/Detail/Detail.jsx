
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";


const Detail = () => {
    const {id} = useParams()

     const [detail, setDetail] = useState({})

     useEffect(() => {
        fetch(`/events.json`)
        .then(res =>res.json())
        .then(events=>{
            const event = events.find(item => item.id == id)
            setDetail(event)
        })
     },[id])

     console.log(detail)

    //  const {id, event_type, image} = detail || {} 
    
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2>Detail page</h2>

               <img src={detail.image} alt="" />
            </div>
        </div>
    );
};

export default Detail;
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";



const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=" mb-8">
            <img className='mt-10' src="https://i.ibb.co/37s5FQy/upcoming-events4.png" alt="" />
             <br />
             <i className="mt-10 text-3xl font-extrabold">Fundraising and charity community event ideas</i>
             <br />
             <br />
             <i className="mt-10 text-xl">Bring your community together through giving. Host creative charity events that will entice your target audience and boost fundraising efforts. From golf tournaments and marathons to car washes and bake sales, 
                organizers have a lengthy list to choose from. Here are three of our favorite fundraising community event ideas.</i>
                <br />
                <br />
                <i 
                className="mt-10 text-3xl font-extrabold">1. Organize a community-wide donation drive.</i>
                <br />
                <br />
                <i className="mt-10 text-xl">Donation drives are a fantastic way to bring the community together through a common goal of helping others in need.
                     One simple way to do this is to organize a community-wide charity drive in a central, easy-to-access location. </i>
                <br />
                <br />
                <i className="mt-10 text-3xl font-extrabold">2. Invite residents to attend a black tie gala and silent auction. </i>
                <br />
                <br />
                <i className="mt-10 text-xl">Give donors, investors, clients, and community members a reason to open their hearts and checkbooks by hosting a charity gala. Select an impressive special event venue for the gala, book thrilling entertainment, and
                     include a silent auction to drive additional funds. </i>
                     <br />
                     <br />
                <i className="mt-10 text-3xl font-extrabold">3. Organize a cultural food festival.</i>
                <br />
                <br />
                <i className="mt-10 text-xl">Celebrate a variety of cultures and backgrounds by organizing a cultural food festival. For example, invite members of the community to travel the world via their 
                    tastebuds as they explore delicious cultural cuisines.</i>
                    <br />
                    <br />
            <i className="mt-10 text-3xl font-extrabold">4. Organize monthly regional mega-markets.</i>
            <br />
            <br />
            <i className="mt-10 text-xl">Host mega-market events to drive shoppers, tourists, and passersby to your city center. Giant farmers markets, craft fairs, and seed swaps can attract attention from near and far. Whichever market style you choose,
                 advertise throughout the region and encourage individuals from surrounding communities to attend and participate. </i>
            </div>

            <Footer></Footer>
        </div>
        
    );
};

export default Blog;
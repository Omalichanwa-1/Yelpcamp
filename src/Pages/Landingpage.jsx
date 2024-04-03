import { Link } from "react-router-dom";
import SearchpageN from "./SearchpageN";
const Landingpage = () => {


    return(
     
        <div className=" bg-gary-500  flex-col md:flex  md:justify-between md:gap-9  ">
             <img src="\Logo.svg" alt="Logo" className=" align-middle pt-5 pb-5 md:pb-10  md:pt-0 md:size-32 md:pl-18 md:ml-36 "  /> 
             <div className=" object-cover md:absolute md:inset-y-0 md:right-1 md:object-contain md:w-2/5 md:h-1/2:"><img src="\Hero Image.jpg" alt="Hero" /></div>
           
            <div className=" md:absolute md:inset-y-0 md:left-40 md:items-center "> 
              <h1 className="md:pt-20 font-bold text-4xl"> Explore the best</h1>
              <h1 className="font-bold text-4xl"> camps on Earth</h1>
             <div className=" pt-4"> <p>YelpCamp is a curated list of the best camping spots on</p> 
                <p>Earth. Unfiltered and unbiased reviews.</p>
                
                  <div className=" gap-11 ">
                  <div className="flex gap-2 pt-3"> <img src="\Checkmark.svg" alt="checkmark"/>
                   <p>Add your own camp suggestions.</p> 
                   </div>
                   <div className="flex  gap-2 pt-3">
                   <img src="\Checkmark.svg" alt="checkmark"/>
                   <p>Leave reviews and experiences.</p>
                   </div> 
                   <div className="flex  gap-2 pt-3 pb-3">
                   <img src="\Checkmark.svg" alt="checkmark"/>
                    <p className=" pb-3">See locations for all camps.</p>
                    </div>
                    <Link to ='/search'><button className=" bg-black border-4 border-black text-white ">View Campground</button></Link>
                    <p className=" pt-5">Partnered with:</p>
                    </div>
                    <div className="flex ">
                        <img src="\Airbnb.svg" alt="Airbnb"  />
                        <img src="\Booking.svg" alt="Booking"  />
                        <img src="\Plum Guide.svg" alt="Guide"  />
                    </div>

                </div>
            
           </div>
          

        
        </div>

    )
}
export default Landingpage ;

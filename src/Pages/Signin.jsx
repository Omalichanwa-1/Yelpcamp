import { Link } from "react-router-dom";

const Signin=() =>{
    return(
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 ">
                <div className=" mt-5  mr-3 ml-3  sm:mr-10 sm:ml-10 md:mr-20 md:ml-20"> {/*The writing side */}
                   <div className="flex justify-between">
                    <img src="/Logo.svg" alt=".." />
                    <a href="https://main--yelpcampcodewithomali.netlify.app/search" className=" flex items-center" ><span class="ml-2 text-xl">&#8592;</span> Back to campground</a>
                    </div> 
                    <h1 className=" pt-5 md:pt-20  sm:text-4xl font-bold text-2xl ">Start exploring camps from all over the world.</h1>
                    <h1 className=" pb-3 pt-3">Username</h1>
                    <input className=" bg-slate-50 pr-32 sm:pr-48 md:pr-48 pt-2 pb-2" type="text" placeholder="johndoe_91" />
                    <h1 className=" pb-3 pt-3">Password</h1>
                    <input className=" bg-slate-50 pr-32 sm:pr-48 md:pr-48 pt-2 pb-2" type="text" placeholder="Enter your password" />
                    <div className=" pt-5"><Link to='/searchpage' ><button className=" bg-black text-white pl-32 pr-32  sm:pl-48 sm:pr-48 md:pl-48 md:pr-48 pt-2 pb-2">Login</button></Link></div>
                    <div className=" flex pt-2 md:pb-32 pb-3">
                        <p>Not yet a user yet?</p>
                        <a href="https://main--yelpcampcodewithomali.netlify.app/Signup" className=" text-blue-400 underline"> create an account</a>
                    </div>
                </div>
                <div className=" bg-amber-50 md:pl-28 md:pr-28 md:pt-60 sm:pt-16 sm:pb-16 sm:pr sm:pl-3 " >{/* second container*/} 
                  <p className=" font-bold">"Yelpcamp has honestly saved me hours of research time ,and the camps on here are definitely well picked and added."</p>
                 <div className="flex">{/*testimonial*/}
                    <img src="/User Testimonial.svg" alt=".." />
                    <div>
                        <p className=" font-bold"> May Andrews</p>
                        <p>Professional Hiker</p>
                    </div>
                 </div> 
                </div>
            </div>
        </div>
    )
}
export default Signin ;
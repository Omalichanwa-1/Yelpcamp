import Navbarl from "../Components/Navl";
import Search from "../Components/Search";
import TopHeader from "../Components/TopHeader";

const Searchpage=()=>{
    return(
        <div>
        <TopHeader/> 
      <div className=" mr-5 ml-5 md:mr-20 md:ml-20">
       
        <Navbarl/>
        <div className=" bg-amber-50 pl-10 pt-10 pb-10">
          <h1 className=" font-bold text-4xl">Welcome to yelpcamp !</h1>
          <p className=" ">View our hand-picked campground from all over </p>
          <p>the world,or add your own.</p>
          <div className=" flex  pt-3 pb-3 space-x-3"> 
          <Search/>
          <button className=" bg-black text-white px-2 py-2">Search</button></div>
          <a href="https://main--yelpcampcodewithomali.netlify.app/" className=" underline">Or add your own campground</a>
          </div>
          <div className=" pt-16">
            <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/*general card*/}
              <div className=" border pt-4 pb-4 pl-4 pr-4 " > 
              {/*mount ulap*/}
                <img src="/Mount Ulap.jpg" alt=".." />
                <h1 className=" font-bold">Mount Ulap</h1>
                <p className=" text-wrap">One of the most famous hikes in Benguet is Mount Ulap in Itogon</p>
                <button className=" border font-bold pr-16 pl-16 pt-3 pb-3 items-center mt-3  "> View Campground</button>
              </div>
              <div  className=" border pt-4 pb-4 pl-4 pr-4 ">
                {/* Calaguas Island*/}
                <img src="/Calaguas Island.jpg" alt=".." />
                <h1 className=" font-bold">Calaguas Islands</h1>
                <p className=" text-wrap">A paradise of islands that can  rival the white sand beauty  of Boracay</p>
                <button className=" border  font-bold pr-16 pl-16 pt-3 pb-3 items-center mt-3  "> View Campground</button>
              </div>
              <div  className=" border pt-4 pb-4 pl-4 pr-4 ">
                {/*Onay Beach*/}
                <img src="/Onay Beach.jpg" alt=".." />
                <h1 className=" font-bold">Onay Beach</h1>
                <p className=" text-wrap">This is one of the best beach camping sites,beautiful and pristine</p>
                <button className=" border font-bold pr-16 pl-16 pt-3 pb-3 items-center mt-3  "> View Campground</button>
              </div>
              <div  className=" border pt-4 pb-4 pl-4 pr-4 ">
                {/*Seven Sisters Waterfall*/}
                <img src="/Seven Sisters Waterfall.jpg" alt=".." />
                <h1 className=" font-bold">Seven Sisters Waterfall</h1>
                <p className=" text-wrap"> Seven Sisters Waterfall is the 39th tallest waterfall in Norway.</p>
                <button className=" border font-bold pr-16 pl-16 pt-3 pb-3 items-center mt-3  "> View Campground</button>
              </div>
              <div  className=" border pt-4 pb-4 pl-4 pr-4 ">
                {/*Latik Riverside*/}
                <img src="/Latik Riverside.jpg" alt=".." />
                <h1 className=" font-bold">Latik Riverside</h1>
                <p className=" text-wrap">Philippines is one of the most dazzling countries in all Asia.</p>
                <button className=" border font-bold pr-16 pl-16 pt-3 pb-3 items-center mt-3  "> View Campground</button>
              </div>
              <div  className=" border pt-4 pb-4 pl-4 pr-4 ">
                {/*Buloy Springs*/}
                <img src="/Onay Beach.jpg" alt=".." />
                <h1 className=" font-bold">Buloy Springs</h1>
                <p className=" text-wrap">This is one of the best beach camping sites ,beautiful and pristine</p>
                <button className=" border font-bold pr-16 pl-16 pt-3 pb-3 items-center mt-3  "> View Campground</button>
              </div>
            </div>
          </div>
          <div className=" pt-12 pb-12"><img src="/Logo.svg" alt=".." /></div>
        </div>
      </div>
    
      )
}
export default Searchpage;

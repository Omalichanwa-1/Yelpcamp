import Navbarl from "../Components/Navl";

const Individual=()=>{
    return(
          <div>
            <Navbarl/>
        <div className=" md:flex align-middle ml-40"> 
           <div className=" hidden md:block  ">
                <img src="/Map.png" alt="" className=" border-2  border-dotted pt-8 pl-8 pr-8 pb-8 w-3/4 " />
                
            </div> 
            
          <div className=" border-2  border-dotted pl-10 pb-10 pt-10 pr-10">
                <img src="/Mount Ulap.jpg" alt="" className="" />
                <h1>Mount Ulap</h1>
                <p className=" text-xs font-extralight text-wrap"> Mount ulap is a 7.7 kilometer moderately trafficked point to point trail </p>
                  <p className="  text-xs font-extralight text-wrap"> located near Tuba ,Benguet,Phillippines that offers the chances to see</p> 
                  <p className="   text-xs font-extralight text-wrap"> wildlife and is rated as moderate .The trail is primarily used for hiking. </p>
                 <p>Submitted by Andrew Mike </p>
            </div>
           
       
          
        </div>
        </div>
    )
}
export default Individual;
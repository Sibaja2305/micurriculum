import Hero from "@/components/hero";
import userImg from '/public/image/programador.jpg'
import JobInformation from "@/components/jobInformation";
import Information from "@/components/information";
export default function Curriculum() {
   
    return (
    <div >
        <div>
            <Information />
        </div>
      <div className="flex justify-center pr-24 pb-16 pt-24 ml-80 text-black">
        <JobInformation/> 
      </div>
    </div>
        
       
        
        
         
        
        


    );
  }
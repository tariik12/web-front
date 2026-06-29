import { Search } from "lucide-react";
import secondMenu from "../../../public/data/navigation/secondmenu.json"
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { useState } from "react";

const SecondMenu = () =>{
const {scrollY} = useScroll ();
const [hidden, setHidden] = useState(false)

useMotionValueEvent (scrollY, "change", (current) =>{
    const previous = scrollY.getPrevious() ?? 0 
    if(current > previous && current > 5){
        setHidden(true)
    } else{
        setHidden(false)
    }
})
    return(
         <div className={`${hidden?"border w-[70vh] mx-auto py-2 rounded-full shadow-xl  -mt-14 px-5":"border w-[140vh]  mx-auto rounded-full shadow-xl  mt-5 "}`}>

        <div className={`grid grid-cols-3 `}>
        {
            secondMenu.map((menu, index) =>(
            <div>
              

               <div className="  ">
                    <div >
                        {hidden?
                        <div className={`flex  items-center justify-center ${index>0?"border-l-3 ps-[24px]":""}`}>
                            <div>
                           {menu.media &&  <img className="w-10" src={menu?.media} alt="home" /> }
                            <p>{menu.title}</p>

                            </div>
                            {index >1 && <div className="pe-2 ">
<Search size={40} className="border p-2   rounded-full bg-[#DC1362] text-white"/>
        </div>}
                            </div>
                            :
                            <div className={` ${index>1 && "flex justify-between items-center"} hover:bg-[#DDDDDD] py-[15px] hover:rounded-full `}>
                                <div className={`${index>0?" ps-[24px]":"px-5"}`}>
                                <p className="font-[12px] w-full font-airbnb font-medium">{menu.title}</p> 
                                <p className="font-[14px] w-full font-airbnb font-normal">{menu.description}</p>
                                    
                                </div>
                                {index >1 && <div className="pe-2 ">
<Search size={40} className="border p-2   rounded-full bg-[#DC1362] text-white"/>
        </div>}
                            </div>
                        }
                    </div>
                 </div>
               


            </div>
            ))
        }
        
        </div>
</div>
    )
}

export default SecondMenu;
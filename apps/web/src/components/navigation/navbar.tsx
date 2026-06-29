import Container from "@workspace/ui/components/container";
import logo from "../../../public/asset/navigation/airbnb-logo.svg"
import menubar from "../../../public/asset/navigation/menu-bar.svg"
import world from "../../../public/asset/navigation/global.svg"
import NavbarMainMenu from "./navbarMainMenu";
import SecondMenu from "./secondMenu";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

const Navbar =() =>{
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
        <div className="border-b bg-[#F7F7F7] py-[17px] w-full sticky top-0 z-1  ">

        <Container  >
<div className="flex justify-between items-center  ">

            <div className="sticky top-0 z-1 ">
            <img className="text-red-500" src={logo} alt="" />
        </div>
        <div className={hidden ? "-mt-44":""}>
            <NavbarMainMenu />
       
        </div>
        <div className="flex justify-end gap-5 items-center sticky top-0 z-1 ">
            <a href=""> Become a host</a>
            <div className="rounded-full p-2 bg-[#EBEBEB] flex items-center justify center">


            <img className="w-[16px]  h-[16px]" src={world} alt="" />
            </div>
            <div className="rounded-full p-2 bg-[#EBEBEB] flex items-center justify center">


            <img className="w-[16px]  h-[16px]" src={menubar} alt="" />
            </div>
        </div>
</div>


            <SecondMenu />

    
            
        </Container>
        </div>
    )
}

export default Navbar; 
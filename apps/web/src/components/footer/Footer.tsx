import { FooterInspiration } from "./footerInspiration"
import FooterSupport from "./footerSupport";
import privacy from '../../../public/asset/footer/privacy.svg'
import f from '../../../public/asset/footer/f.svg'
import ins from '../../../public/asset/footer/in.svg'
import x from '../../../public/asset/footer/x.svg'
import g from '../../../public/asset/navigation/global.svg'
import Container from "@workspace/ui/components/container";
const Footer =() =>{


    return(

        <div className="pt-[48px] pb-[80px] bg-[#F7F7F7]">
            <Container>
 {/* Footer Title */}
            <h2 className=" text-[#222222] text-[22px] font-medium mb-[4px] font-airbnb tracking-[-0.44px]">Inspiration for future getaways</h2>
            <FooterInspiration/>
            <FooterSupport/>
            <hr/>
            <div className="flex py-[25px] justify-between ">

            <div className=" flex justify-center font-airbnb gap-[9.5px] text-[#222222] ">
                <p>© 2026 Airbnb,Inc.</p>  · <a className="hover:underline"  href="">Privacy</a> · <a className="hover:underline" href="">Terms</a> · <a className="hover:underline" href="">Your Privacy Choices</a>
                 <img className="w-[25px] h-[11px] mt-2" src={privacy} alt="" />
                 </div>
        <div className="flex items-center justify center text-[14px] font-medium font-airbnb gap-[20px] ">
            <div className="flex items-center justify-center gap-2">
        
            <img className="w-[16px] h-[16px] " src={g} alt="" />
                
                <span>English (US)</span></div>
            <span>$ USD </span>
            <div className="gap-[9px] grid grid-cols-3">

            <div className="rounded-full p-2 hover:bg-[#EBEBEB] flex items-center justify center">

            <img className="w-[16px]  h-[16px]" src={f} alt="" />
            </div>
            <div className="rounded-full p-2 hover:bg-[#EBEBEB] flex items-center justify center">

            <img className="w-[16px]  h-[16px]" src={x} alt="" />
            </div>
            <div className="rounded-full p-2 hover:bg-[#EBEBEB] flex items-center justify center">


            <img className="w-[16px]  h-[16px]" src={ins} alt="" />
            </div>
            </div>

        
        </div>
        </div>
            </Container>
           
            </div>
    )
}

export default Footer;
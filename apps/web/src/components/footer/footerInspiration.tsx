import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";
import inspiration  from "../../../public/data/footer/inspiration.json"
import{Button}   from "@workspace/ui/components/button";
import { useState } from "react";
import downArrow from "../../../public/asset/common/down-arrow.svg"
export function FooterInspiration() {
    const [see, setSee] =  useState(false);
    const seeAll = (props:any) =>{
setSee(props? true:false)
    }

    console.log(see)
  return (

    <Tabs defaultValue="Popular">
      <TabsList variant="line">
        {inspiration.map(ins =>(

        <TabsTrigger className="text-[#222222] " key={ins.id} value={ins.title}>{ins.title}</TabsTrigger>
        ))}
   

      </TabsList>
      <hr  className="-mt-2 mb-[33px]"/>
      {
        inspiration.map(inspir =>{
            const displayData = see? inspir.child: inspir.child?.slice(0,17);
            return(
                     <TabsContent className=""  key={inspir.id} value={inspir.title}>
                {displayData?.map((ins) =>(
             <div key={ins.id} className="mb-[24px]">
<p className="text-[#222222] font-airbnb font-medium">{ins.title}</p>
<p className="text-[#6A6A6A]">{ins.description}</p>
                    </div>
                ))}
                <div >
                    {inspir.child.length>16 && !see? <Button onClick={() =>seeAll(true)} variant="outline" className="bg-transparent border-none p-0"> Show More  <img src={downArrow} className="w-[12px] h-[12px]" alt="" />  </Button>:""} 
                   
                </div>
        
      </TabsContent>
            )
        })
      }
    
    </Tabs>
  )
}

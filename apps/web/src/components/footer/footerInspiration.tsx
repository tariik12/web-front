import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";
import inspiration  from "../../../public/data/footer/inspiration.json"
import{Button}   from "@workspace/ui/components/button";
import { useState } from "react";

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

        <TabsTrigger key={ins.id} value={ins.title}>{ins.title}</TabsTrigger>
        ))}
   

      </TabsList>
      <hr  className="-mt-2"/>
      {
        inspiration.map(inspir =>{
            const displayData = see? inspir.child: inspir.child?.slice(0,17);
            return(
                     <TabsContent  key={inspir.id} value={inspir.title}>
                {displayData?.map((ins) =>(
             <div key={ins.id} className="mb-12">
<p>{ins.title}</p>
<p className="text-[#6A6A6A]">{ins.description}</p>
                    </div>
                ))}
                <div >
                    {inspir.child.length>16 && !see? <Button onClick={() =>seeAll(true)} variant="outline" className="bg-transparent border-none"> See All</Button>:""} 
                   
                </div>
        
      </TabsContent>
            )
        })
      }
    
    </Tabs>
  )
}

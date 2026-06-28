
import { Card, CardContent, CardDescription,   CardHeader, CardTitle } from "@workspace/ui/components/card";
import servicesData from "../../../public/data/footer/airbnbservise.json"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@workspace/ui/components/carousel";
import { Badge } from "@workspace/ui/components/badge";
import Container from "@workspace/ui/components/container";
const Services = () =>{


  // Tr
    return(
        <div className="pt-[55px] bg-[#FFFFFF]">
            <Container>

{servicesData.map(services =>(
      <Carousel  className="w-full pb-[42px]">
         {/* Custom Navigation & Pagination */}
         <div className="flex justify-between items-center mb-[14px]">

         <div className="flex gap-[6px]">

        <h1 className="text-[20px] font-semibold text-[#222222]">{services.section}</h1>
        <div className="  rounded-full p-2 bg-[#EBEBEB] ">

        <img className="w-[12px] " src={services.title_arrow_icon} alt="" />
        </div>
</div>
        <div className="flex items-center gap-1 justify-end">
          <CarouselPrevious className="relative static bg-[#EBEBEB] translate-y-0" />
          
          <CarouselNext className="relative static bg-[#EBEBEB] translate-y-0" />
        </div>
         </div>
        {/* Carousel Content */}
        <CarouselContent className="-ml-2 md:-ml-4">
          {services.listings.map((service, index) => (
            <CarouselItem key={index} className="  md:basis-1/7 lg:basis-1/7">
              <div className="">
           {service.type?       <Card className="relative mx-auto w-[100%] max-w-sm pt-0 ga-0">


    

      <CardHeader>
        <div className="flex justify-between items-center w-full bg-cover bg-center bg-no-repeat pb-[77%] rounded-xl p-3"       style={{ backgroundImage: `url(${service.file})` }}
>
    <div>

{service.guest_favorite?       <Badge>Guest Favorite</Badge> : ""}
    </div>

<div className="ml-0 w-[10%]">
            <svg width="" height="" viewBox="0 0 16.00 16.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00016"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#FCFCFC" stroke-width="1.216"> <path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="#00000046"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="#0000008b"></path> </g></svg>

</div>
      
                    </div>
        <CardTitle>{service.type} in  {service.location}</CardTitle>
        <CardDescription>
        {service.price_for_2_nights} for 2 nights  ★ {service.rating} 
        </CardDescription>
      </CardHeader>
      
    </Card>:      <Card className=" relative border h-[23vh] border-4 border-blue-500  mx-auto w-[100%] max-w-sm   rounded-xl  shadow-xl/20 ">   
  <CardHeader>
<div className="  ">
    

            <img className=" w-[70px] h-[10vh]  top-[10%] right-[35%]  absolute rounded-xl border-5 border-[#FFFFFF] shadow-lg" src={service.file[0]} alt="" />
            <img className=" w-[70px] h-[10vh]  top-[20%] right-[15%]  rotate-5  absolute   rounded-xl border-5 shadow-lg  border-[#FFFFFF] " src={service.file[1]} alt="" />
            <img className=" w-[70px] h-[10vh]  top-[25%] right-[40%] -rotate-5 absolute  rounded-xl border-5  shadow-lg  border-[#FFFFFF] " src={service.file[2]} alt="" />   
  
      

    </div>
  </CardHeader>
  <CardContent  className=" flex justify-center w-full  absolute bottom-5">
    <p className=" mx-auto">{service.title}</p>
  </CardContent>

  

    </Card>}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

       
      </Carousel>




    
))}
            </Container>
        </div>
    )
}

export default Services;
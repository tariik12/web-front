import image from "../../../public/asset/service/airbnbservice99.avif"
import inspiration  from "../../../public/data/footer/airbnbservise.json"
const Footer =() =>{
console.log("Inspiration:",inspiration,)


    return(

        <div>Hello Footer


            <img src={image} alt="" />

            {
                inspiration.map(inspir  =>(
                    <div className="border border-5">
    <h1>{inspir.id}</h1>
    <img className="w-4" src={inspir.left_arrow_icon} />
    <div className="grid grid-cols-7">
    {inspir.listings.map(ins =>(
        <div>
            {ins.location}
        </div>
    ))}
    </div>
</div>))
                }
            
        </div>
    )
}

export default Footer;
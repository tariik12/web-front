import airnbFooterData  from "../../../public/data/footer/airbnbfooter.json"

const FooterSupport = () =>{



    return(
        <div className="grid grid-cols-3 py-[32px]">
            {
                airnbFooterData.map(data =>(
                    <div key={data.id} className="text-[#222222]">
                        <h3 className="text-[14px] mb-[18px] font-medium">{data.title}</h3>             
                        <div className="grid grid-cols-1 font-normal ">
                            {data.child.map(data =>(
                                <a className="text-[14px] hover:underline  mb-[18px] " key={data.id} href={data.url}>{data.title}</a>
                            ))}

                        </div>
                    </div>
                ))
            }

        </div>
    )

}

export default FooterSupport
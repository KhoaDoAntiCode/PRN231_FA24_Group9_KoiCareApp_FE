
// import { ImageSlider } from '../../slider'
import { Link } from "react-router-dom"
import { PetType } from "@/schema/pet.schema"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"



const PetDetailSection = ({
    id,
    petName,
    age, 
    breed,
    gender,
    description,
    rescueDate,
    shelterName,
    petImages: imageSrc
 }
    : PetType) => {
  return (
        
        <div className='grid grid-rows-3 grid-flow-col bg-white rounded-[-20px] justify-center '>     
            <div className="row-span-3 w-[560px] h-[476px] rounded-[10px] py-[-22px] pl-10 "> 
               {/* <ImageSlider images={slides}/> */}
                <div>
                    <img key={imageSrc[0].image} src={imageSrc[0].image} alt={petName} className="w-2/3 h-2/3 object-cover m-2 rounded-lg" />
                </div>

                <div className="flex flex-wrap ">
                    <Carousel>
                            <CarouselContent>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <img key={imageSrc[0].image} src={imageSrc[0].image} alt={petName} className="w-32 h-32 object-cover m-2 rounded-lg" />
                            </CarouselItem>
                            {imageSrc[1]?.image && (
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <img 
                                    key={imageSrc[1].image} 
                                    src={imageSrc[1].image} 
                                    alt={petName} 
                                    className="w-32 h-32 object-cover m-2 rounded-lg" 
                                />
                            </CarouselItem>
                        )}
                            {imageSrc[2]?.image && (
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <img 
                                    key={imageSrc[2].image} 
                                    src={imageSrc[2].image} 
                                    alt={petName} 
                                    className="w-32 h-32 object-cover m-2 rounded-lg" 
                                />
                            </CarouselItem>
                        )}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />                       
                    </Carousel>
                </div>
            </div>
            <div className="col-span-2">
                    <Breadcrumb className="pb-4">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/components">PetList</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>PetDetails</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex-col justify-start items-start gap-0.5 flex">
                        <div className="w-[302px] text-[#99a2a5] text-sm font-medium font-['SVN-Gilroy'] leading-tight bold">SKU : {id}</div>
                        <div className="w-[302px] text-[#00171f] text-2xl font-bold font-['SVN-Gilroy'] leading-9">{petName}</div>
                    </div>
          
                </div> 
            <div className='row-span-2 grid grid-row'> 
                <button >
                    <Link to={`/adoption/${id}`}>
                        <div className="h-11 px-7 pt-3.5 pb-2.5 bg-[#003459] rounded-[57px] justify-center items-center gap-2.5 inline-flex">
                            <div className="text-[#fcfcfc] text-base font-bold font-['SVN-Gilroy'] leading-normal">Contact us</div>
                        </div>
                    </Link>
                </button>
                <div className="flex flex-col justify-start items-start">
                    {[
                        { label: 'SKU', value: id },
                        { label: 'Gender', value: gender },
                        { label: 'Age', value: age },
                        { label: 'Breed', value: breed },
                        { label: 'Rescue Date', value: '10-10-2024' },
                        { label: 'Description', value: description },
                    ].map(({ label, value }) => (
                        <div key={label} className="w-[517px] py-2 border-b border-[#ebedef] flex">
                            <div className="w-[100px] h-[26px] px-2 pt-1 pb-0.5 flex-shrink-0 flex items-center">
                                <div className="text-[#667479] text-sm font-black font-['SVN-Gilroy'] leading-tight">{label}:</div>
                            </div>
                            <div className="flex-1 h-[26px] px-2 pt-1 pb-0.5 flex items-center">
                                <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">{value}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default PetDetailSection

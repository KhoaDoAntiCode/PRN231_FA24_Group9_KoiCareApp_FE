
import { ImageSlider } from '../../slider'
import { Link } from "react-router-dom"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"


type Props = { 
        id: string
        petName : string 
        age : string 
        breed : string
        gender : string
        description : string
        recuseDate : Date
        shelterName : string
        imageSrc : string
        
}
const PetDetailSection = ({
    id,
    petName,
    age, 
    breed,
    gender,
    description,
    recuseDate,
    shelterName,
    imageSrc
 }
    : Props) => {
        const slides = [
        {    
            url: 'https://chocanh.vn/wp-content/uploads/hinh-anh-cho-con-4.jpg',
            alt: 'Happy pets and their owners',
        },
        {
            url: 'https://th.bing.com/th/id/OIP.9WUe6RukVy7IrjFwkX8wqgHaD4?w=334&h=180&c=7&r=0&o=5&dpr=2.5&pid=1.7',
            alt: 'Happy pets and their owners',
        },
        {
            url: 'https://th.bing.com/th/id/OIP.cGnPlLdjL7kwWbi7aqctwAHaFj?w=206&h=180&c=7&r=0&o=5&dpr=2.5&pid=1.7',
            alt: 'Happy pets and their owners',
        },
    
      ];
  return (
        <div className='flex flex-row p-5 m-auto'>     
            <div className="flex flex-col w-[560px] h-[476px] rounded-[10px] py-[-22px] pl-[-20px] pr-[-34px]"> 
               <ImageSlider images={slides}/>
            </div>
            <div className='grid grid-row gap-5'> 
                <Breadcrumb className='pb-4'>
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
                <div className="flex-col justify-start items-start gap-1.5 flex">
                    <div className="flex-col justify-start items-start gap-0.5 flex">
                        <div className="w-[302px] text-[#99a2a5] text-sm font-medium font-['SVN-Gilroy'] leading-tight bold">SKU : {id}</div>
                        <div className="w-[302px] text-[#00171f] text-2xl font-bold font-['SVN-Gilroy'] leading-9">{petName}</div>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start inline-flex">
                    <div className="w-[517px] py-2 border-b border-[#ebedef] justify-start items-start inline-flex">
                        <div className="h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-center gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">SKU: </div>
                        </div>
                        <div className="grow shrink basis-0 h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-start gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">{id}</div>
                        </div>
                    </div>
                    <div className="w-[517px] py-2 border-b border-[#ebedef] justify-start items-start inline-flex">
                        <div className="h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-center gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">Gender: </div>
                        </div>
                        <div className="grow shrink basis-0 h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-start gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">      {gender}</div>
                        </div>
                    </div>
                    <div className="w-[517px] py-2 border-b border-[#ebedef] justify-start items-start inline-flex">
                        <div className="h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-center gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">Age: </div>
                        </div>
                        <div className="grow shrink basis-0 h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-start gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight"> {age}</div>
                        </div>
                    </div>
                    <div className="w-[517px] py-2 border-b border-[#ebedef] justify-start items-start inline-flex">
                        <div className="h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-center gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">Breed: </div>
                        </div>
                        <div className="grow shrink basis-0 h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-start gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight"> {breed}  </div>
                        </div>
                    </div>
                    <div className="w-[517px] py-2 border-b border-[#ebedef] justify-start items-start inline-flex">
                        <div className="h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-center gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">Recuse Date: </div>
                        </div>
                        <div className="grow shrink basis-0 h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-start gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">10-5-2024</div>
                        </div>
                    </div>
                    <div className="w-[517px] py-2 border-b border-[#ebedef] justify-start items-start inline-flex">
                        <div className="h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-center gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight"> Decription: </div>
                        </div>
                        <div className="grow shrink basis-0 h-[86px] px-[11px] pt-1 pb-0.5 justify-start items-start gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">{description}</div>
                        </div>
                    </div>

                </div>
                    <button >
                        <Link to={`/adoption/${id}`}>
                        <div className="h-11 px-7 pt-3.5 pb-2.5 bg-[#003459] rounded-[57px] justify-center items-center gap-2.5 inline-flex">
                            <div className="text-[#fcfcfc] text-base font-bold font-['SVN-Gilroy'] leading-normal">Contact us</div>
                        </div>
                        </Link>
                    </button>
            </div>
        </div>
  )
}

export default PetDetailSection

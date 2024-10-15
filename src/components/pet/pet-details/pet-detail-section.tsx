
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
            url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
            alt: 'Happy pets and their owners',
        },
        {
            url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
            alt: 'Happy pets and their owners',
        },
        {
            url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
            alt: 'Happy pets and their owners',
        },
    
        {
          url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
          alt: 'Happy pets and their owners',
        },
        {
          url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
          alt: 'Happy pets and their owners',
        },
      ];
  return (
        <div className='flex flex-row p-5 m-auto'>     
            <div className="flex flex-col w-[560px] h-[476px] rounded-[10px] py-[-22px] pl-[-20px] pr-[-34px]"> 
               <ImageSlider images={slides}/>
               <img src = {imageSrc} alt="Pet Image" className="w-full h-full object-cover"/>
            </div>
            <div className='gap-5'> 
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
                        <div className="w-[302px] text-[#99a2a5] text-sm font-medium font-['SVN-Gilroy'] leading-tight">SKU {id}</div>
                        <div className="w-[302px] text-[#00171f] text-2xl font-bold font-['SVN-Gilroy'] leading-9">{petName}</div>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start inline-flex">
                    <div className="w-[517px] py-2 border-b border-[#ebedef] justify-start items-start inline-flex">
                        <div className="h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-center gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">SKU</div>
                        </div>
                        <div className="grow shrink basis-0 h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-start gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">{id}</div>
                        </div>
                    </div>
                    <div className="w-[517px] py-2 border-b border-[#ebedef] justify-start items-start inline-flex">
                        <div className="h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-center gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">Gender</div>
                        </div>
                        <div className="grow shrink basis-0 h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-start gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">{gender}</div>
                        </div>
                    </div>
                    <div className="w-[517px] py-2 border-b border-[#ebedef] justify-start items-start inline-flex">
                        <div className="h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-center gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">Age</div>
                        </div>
                        <div className="grow shrink basis-0 h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-start gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">{age}</div>
                        </div>
                    </div>
                    <div className="w-[517px] py-2 border-b border-[#ebedef] justify-start items-start inline-flex">
                        <div className="h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-center gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">Breed</div>
                        </div>
                        <div className="grow shrink basis-0 h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-start gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">{breed}</div>
                        </div>
                    </div>
                    <div className="w-[517px] py-2 border-b border-[#ebedef] justify-start items-start inline-flex">
                        <div className="h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-center gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">Recuse Date</div>
                        </div>
                        <div className="grow shrink basis-0 h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-start gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">{recuseDate.toLocaleDateString()}</div>
                        </div>
                    </div>
                    <div className="w-[517px] py-2 border-b border-[#ebedef] justify-start items-start inline-flex">
                        <div className="h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-center gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">Decription</div>
                        </div>
                        <div className="grow shrink basis-0 h-[86px] px-[11px] pt-1 pb-0.5 justify-start items-start gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">{description}</div>
                        </div>
                    </div>
                    <div className="w-[517px] py-2 border-b border-[#ebedef] justify-start items-start inline-flex">
                        <div className="h-[26px] px-[11px] pt-1 pb-0.5 justify-start items-center gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">Shelter</div>
                        </div>
                        <div className="grow shrink basis-0 h-[86px] px-[11px] pt-1 pb-0.5 justify-start items-start gap-2.5 flex">
                            <div className="text-[#667479] text-sm font-medium font-['SVN-Gilroy'] leading-tight">{shelterName}</div>
                        </div>
                    </div>
                </div>
                <button>
                    <Link to ={`/adoptionform`} />
                </button>
            </div>
        </div>
  )
}

export default PetDetailSection

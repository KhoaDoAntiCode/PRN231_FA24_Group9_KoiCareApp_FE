
import { ImageSlider } from '@/components/slider';
import { Button } from '../../ui/button';
import { Link } from 'react-router-dom';
Link

interface Props {

  id: string;
  petName: string;
  age: string;
  breed: string;
  imageSrc: string;
  
}

const PetCard = ({
  id,
  petName,
  age,
  breed,
  imageSrc
} : Props) => {
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

    // {
    //   url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    //   alt: 'Happy pets and their owners',
    // },
    // {
    //   url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    //   alt: 'Happy pets and their owners',
    // },
  ];
  return (
    <article className="flex flex-col grow px-2 pt-2 w-full bg-white rounded-xl shadow-lg max-md:mt-5">
      <div className="flex overflow-hidden flex-col items-center bg-white rounded-xl aspect-square w-[264px]">
        <img loading="lazy" src={imageSrc} className="object-contain w-full aspect-square" />
        <ImageSlider images={slides}/>

      </div>
      <div className="flex flex-col px-2 pt-2 pb-10 mt-2 max-w-full text-slate-900 w-[264px]">
        <div className="flex flex-col w-full max-w-[248px] pb-5">
          <h2 className="text-base font-bold text-gray-900 truncate">{petName}</h2>
          <div className="flex gap-1 items-start mt-1 w-full text-xs text-gray-500">
            <div className="flex flex-nowrap gap-1.5 items-start">
              <span className="font-medium">Breed</span>
              <span className="font-bold">{breed}</span>
            </div>
            <br/>   
            <div className="flex flex-nowrap gap-1.5 items-start">
              <span className="font-medium">Age:</span>
              <span className="font-bold">{age}</span>
            </div>
          </div>

        </div>
        <Button>     
          <Link to={`/petdetails/${id}`}> 
            View Details
          </Link>
        </Button>
      </div>
    </article>
  );
};

export default PetCard;
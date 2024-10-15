
import { Button } from '../../ui/button';
import { Link } from 'react-router-dom';
Link

interface Props {

    // imageSrc: string;
    id: string;
    petName: string;
    age: string;
    breed: string;
  
}

const PetCard = ({
  id,
  petName,
  age,
  breed,
} : Props) => {
  return (
    <article className="flex flex-col grow px-2 pt-2 w-full bg-white rounded-xl shadow-lg max-md:mt-5">
      {/* <div className="flex overflow-hidden flex-col items-center bg-white rounded-xl aspect-square w-[264px]">
        <img loading="lazy" src={imageSrc} className="object-contain w-full aspect-square" />
      </div> */}
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
          <Link to={`/petdetails/${id}`} className='flex items-end'>
            View Details 
          </Link>
        </Button>
      </div>
    </article>
  );
};

export default PetCard;
import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"

type ImageSliderProps = {
    images: {
      url: string
      alt: string
    }[]
}

export function ImageSlider({ images }: ImageSliderProps) {
    // const slides = [
    //     {    
    //         url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    //         alt: 'Happy pets and their owners',
    //     },
    //     {
    //         url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    //         alt: 'Happy pets and their owners',
    //     },
    //     {
    //         url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    //         alt: 'Happy pets and their owners',
    //     },
    
    //     {
    //       url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    //       alt: 'Happy pets and their owners',
    //     },
    //     {
    //       url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    //       alt: 'Happy pets and their owners',
    //     },
    //   ];

      const [imageIndex, setImageIndex] = useState(0)

      function showNextImage() {
        setImageIndex(index => {
          if (index === images.length - 1) return 0
          return index + 1
        })
      }
    
      function showPrevImage() {
        setImageIndex(index => {
          if (index === 0) return images.length - 1
          return index - 1
        })
      }
  
    return (
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
        <div
          style={{ backgroundImage: `url(${images[imageIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          {/* <BsChevronCompactLeft onClick={prevSlide} size={30} /> */}
          <ArrowBigLeft onClick={showPrevImage} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <ArrowBigRight onClick={showNextImage} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {images.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => setImageIndex(slideIndex)}
              className='text-2xl cursor-pointer'
            >
                {slideIndex === imageIndex ? (
                <CircleDot aria-hidden />
                ) : (
                <Circle aria-hidden />
                )}
            </div>
          ))}
        </div>
      </div>
    )
  }




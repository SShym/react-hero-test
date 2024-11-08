import { Carousel as CarouselWrap } from "@material-tailwind/react";
import defaultImage from "../../images/hero_default.png";
import FullscreenIcon from '@mui/icons-material/Fullscreen';

const Carousel = ({ images, handleClickOpen }) => {
  return (
    <CarouselWrap
      className="rounded-xl overflow-hidden"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images?.length === 0 && (
        <img className="h-full w-full object-cover" src={defaultImage} />
      )}
      {images?.map((image, index) => (
        <>
          <div className="absolute right-3 bottom-2 cursor-pointer bg-blue-gray-50 rounded-lg" >
            <FullscreenIcon 
              onClick={handleClickOpen} 
              fontSize="large" 
            />
          </div>
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="h-full w-full object-cover scroll-none overflow-hidden"
          />
        </>
      ))}
    </CarouselWrap>
  );
}

export default Carousel;
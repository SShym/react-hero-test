import Carouel from '../Shared/Carousel';
import Skeleton from '../Shared/Skeleton';

const HeroDetails = ({ hero, loading, handleOpenModal }) => {
  return (
    <>
      <div className="relative ml-4 p-2.5 md:w-2/5 h-[300px] w-[300px] shrink-0 overflow-hidden">
        {loading
          ? <Skeleton width="100%" height="100%" styled="rounded-xl" />
          : <Carouel handleClickOpen={handleOpenModal} images={hero?.images} />
        }
      </div>
      <div className="sm:p-6 p-3 w-full">
        {loading ? (
          <div className='w-full'>
            <Skeleton width="100px" height="22px" styled="mb-4 bg-teal-600 rounded-xl" />
            <Skeleton width="150px" height="28px" styled="mb-6 mt-6" />
            <Skeleton width="100%" height="72px" styled="mb-2" />
            <Skeleton width="100%" height="42px" styled="mb-3" />
            <Skeleton width="100%" height="42px" styled="mb-2" />
          </div>
        ) : (
          <div>
            <div className="w-[115px] h-[22px] mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm text-center">
              {hero?.nick_name}
            </div>
            <h4 className="mb-2 text-slate-800 text-xl font-semibold">{hero?.real_name}</h4>
            <p className="mb-2 text-gray-600 leading-normal font-light"><span className='font-bold'>Description:</span> {hero?.origin_description}</p>
            <p className="mb-2 text-slate-600 leading-normal font-light"><span className='text-gray-600 font-semibold'>Superpowers:</span> {hero?.superpowers}</p>
            <p className="mb-8 text-gray-800 leading-normal text-[13px] font-bold">{hero?.catch_phrase} (c) {hero?.real_name}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default HeroDetails;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHeroLoader } from '../../hooks/useHeroLoader';
import UndoIcon from '@mui/icons-material/Undo';
import HeroDetails from './HeroDetails';
import HeroModal from './HeroModal';

const Hero = () => {
  const [openModal, setOpenModalImages] = useState(false);
  const { hero, loading } = useHeroLoader();

  const handleOpenModal = () => setOpenModalImages(true);
  const handleCloseModal = () => setOpenModalImages(false);

  return (
    <div className="m-2 relative flex items-center flex-col md:flex-row my-6 bg-white sm:shadow-sm sm:border sm:border-slate-200 rounded-lg w-[800px]">
      <Link to="/">
        <div className="z-10 flex justify-between items-center sm:absolute left-[-15px] top-[-20px] bg-teal-100 border p-2 rounded-lg cursor-pointer">
          <UndoIcon fontSize="small" className="mr-3" />
          <div className="font-semibold text-sm">Back home</div>
        </div>
      </Link>
      <HeroDetails hero={hero} loading={loading} handleOpenModal={handleOpenModal} />
      <HeroModal open={openModal} images={hero?.images} handleClose={handleCloseModal} />
    </div>
  );
};

export default Hero;

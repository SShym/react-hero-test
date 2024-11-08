import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useHeroForm } from '../../hooks/useHeroForm';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import HeroMenuForm from './Common/HeroMenuForm';
import ImageUpload from './Common/ImageUpload';
import Skeleton from '../Shared/Skeleton';

const HeroMenu = ({ menuOpen, setOpenMenu, selectedHero }) => {
  const { loading, hero } = useSelector(state => ({
    loading: state.appReducer.loading,
    hero: state.mainReducer.hero,
  }));

  const formik = useHeroForm({ selectedHero, setOpenMenu, hero, menuOpen });
  
  const handleCloseMenu = () => setOpenMenu(false);

  return (
    <Dialog fullWidth transitionDuration={0} open={menuOpen} onClose={handleCloseMenu} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">
        {selectedHero.editMode
          ? 'Edit hero'
          : 'Create hero'
        }
      </DialogTitle>
      <div className='md:flex justify-center m-3 gap-3'>
        <form onSubmit={formik.handleSubmit} className='md:w-[280px] flex flex-col items-center mb-3 md:mb-0'>
          {!loading 
            ? <HeroMenuForm formik={formik} /> 
            : [...Array(5)].map((_, index) => <Skeleton width="100%" height="60px" styled="mb-1" key={index} />)
          }
        </form>
        <div>
          <ImageUpload 
            loading={loading} 
            hero={hero} 
            menuOpen={menuOpen} 
            formik={formik}
            selectedHero={selectedHero}
          />
          <Button 
            disabled={loading} 
            sx={{ width: '100%', mt: '10px' }} 
            color="primary" 
            variant="contained" 
            onClick={formik.handleSubmit}>
              Submit
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default HeroMenu;

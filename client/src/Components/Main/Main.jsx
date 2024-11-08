import { useMainLogic } from '../../hooks/useMainLogic';
import HeroMenu from '../HeroMenu/HeroMenu';
import HeroCard from '../HeroCard/HeroCard';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import LinearProgress from '@mui/material/LinearProgress';

const Main = () => { 
    const {
        menuOpen,
        setOpenMenu,
        selectedHero,
        setSelectedHero,
        page,
        heroes,
        loading,
        totalPages,
        handleAddHero,
        handleEditHero,
        handleDeleteHero,
        handlePageChange,
      } = useMainLogic();

    return (
        <div className="scrollbar-gutter-auto">
            {loading && (
                <div className="fixed bottom-0 left-0 right-0 z-50">
                    <LinearProgress />
                </div>
            )}
            <div className="max-w-[1200px] flex flex-col items-center justify-center">
                <div className="flex flex-wrap justify-center">
                    {heroes?.map(hero => (
                        <HeroCard
                            key={hero._id}
                            hero={hero}
                            handleEditHero={handleEditHero}
                            handleDeleteHero={handleDeleteHero}
                        />
                    ))}
                    <HeroMenu 
                        menuOpen={menuOpen} 
                        setOpenMenu={setOpenMenu} 
                        selectedHero={selectedHero} 
                        setSelectedHero={setSelectedHero} 
                    />
                </div>
                {heroes?.length >= 0 && (
                    <Button 
                        sx={{ padding: '6px 40px', marginTop: '25px', whiteSpace: 'nowrap' }} 
                        onClick={handleAddHero} 
                        variant="contained">
                        Add hero
                    </Button>
                )}
                {heroes?.length >= 0 && totalPages > 1 && (
                    <Pagination 
                        disabled={loading}
                        size="large"
                        className="mt-4"
                        count={totalPages}
                        page={page}
                        onChange={handlePageChange}
                    />
                )}
            </div>
        </div>
    );
};

export default Main;

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadHeroes, loadHero, deleteHero } from '../redux/actions';

export const useMainLogic = () => {
  const [menuOpen, setOpenMenu] = useState(false);
  const [selectedHero, setSelectedHero] = useState({ id: null, editMode: false });
  const [page, setPage] = useState(Number(localStorage.getItem('currentPage')) || 1);

  const dispatch = useDispatch();

  const { hero, heroes, loading, totalPages } = useSelector((state) => ({
    hero: state.mainReducer.hero,
    heroes: state.mainReducer.heroes,
    loading: state.appReducer.loading,
    totalPages: state.mainReducer.page?.totalPages,
  }));

  useEffect(() => {
    if (!heroes || heroes.length === 0 || page !== Number(localStorage.getItem('currentPage'))) {
      dispatch(loadHeroes(page, 5));
    }
    localStorage.setItem('currentPage', page);
  }, [page, dispatch, heroes]);

  const handleAddHero = () => {
    setOpenMenu(true);
    setSelectedHero({ id: null, editMode: false, mode: 'create' });
  };

  const handleEditHero = (id) => {
    if (hero?._id !== id) {
      dispatch(loadHero(id));
    }
    setOpenMenu(true);
    setSelectedHero({ id, editMode: true });
  };

  const handleDeleteHero = (id) => dispatch(deleteHero(page, id));

  const handlePageChange = (event, value) => setPage(value);

  return {
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
  };
};

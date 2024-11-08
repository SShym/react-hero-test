import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadHero } from '../redux/actions';

export const useHeroLoader = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const hero = useSelector((state) => state.mainReducer.hero);
  const loading = useSelector((state) => state.appReducer.loading);

  useEffect(() => {
    if (hero?._id !== id) {
      dispatch(loadHero(id));
    }
  }, [id, hero, dispatch]);

  return { 
    hero, 
    loading 
  };
};
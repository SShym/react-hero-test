import { 
  SET_HERO,
  SET_ALL_HEROES,
  SET_INFORMATION_PAGE,
} from '../actions';

const initialState = {
  hero: null,
  heroes: null,
  page: null,
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
      case SET_HERO: 
          return { 
              ...state, 
              hero: action.data
          };
      case SET_ALL_HEROES: 
          return { 
              ...state, 
              heroes: action.data.heroes
          };
      case SET_INFORMATION_PAGE: 
          return { 
              ...state, 
              page: action.data
          };
      default:
          return state;
  }
}
import axios from 'axios';
export const ERROR_DISPLAY_ON = 'ERROR_DISPLAY_ON';
export const ERROR_DISPLAY_OFF = 'ERROR_DISPLAY_OFF';
export const LOADER_DISPLAY_ON = 'LOADER_DISPLAY_ON';
export const LOADER_DISPLAY_OFF = 'LOADER_DISPLAY_OFF';
export const SET_HERO = 'SET_HERO';
export const SET_ALL_HEROES = 'SET_ALL_HEROES';
export const SET_INFORMATION_PAGE = 'SET_INFORMATION_PAGE';

const API = axios.create({ 
  // baseURL: 'http://localhost:5000'
  baseURL: 'https://react-test-server.onrender.com'
});

export function errorOn(text){
  return dispatch => {
      dispatch({ type: ERROR_DISPLAY_ON, text });
  }
}

export function loaderOn(){
  return{
      type: LOADER_DISPLAY_ON,
  }
}

export function loaderOff(){
  return{
      type: LOADER_DISPLAY_OFF,
  }
}

export const loadHeroes = (page, limit) => (dispatch) => {
  dispatch(loaderOn());

  API.get(`/heroes?page=${page}&limit=${limit}`)
    .then(({ data }) => {
      dispatch({
        type: SET_ALL_HEROES,
        data: { heroes: data.heroes },
      });

      dispatch({
        type: SET_INFORMATION_PAGE,
        data: {
          totalPages: data.totalPages,
          currentPage: data.currentPage,
          totalHeroes: data.totalHeroes,
        },
      });
    })
    .catch((error) => {
      dispatch(errorOn(error.response?.status || 500));
    })
    .finally(() => {
      dispatch(loaderOff());
    });
};

export const loadHero = (id) => (dispatch) => {
  dispatch(loaderOn()); 

  API.get(`/hero/${id}`)
    .then(({ data }) => {
      dispatch({ type: SET_HERO, data });
    })
    .catch((error) => {
      dispatch(errorOn(error.response?.status || 500));
    })
    .finally(() => {
      dispatch(loaderOff());
    });
};



export const createHero = (currentPage, values, setOpenMenu) => (dispatch) => {
  dispatch(loaderOn()); 

  API.post('/heroes/create', values, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(() => {
      dispatch(loadHeroes(currentPage));
      setOpenMenu(false); 
    })
    .catch((error) => {
      dispatch(errorOn(error.response?.status || 500));
    })
    .finally(() => {
      dispatch(loaderOff());
    });
};


export const deleteHero = (currentPage, id) => (dispatch) => {
  dispatch(loaderOn());

  API.delete(`/hero/delete/${id}`).then(() => {
      dispatch(loadHeroes(currentPage));
    })
    .catch((error) => {
      dispatch(errorOn(error.response?.status || 500))
    })
    .finally(() => {
      dispatch(loaderOff());
    });
};


export const editHero = (currentPage, id, values, setOpenMenu) => (dispatch) => {
  dispatch(loaderOn());

  API.put(`/hero/edit/${id}`, values, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then(() => {
      dispatch({ type: SET_HERO, data: null }); 
      setOpenMenu(false); 
      dispatch(loadHeroes(currentPage)); 
    })
    .catch((error) => {
      dispatch(errorOn(error.response?.status || 500)); 
    })
    .finally(() => {
      dispatch(loaderOff()); 
    });
};

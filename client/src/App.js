import { Route, Routes  } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Main from './Components/Main/Main';
import Hero from './Components/Hero/Hero';
import Error from './Components/Error/Error';

function App() {
  const error = useSelector(state => state.appReducer.error); 

  return (
    <div className="flex justify-center p-3">
      <Routes>
        <Route path='*' element={<Error />} />
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<Hero />} />
      </Routes>
      {error && <Error />}
    </div>
  );
}

export default App;

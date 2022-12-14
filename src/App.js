import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AuthContext } from './provider/AuthProvider';

import router from './router/router';

function App() {
  const {theme} = useContext(AuthContext);
  return (
    <div data-theme={theme ? 'night' : 'light'} >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

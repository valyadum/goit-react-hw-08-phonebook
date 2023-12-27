import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import AppBarF from './AppBar/AppBar';



export const Layout = () => {
  return (

           <div > 
          <AppBarF />
          <Suspense>
            <Outlet />
          </Suspense>

          {/* <Toaster position="top-right" reverseOrder={false} /> */}
           </div> 

  );
};

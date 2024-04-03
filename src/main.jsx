import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landingpage from './Pages/Landingpage';
import SearchpageN from './Pages/SearchpageN';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Searchpage from './Pages/Searchpage';
import Individual from './Pages/Individual';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage/>
  },
  {
    path:"/search",
    element: <SearchpageN/>
  },
  {
    path:"/Signin",
    element:<Signin/>
  },
  {
    path:"/Signup",
    element:<Signup/>
  },
  {
    path:"/searchpage",
    element:<Searchpage/>
  },
  {
    path:"/individualpage",
    element:<Individual/>
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

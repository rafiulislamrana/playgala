import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import SingleEvent from './components/SingleEvent/SingleEvent.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoutes from './components/routes/PrivateRoutes.jsx';
import Error404 from './components/Error/Error404.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404></Error404>,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/event/:id",
        loader: () => fetch('../public/eventData.json'),
        element: <PrivateRoutes><SingleEvent></SingleEvent></PrivateRoutes>
      },
      {
        path: "/about",
        element: <PrivateRoutes><About></About></PrivateRoutes>
      },
      {
        path: "/contact",
        element: <PrivateRoutes><Contact></Contact></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

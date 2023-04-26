import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/LayOut/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Group from './Components/Groups/Group.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Tv from './Components/Tv.jsx/Tv.jsx';
import Friends from './Components/Friends/Friends.jsx';

let router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },

        {
          path: "Friends",
          element: <Friends></Friends>
        },
        {
          path: "Group",
          element: <Group></Group>
        },

        {
          path: "Tv",
          element: <Tv></Tv>
        },

        {
          path: "Profile",
          element: <Profile></Profile>
        },

      ]
    }
  ]
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

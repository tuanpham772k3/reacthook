import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ViewTheme from './Component/Views/ViewTheme';
import TableUser from './Component/User/TableUser/TableUser';
import Header from './Component/User/TableUser/Header';
import CountView from './Component/ViewsTongHop/CountView';
import CreateUser from './Component/User/Modal/CreateUser';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="App">
          <Header />
          <TableUser />
        </div>
      ),
    },
    {
      path: "context",
      element: (
        <div className="App">
          <Header />
          <ViewTheme />
        </div>
      ),
    },
    {
      path: "count",
      element: (
        <div className="App">
          <Header />
          <CountView />
        </div>
      ),
    },
    {
      path: "create",
      element: (
        <div className="App">
          <Header />
          <CreateUser />
        </div>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable
        pauseOnHover
        theme="colored"
      />
    </>

  );
}

export default App;

import './App.css';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import InfoHukum from './routes/InfoHukum.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import TIpsHukum from './routes/TIpsHukum.jsx';
import KonsultasiHukum from './routes/KonsultasiHukum.jsx';
import KonsultasiHukumLoggedIn from './routes/KonsultasiHukumLoggedIn.jsx';
import Register from './routes/Register.jsx';
import ChatPage from './routes/ChatPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/info-hukum',
    element: <InfoHukum />,
  },
  {
    path: '/tips-hukum',
    element: <TIpsHukum />,
  },
  {
    path: '/konsultasi-hukum',
    element: <KonsultasiHukum />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/konsultasi-hukum/isLoggedIn=true',
    element: <KonsultasiHukumLoggedIn />,
  },
  {
    path: '/konsultasi',
    element: <ChatPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

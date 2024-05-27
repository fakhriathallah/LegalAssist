import './App.css';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import InfoHukum from './routes/InfoHukum.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import TIpsHukum from './routes/TIpsHukum.jsx';

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
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

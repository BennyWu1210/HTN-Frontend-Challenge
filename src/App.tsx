import './App.css';
import { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoadingScreen from './pages/LoadingPage';
import LoginPage from './pages/LoginPage';
import PortalPage from './pages/PortalPage';


// A collection of routes in the website
const router = createBrowserRouter([
  { path: "*", element: <HomePage /> },
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/portal", element: <PortalPage /> },
]);


function App() {
  // For animation purposes (cool loading yayyy)
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // Simulate a loading delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen shouldFadeOut={!loading} />
      {!loading && (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;

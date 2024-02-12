import { useEffect, useState } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoadingScreen from './pages/LoadingPage';


// a collection of routes in the website
const router = createBrowserRouter([
  { path: "*", element: <HomePage /> },
  { path: "/", element: <HomePage /> },
]);


function App() {
  // for animation purposes (cool loading yayyy)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false), 1200);

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

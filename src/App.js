import { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

// for default export
const Home = lazy(() => import('./components/Home'));
const Store = lazy(() => import('./components/Store'));

// for named export
const About = lazy(() =>
  import('./components/About').then((module) => {
    return { default: module.About };
  })
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavWrapper />}>
            <Route path="store" element={<Store />} />
            <Route path="about" element={<About />} />
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function NavWrapper() {
  return (
    <>
      <nav style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link to={'/home'}>Home</Link>
        <Link to={'/store'}>Store</Link>
        <Link to={'/about'}>About</Link>
      </nav>
      <Suspense fallback={<h1>Loading</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;

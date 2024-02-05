# importing a function when required

to import sum2Nums function only when the btn is clicked

import ('filepath').then(module => {
//perform action here
})

'../utils' is the file which contains function sum2Nums.

```
function handleClick() {
    import('../utils').then((module) => {
      let res = module.sum2Nums(ip1.current.value, ip2.current.value);
      setResult(res);
    });
  }

<button onClick={handleClick}>Click to add</button>
```

# to lazy load component when required

```
// for default export
const Home = lazy(() => import('./components/Home'));
const Store = lazy(() => import('./components/Store'));

// for named export
const About = lazy(() =>
  import('./components/About').then((module) => {
    return { default: module.About };
  })
);


//use normally
<Route path="/" element={<NavWrapper />}>
    <Route path="store" element={<Store />} />
    <Route path="about" element={<About />} />
    <Route path="home" element={<Home />} />
</Route>
```

Wrap the lazy loaded component with Suspense to show fallback while its bein loaded

```
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
```

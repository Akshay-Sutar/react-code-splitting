import { useState, useRef, lazy, Suspense } from 'react';
// import { sum2Nums } from '../utils';

const Admin = lazy(() =>
  import('./Admin').then((module) => {
    return { default: module.Admin };
  })
);

export default function Home() {
  const [result, setResult] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const ip1 = useRef();
  const ip2 = useRef();

  function handleClick() {
    import('../utils').then((module) => {
      let res = module.sum2Nums(ip1.current.value, ip2.current.value);
      setResult(res);
    });
  }

  return (
    <div>
      <h1>Home</h1>

      <div>
        <input ref={ip1} type="number" placeholder="enter a number" />
        <input ref={ip2} type="number" placeholder="enter a number" />
        <button onClick={handleClick}>Click to add</button>
      </div>
      <div>
        <p> Sum is : {result}</p>
      </div>
      <div>
        <button onClick={(e) => setIsAdmin((v) => !v)}>
          Toggle Admin status
        </button>
        <Suspense fallback={<h2>Loading</h2>}>{isAdmin && <Admin />}</Suspense>
      </div>
    </div>
  );
}

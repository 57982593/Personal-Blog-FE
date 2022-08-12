import { useEffect } from 'react';
import './index.css';

export default function Fiexd() {

  console.log(1);

  useEffect(() => {
    console.log('useEffect');
  }, []);

  function srcollEvent(e: any) {
    const { scrollTop, clientHeight } = e.target;
    console.log(scrollTop, clientHeight);
  }

  return (
    <ul className="height-fixed" onScroll={srcollEvent}>
      <li style={{transform: `translate(0, 10000px)`}}>1</li>
    </ul>
  )
}
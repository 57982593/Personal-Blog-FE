import './index.css';

export default function Fiexd() {
  function srcollEvent(e: any) {
    const { scrollTop, clientHeight } = e.target;
    console.log(scrollTop, clientHeight);
  }

  return (
    <ul className="height-fixed" onScroll={srcollEvent}>
      <li style={{ transform: `translate(0, 10000px)` }}>1</li>
    </ul>
  );
}

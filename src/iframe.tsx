import { useEffect } from "react";

function Iframe() {

  useEffect(() => {
    document.write('禁止iframe引用');
  }, [])

  return <></>

}

export default Iframe;
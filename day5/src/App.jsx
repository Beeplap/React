import { useState } from 'react'

import './App.css'

const App = ()=> {
  const [show,setShow] = useState(false);

  return (
    <div className=""> {
      show && (
        <div className="bg-red-500 text-white p-4"> <h1>Hello Potatoes</h1>
        <p>I am invincible</p> </div>
      ) 
    }
    <button onClick={()=> setShow(!show)}> 
      {show ? 'Hide Box' : 'Show Box'}
    </button>
    </div>
  );


}
 

export default App

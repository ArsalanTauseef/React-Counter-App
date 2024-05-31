import React, { useState } from "react";
import Header from "./Components/header/Header";
import LeftSection from "./Components/left-section/left-section";
import RighSection from "./Components/right-section/right-section";


function App() {
//   const [counter, setCounter] = useState(0);
 
//     const handleClick1 = () => {
//         setCounter(counter + 1);
//     };
 

//     const handleClick2 = () => {
//         setCounter(counter - 1);
//     };
 
    return (
      <>
        {/* <div className="mainDiv">
        <h3>My first React App</h3>
        <br />
        <hr style={{width:"100%"}} />
        <br />
            Counter App
            <div className="divCounter">
                {counter}
            </div>
            <div className="buttons">
                <button className="Incr" onClick={handleClick1}>
                    Increment
                </button>
                <button className="Decr" onClick={handleClick2} >
                    Decrement
                </button>
            </div>
        </div> */}
        <Header/>
        <div className="mainSection">
            <LeftSection/>
            <RighSection/>
        </div>
      </>
    );
}

export default App
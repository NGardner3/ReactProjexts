import { useState } from "react";


function Divide() {


    const [enteredNumbers, setEnteredNumbers] = useState({

     first: 0, second: 0
        
   });

//When setting the state to a new value that depends on the previous value, a function should be passed to the state-updating function. This function then receives the previous state as a parameter (which will be provided automatically by React) and returns the new state that should be set.

    function changeFirstNumberHandler(event) {
        setEnteredNumbers((prevNumbers) => ({

            first: +event.target.value, // "+" converts strings to numbers!
      
            second: prevNumbers.second
      
          }));
  
    }
    function changeSecondNumberHandler(event) {
        setEnteredNumbers((prevNumbers) => ({

            first: prevNumbers.first,
      
            second: +event.target.value
      
          }));
    
    }
    
    const result = enteredNumbers.first / enteredNumbers.second;
    return (
    
    <p>
    
    <input type="number" onChange={changeFirstNumberHandler} /> /
    
    <input type="number" onChange={changeSecondNumberHandler} /> = {result}
    </p>
    
    );
    
    }
    
    export default Divide;
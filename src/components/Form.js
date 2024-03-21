import Preference from "./Preference";
import { useRef } from "react";


function Form() {
 
    const preferencesRef = useRef({});
    function submitHandler(event) {
  
      event.preventDefault();
  
    }
  
    return (
  
      <form onSubmit={submitHandler}>
  
        <div >
  
          <label htmlFor="email">Your email</label>
  
          <input type="email" id="email" />
  
        </div>
  
        <Preference ref={preferencesRef}/>
  
        <button>Submit</button>
  
      </form>
  
    );
  
  }

  export default Form;
  
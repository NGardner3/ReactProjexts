import { useState } from 'react';

function ValidEmail(){
    const [enteredEmail, setEnteredEmail] = useState();
    const [inputIsInvalid, setInputIsInvalid] = useState(false);

  function emailChangeHandler(event) {

    setEnteredEmail(event.target.value);

  }

  function submitFormHandler(event) {

    event.preventDefault();

    const emailIsValid = enteredEmail.includes('@');
    console.log(inputIsInvalid);
    console.log(emailIsValid);
    console.log(!emailIsValid)
    setInputIsInvalid(!emailIsValid);
  }


     return (
        <section>
        <form onSubmit={submitFormHandler}>

        <label htmlFor="email">Your email</label>

        <input type="text" id="email"onChange={emailChangeHandler} />

        <button>Submit</button>

      </form>
      {inputIsInvalid && <p>Invalid email address entered!</p>}
      </section>
     );
};

export default ValidEmail;
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Calculation from './components/Calculation';
import Result from './components/Result';
import AnchorLink from './components/AnchorLink';
import Button from './components/Button';
import TermsOfUse from './components/TermsOfUse'; 
import Country from './components/Country';
import ProductList from './components/ProductList';
import ValidEmail from './components/ValidEmail';

function App() {
 

  const [enteredNumbers, setEnteredNumbers] = useState({

    first: 0, second: 0
      
      });
      
    const [chosenOperation, setChosenOperation] = useState('add');
      
    // valid state values: 'add', 'subtract', 'multiply', 'divide'

    const [chosenCountry, setChosenCountry] = useState("");

    
      
      function changeFirstNumberHandler(event) {
      
        setEnteredNumbers((prevNumbers) => ({
      
      first: +event.target.value,
  
      second: prevNumbers.second,
      
      }));
      
    }
      
    function changeSecondNumberHandler(event) {
      
    setEnteredNumbers((prevNumbers) => ({
      
    first: prevNumbers.first,
      
      second: +event.target.value,
      
     }));
      
   }
      
     function updateOperationHandler(event) {
      
     setChosenOperation(event.target.value);
      
      }

      function updateCountryHandler(event){
            setChosenCountry(event.target.value)
      }

      
      let result;
      let isButton;

     if (chosenOperation === 'add') {
      
     result = enteredNumbers.first + enteredNumbers.second;
      
      } else if (chosenOperation === 'subtract') {
      
      result = enteredNumbers.first - enteredNumbers.second;
      
      } else if (chosenOperation === 'multiply') {
      
      result = enteredNumbers.first * enteredNumbers.second;
      
      } else {
      
      result = enteredNumbers.first / enteredNumbers.second;
      
      }
      
      if (result >= 20){
        isButton = true;

      }else{
        isButton = false;
      }

        // return statement omitted, will be defined in the next step
      
      
      

    
    
 
  
    

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Calculation

      onFirstNumberChanged={changeFirstNumberHandler}
      
      onSecondNumberChanged={changeSecondNumberHandler}
      
      onOperationChanged={updateOperationHandler}
      
      />
      
      <Result calculationResult={result} />

    
      <AnchorLink config={ {href:"https://my-website.com"}}>Visit my website</AnchorLink>
      <div>

      <Button isButton={isButton}  config={ {href:"https://my-website.com"}} >Push my button</Button>
      </div>
      
      <TermsOfUse>Show Terms of Use </TermsOfUse>

      <ValidEmail></ValidEmail>
      

      <Country onCountryChanged={updateCountryHandler} country = {chosenCountry}></Country>
      <ProductList></ProductList>
      </div>
  );

  }


export default App;

function Country({country, onCountryChanged}){

    //going for dynamic property selection
    const languages = {

    de: 'de-DE',
  
    us: 'en-US',
  
    uk: 'en-GB'
  
  }; 
  

    return(
       <div>
        <select onChange={onCountryChanged}>
        <option value="">Select</option>
        <option value="de">de-DE</option>
  
         <option value="us">en-US</option>
  
        <option value="uk">en-GB</option>
  
  </select>
 
        <p>Selected Language: {languages[country]}</p>
        </div>
    )
  }

  
 
  export default Country;
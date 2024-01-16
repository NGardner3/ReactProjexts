import { useState } from 'react';




function TermsOfUse({children}) {

    const [showTerms, setShowTerms] = useState(false);
  
    function showTermsSummaryHandler() {
  
      setShowTerms(true);
  
    }
   /*  let paragraph;

    if (showTerms) {
  
        paragraph = <p>'By continuing, you accept that we will not indemnify you for any damage or harm caused by our products.'</p>;
  
    } */
  
    return (
  
      <section>
  
        <button onClick={showTermsSummaryHandler}>{children}</button>
  

    {showTerms ? <p>By continuing, you accept that we will not indemnify you for any damage or harm caused by our products.</p> : null}
  
      </section>
    
 );
    
    }

    export default TermsOfUse;
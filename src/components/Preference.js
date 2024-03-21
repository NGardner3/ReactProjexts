import {useState} from 'react';
import { useRef } from 'react';
import React, { forwardRef } from "react";

function Preference(props, ref) {

    const [wantsNewProdInfo, setWantsNewProdInfo] = useState(false);
  
    const [wantsProdUpdateInfo, setWantsProdUpdateInfo] = useState(false);
  
    function changeNewProdPrefHandler() {
  
      setWantsNewProdInfo((prevPref) => !prevPref);

    
  
    }
  
    function changeUpdateProdPrefHandler() {
  
      setWantsProdUpdateInfo((prevPref) => !prevPref);

    }
    function reset() {

        setWantsNewProdInfo(false);
    
        setWantsProdUpdateInfo(false);
    
      }
    
      ref.current.reset = reset;
    
      ref.current.selectedPreferences = {
    
        newProductInfo: wantsNewProdInfo,
    
        productUpdateInfo: wantsProdUpdateInfo,
    
      };
  
  
    return (
  
      <div>
  
        <label>
  
          <input
  
            type="checkbox"
  
            id="pref-new"
  
            checked={wantsNewProdInfo}
  
            onChange={changeNewProdPrefHandler}
  
          />
  
          <span>New Products</span>
  
        </label>
  
        <label>
  
          <input
  
            type="checkbox"
  
            id="pref-updates"
  
            checked={wantsProdUpdateInfo}
  
            onChange={changeUpdateProdPrefHandler}
  
          />
  
          <span>Product Updates</span>
  
        </label>
  
      </div>
  
    );
  
  };

  export default forwardRef(Preference);
import {useState} from 'react';

const products = [

  {id: 'p1', title: 'A Book', price: 59.99},

  {id: 'p2', title: 'A Carpet', price: 129.49},

  {id: 'p3', title: 'Another Book', price: 39.99},

];

function ProductList() {
  const [prodList, setProdList] = useState( products)


     const productElements = prodList.map(product => (

        <li key={product.id}>
  
          <h2>{product.title}</h2>
  
          <p>${product.price}</p>
  
        </li>
  
      )
  
    );

    
    
    function addProductListHandler(){
        setProdList(curProdList => [...curProdList,  {id: 'p4', title: 'A Blind', price: 29.99}])
    }

    return(
      <div>
      
      <button onClick={addProductListHandler}>Add Product</button>
        <ul style={{color: 'red', fontSize: '18px'}}>

        {productElements}
    
      </ul>
      </div>
    );
    
};  

    export default ProductList;
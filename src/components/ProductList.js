function ProductList({products}) {

    // const productElements = [];

    // for (const product of products) {
    
    //   productElements.push((
    
    //     <li>
    
    //       <h4>{product.title}</h4>
    //       <p>${product.price}</p>
    
    //     </li>
    
     // ));

     const productElements = products.map(product => (

        <li>
  
          <h2>{product.title}</h2>
  
          <p>${product.price}</p>
  
        </li>
  
      )
  
    );
    
    

    return(
        <ul>

        {productElements}
    
      </ul>
    );
    
};  

    export default ProductList;
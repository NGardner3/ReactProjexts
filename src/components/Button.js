function Button({isButton, config, children}) {

        if (isButton) {
      
          return <button  {...config}>{children}</button>;
        }
      
        return <a target="_blank" rel="noopener noreferrer" {...config}>Weblink</a>;
      
      };
    export default Button;
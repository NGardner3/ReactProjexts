function AnchorLink({children, config}) {

    return <a {...config} target="_blank">{children} </a>;
    
    };

    export default AnchorLink;
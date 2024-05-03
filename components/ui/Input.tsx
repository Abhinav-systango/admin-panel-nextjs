import React from "react";

const Input = ({type= "text", placeholder= "", className=""}: {
    type: string,
    placeholder: string,
    className?: string
}) => {
  return (
    <input 
        type={type} 
        placeholder={placeholder} 
        className={className !="" ? className : "w-full hidden md:block px-4 rounded-lg outline-none bg-transparent border border-gray-700 focus:border-gray-500"}
       />
    
  );
};

export default Input;

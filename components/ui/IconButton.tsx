import React from "react";

const IconButton = ({
  className,
  icon,
  onClick = () => {},
}: {
  className?: string;
  icon: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className={`flex justify-center items-center h-9 w-9 bg-gray-700 rounded-lg ${className}`}
      onClick={onClick} // changed onclick to onClick
    >
      {icon}
    </button>
  );
};

export default IconButton;

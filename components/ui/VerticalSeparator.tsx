import React from 'react';

const VerticalSeparator = ({ height, color }:{
  height?: string,
  color?: string
}) => {
  const separatorStyle = {
    height: height || '100%',
    borderRight: `1px solid ${color || '#fff'}`,
    margin: '0 15px',
  };

  return <div style={separatorStyle}></div>;
};

export default VerticalSeparator;
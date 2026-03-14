import React from 'react';

const RoundedBox = ({children, className}) => {
  const style = {
    borderRadius: '12px',
  	padding: '16px',
  	border:'1px solid #e0e0e0',
	// width: 'fit-content',
	//margin: '0 auto',
		margin: '16px',
    // базовый сброс и наследование
    boxSizing: 'border-box',
  };

  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};

export default RoundedBox;
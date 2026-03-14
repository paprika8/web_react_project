import React, { useState } from 'react';

const Input = ({
  style,
  onFocus,
  onBlur,
	multiline = false,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const inputStyle = {
  	borderRadius: '8px',
    padding: '10px 12px',
    border: '1px solid #ccc',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    fontSize: '16px',
		resize: multiline ? 'vertical' : 'none',
    ...style,
  };

  const handleFocus = (e) => {
    setFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e) => {
    setFocused(false);
    if (onBlur) onBlur(e);
  };
	
	if (multiline) {
    return (
      <textarea
        style={inputStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
        rows={rows}
        {...props}
      />
    );
  }
  return (
    <input
      style={inputStyle}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    />
  );
};

export default Input;
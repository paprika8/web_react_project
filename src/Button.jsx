import React, { useState } from 'react';

const Button = ({
  children,
  onClick,
  backgroundColor = '#007bff',
  style
}) => {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const handleMouseEnter = () => !disabled && setHover(true);
  const handleMouseLeave = () => {
    setHover(false);
    setActive(false);
  };
  const handleMouseDown = () => !disabled && setActive(true);
  const handleMouseUp = () => !disabled && setActive(false);

	const [disabled, setDisabled] = useState(false);

  // Определяем фоновый цвет в зависимости от состояния
  let bgColor = backgroundColor;
  if (disabled) {
    bgColor = '#cccccc';
  } 

  // Определяем фильтры, если не заданы специальные цвета для состояний
  let filter = 'none';
  if (!disabled) {
    if (active) {
      filter = 'brightness(0.8)';
    } else if (hover) {
      filter = 'brightness(0.9)';
    }
  }

  const styles = {
    borderRadius: '12px',
    padding: '12px 24px',
    backgroundColor: bgColor,
    border: 'none',
    boxShadow: disabled ? 'none' : '0 2px 8px rgba(0,0,0,0.1)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: '16px',
    outline: 'none',
    display: 'inline-block',
    textAlign: 'center',
    textDecoration: 'none',
    boxSizing: 'border-box',
    filter: filter,
    ...style,
  };

  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {children}
    </button>
  );
};

export default Button;
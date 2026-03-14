import React from 'react';

const FlexColumn = ({ children, expandIndex = 0, gap = '0'}) => {
  const childrenArray = React.Children.toArray(children);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: gap
  };

  return (
    <div style={containerStyle}>
      {childrenArray.map((child, index) => {
        const isExpanding = index === expandIndex;
        const childStyle = {
          ...(child.props.style || {}),
          flex: isExpanding ? '1 1 auto' : '0 0 auto',
        };
        return React.cloneElement(child, { style: childStyle });
      })}
    </div>
  );
};

export default FlexColumn;
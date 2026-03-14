import React from 'react';

const FlexRow = ({ children, expandIndex = 0, gap = '0', content_margin='20px auto'}) => {
  const childrenArray = React.Children.toArray(children);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: gap,
    width: '100%',
  };
  
  return (
    <div style={containerStyle}>
      {childrenArray.map((child, index) => {
        const isExpanding = index === expandIndex;
        const childStyle = {
          ...(child.props.style || {}),
          flex: isExpanding ? '1 1 auto' : '0 0 auto',
          margin: content_margin
        };
        return React.cloneElement(child, { style: childStyle });
      })}
    </div>
  );
};

export default FlexRow;
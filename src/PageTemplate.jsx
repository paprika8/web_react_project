import React from 'react';

const PageTemplate = ({ header, children }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',            // минимум на всю высоту, но может растягиваться
      width: '100%',                  // на всю ширину родителя
      margin: 0,
      padding: 0,
    },
    bar: {
      height: '60px',                // статическая высота бара
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',             // внутренние отступы для содержимого бара
      boxSizing: 'border-box',
      margin: '0 auto', 
    },
    content: {
      flex: 1,
      padding: '20px',               // статические поля вокруг контента
      overflow: 'auto',              // скролл при переполнении
      boxSizing: 'border-box',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.bar}>
        {header || 'Header Bar'}
      </div>
      <div style={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default PageTemplate;
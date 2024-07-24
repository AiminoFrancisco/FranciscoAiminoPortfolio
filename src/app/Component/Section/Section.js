import React from 'react';
import styles from './section.module.css';

// Usa React.forwardRef para aceptar el ref
const Section = React.forwardRef(({ id, title, children, className, style }, ref) => {
  const appliedClassName = className || styles.section;
  const appliedStyle = style;

  return (
    <section
      id={id}
      className={appliedClassName}
      style={appliedStyle}
      ref={ref} // Añade el ref aquí
    >
      {children ? children : <h2>{title}</h2>}
    </section>
  );
});

export default Section;

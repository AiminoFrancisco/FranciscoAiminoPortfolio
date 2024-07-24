import React from 'react';
import styles from './AnimatedArrow.module.css';

const AnimatedArrow = ({ onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={styles.arrow}
    width="100"
    height="100"
    onClick={onClick} // Añadir manejador de clics
  >
    <circle className={styles.circle} cx="50" cy="50" r="30" />
    <path
      className={styles.arrowPath}
      d="M30,40 L50,60 L70,40"
      stroke="white"
      strokeWidth="5"
      fill="none"
    />
  </svg>
);

export default AnimatedArrow;

import React, { useEffect, useState } from 'react';
import styles from './cursorStyles.module.css'; // Asegúrate de crear este archivo CSS

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Detecta el hover en los botones
  useEffect(() => {
    const handleMouseEnter = (e) => {
      if (e.target.tagName === 'BUTTON') {
        setHovering(true);
      }
    };
    const handleMouseLeave = (e) => {
      if (e.target.tagName === 'BUTTON') {
        setHovering(false);
      }
    };

    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`${styles.customCursor} ${hovering ? styles.hovering : ''}`}
      style={{ left: cursorPos.x, top: cursorPos.y }}
    >
      <div className={styles.outerRing}></div>
      <div className={styles.innerCircle}></div>
    </div>
  );
};

export default CustomCursor;

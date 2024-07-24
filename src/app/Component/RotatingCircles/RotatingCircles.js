import React from 'react';
import './styles.css';  // Asegúrate de importar el archivo CSS aquí

const RotatingCircles = () => {
  return (
    <div className="view">
      <div className="plane main">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default RotatingCircles;

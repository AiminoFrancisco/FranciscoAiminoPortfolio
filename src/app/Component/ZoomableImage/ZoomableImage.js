import React, { useRef, forwardRef, useCallback, useState } from 'react';
import QuickPinchZoom, { make3dTransformValue } from 'react-quick-pinch-zoom';
import './ZoomableImage.css'; // Asegúrate de importar el archivo CSS

const ZoomableImage = forwardRef(({ src, alt, style }, ref) => {
  const imgRef = useRef(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });

  const handleUpdate = useCallback(({ x, y, scale }) => {
    const minScale = 0.5;
    scale = Math.max(scale, minScale);
    setTransform({ x, y, scale });
  }, []);

  const resetTransform = useCallback(() => {
    setTransform({ x: 0, y: 0, scale: 1 });
  }, []);

  const handleDoubleTap = useCallback(() => {
    resetTransform();
  }, [resetTransform]);

  return (
    <div className="containerImgMap">
      <QuickPinchZoom onUpdate={handleUpdate} onDoubleTap={handleDoubleTap} centerContained={true}>
        <img
          ref={imgRef}
          style={{
            borderRadius: `${8 / transform.scale}px`,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: make3dTransformValue(transform),
            transition: 'transform 0.2s ease-out',
            ...style,
          }}
           src="/recoFran.png"
          alt={alt}
        />
      </QuickPinchZoom>
    </div>
  );
});

export default ZoomableImage;

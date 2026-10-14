import React, { useRef, useState } from 'react';

/**
 * Card Hover Tilt transition from transitions.dev
 * 3D perspective tilt following cursor with tracking soft glare.
 */
export default function TiltCard({
  children,
  className = '',
  maxTilt = 12,
  glare = true,
}) {
  const outerRef = useRef(null);
  const cardRef = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const [isTilting, setIsTilting] = useState(false);

  const handlePointerMove = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!outerRef.current || !cardRef.current) return;

    const rect = outerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
      handlePointerLeave();
      return;
    }

    setIsHover(true);
    setIsTilting(true);

    const nx = (x / rect.width) * 2 - 1; // -1 to +1
    const ny = (y / rect.height) * 2 - 1; // -1 to +1

    const rx = -ny * maxTilt;
    const ry = nx * maxTilt;

    cardRef.current.style.setProperty('--tilt-rx', `${rx.toFixed(2)}deg`);
    cardRef.current.style.setProperty('--tilt-ry', `${ry.toFixed(2)}deg`);

    if (glare) {
      cardRef.current.style.setProperty('--tilt-gx', `${((x / rect.width) * 100).toFixed(1)}%`);
      cardRef.current.style.setProperty('--tilt-gy', `${((y / rect.height) * 100).toFixed(1)}%`);
    }
  };

  const handlePointerLeave = () => {
    setIsHover(false);
    setIsTilting(false);
    if (cardRef.current) {
      cardRef.current.style.setProperty('--tilt-rx', '0deg');
      cardRef.current.style.setProperty('--tilt-ry', '0deg');
    }
  };

  return (
    <div
      ref={outerRef}
      className={`t-tilt ${isHover ? 'is-hover' : ''} ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div
        ref={cardRef}
        className={`t-tilt-card ${isTilting ? 'is-tilting' : ''}`}
      >
        {children}
        {glare && <div className="t-tilt-glare"></div>}
      </div>
    </div>
  );
}

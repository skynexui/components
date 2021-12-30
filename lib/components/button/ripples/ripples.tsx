import React from 'react';

export const useRipples = () => {
  const during = 600;
  const color = 'rgba(0, 0, 0, 0.3)';
  const [rippleStyle, setRippleStyle] = React.useState({
    backgroundColor: color,
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0,
    width: 35,
    height: 35,
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    top: 0,
    left: 0,
    transition: 'initial',
  });

  const onClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.stopPropagation();
    const { pageX, pageY, currentTarget } = ev;
    const rect = currentTarget.getBoundingClientRect();
    const left = pageX - (rect.left + window.scrollX);
    const top = pageY - (rect.top + window.scrollY);
    const size = Math.max(rect.width, rect.height);

    setRippleStyle({
      ...rippleStyle,
      left,
      top,
      opacity: 1,
      transform: 'translate(-50%, -50%)',
      transition: 'initial',
    });

    setTimeout(() => {
      setRippleStyle({
        ...rippleStyle,
        opacity: 0,
        transform: `scale(${size / 9})`,
        transition: `all ${during}ms`,
      });
    }, 0);
  };

  return {
    rippleStyle,
    onClickRipple: onClick,
  };
};

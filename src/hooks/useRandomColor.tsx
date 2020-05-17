import { useState, useEffect } from 'react';

export function useRandomColor() {
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    setColor(randomColor);
  }, []);

  return color;
}

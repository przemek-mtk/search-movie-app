import React, { useState, useEffect } from "react";

export const useHideText = (ref) => {
  const [isGreater, setGreater] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const height = ref.current.offsetHeight;
    if (height > 130) {
      setGreater(true);
    }
  }, []);

  const toggleExpand = () => {
    setShow((prev) => !prev);
  };

  return [isGreater, show, toggleExpand];
};

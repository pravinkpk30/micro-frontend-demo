import React, { useRef, useEffect } from 'react';

const VueInventory = () => {
  const ref = useRef(null);

  useEffect(() => {
    // Dynamically import the mount function from the Vue remote
    import('childVueapp/mount')
      .then(({ mount }) => {
        mount(ref.current);
      })
      .catch((err) => {
        console.error("Failed to load Vue app", err);
      });
  }, []);

  return <div ref={ref} />;
};

export default VueInventory;

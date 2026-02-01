import React, { useRef, useEffect } from 'react';

const AngularOrder = () => {
  const ref = useRef(null);

  useEffect(() => {
    // Dynamically import the mount function from the Angular remote
    import('childAngular/mount')
      .then(({ mount }) => {
        mount(ref.current);
      })
      .catch((err) => {
        console.error("Failed to load Angular Order App", err);
      });
  }, []);

  return <div ref={ref} className="angular-host-container" />;
};

export default AngularOrder;

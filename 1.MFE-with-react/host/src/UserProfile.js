import React, { useRef, useEffect } from 'react';

const UserProfile = ({ onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    // Dynamically import the mount function from the Vanilla JS remote
    import('childVannila/UserProfile')
      .then(({ mount }) => {
        const root = ref.current;
        mount(root);

        // Listen for close request (custom event)
        const handleClose = () => {
             if (onClose) onClose();
        };
        root.addEventListener('closeRequest', handleClose);

        return () => {
            root.removeEventListener('closeRequest', handleClose);
            root.innerHTML = ''; // Cleanup
        }
      })
      .catch((err) => {
        console.error("Failed to load Vanilla User Profile", err);
      });
  }, [onClose]);

  return <div ref={ref} />;
};

export default UserProfile;

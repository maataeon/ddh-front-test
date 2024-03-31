import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KeyboardEventHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if the Control key is pressed
      if (!event.ctrlKey) {
        return;
      }

      switch (event.key) {
        case 'Backspace':
          navigate(-1);
          break;
        case 'ArrowLeft':
          navigate(-1);
          break;
        case 'ArrowRight':
          navigate(1);
          break;
        default:
          // You can add more cases for other keys and actions
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  return null;
};

export default KeyboardEventHandler;

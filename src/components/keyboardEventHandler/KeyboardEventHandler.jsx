import { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';

const KeyboardEventHandler = (  ) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
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
          // Puedes agregar más casos para otras teclas y acciones
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

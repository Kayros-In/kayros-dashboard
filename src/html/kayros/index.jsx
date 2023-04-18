import { createRoot } from 'react-dom/client';

const App = () => {
  
  const handleClick = () => {
    console.log('Botón clickeado');
  };
  
  return (
    <div>
      <span>Hello React!!!!!</span>
      <button onClick={handleClick}>Haz clic aquí</button>
    </div>
  );
};

createRoot(document.getElementById('root')).render(<App />);

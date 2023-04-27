import { createRoot } from 'react-dom/client';
import DealsTable from './deals.jsx';

const App = () => {
  
  const handleClick = () => {
    console.log('Botón clickeado');
  };
  
  return (
    <div>
      <span>Hello React!!!!!</span>
      <DealsTable />
    </div>
  );
};

createRoot(document.getElementById('root')).render(<App />);

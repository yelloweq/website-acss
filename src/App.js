import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    //router added for future pages like auth etc.
    <Router>
      <Home />
    </Router>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from 'react-router-dom';
import Header from './Pages/Home/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes></Routes>
    </div>
  );
}

export default App;

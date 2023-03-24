import { Route, Routes } from 'react-router';
import './App.css';
import DetailPage from './pages/detailpage/DetailPage';
import HomePage from './pages/homepage/HomePage';

function App() {
  return (
    <div className="App_wrapper">
      


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<DetailPage />} />
        <Route path="*" element={<h1>Error 404 Not Found!</h1>} />
      </Routes>
    </div>
  );
}

export default App;

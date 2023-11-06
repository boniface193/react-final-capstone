import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DetailPage from './components/DetailPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

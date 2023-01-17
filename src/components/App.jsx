import { Routes, Route } from 'react-router-dom';
import { Home } from '../page/Home/Home';
import { Country } from 'page/Country/Country';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<Country />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

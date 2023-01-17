import { Routes, Route } from 'react-router-dom';
import { Home } from '../page/Home/Home';
// import Products from 'path/to/pages/Products';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/country/name" element={<Country />} /> */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

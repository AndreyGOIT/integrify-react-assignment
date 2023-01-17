import { Routes, Route } from 'react-router-dom';
import { Home } from '../page/Home';
// import Products from 'path/to/pages/Products';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/countries" element={<Products />} /> */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

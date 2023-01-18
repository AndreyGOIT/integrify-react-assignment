import { Routes, Route, Link } from 'react-router-dom';
import { Home } from '../page/Home/Home';
import { Country } from 'page/Country/Country';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/country/name">Country</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/name" element={<Country />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

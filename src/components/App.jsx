import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { Home } from '../page/Home/Home';
import { Country } from 'page/Country/Country';
import { CountryInfo } from '../page/CountryInfo/CountryInfo';

export const App = () => {
  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/country/name">Country</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="country" element={<Country />} />
          <Route path="country/:name" element={<CountryInfo />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

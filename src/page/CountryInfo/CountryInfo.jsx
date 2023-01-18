import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneLand } from '../../services/eventsApi';

export function CountryInfo() {
  const { name } = useParams();
  const [land, setLand] = useState(null);

  useEffect(() => {
    fetchOneLand(name).then(setLand);
  }, [name]);
  console.log(land);

  if (!land) return;
  const { area, continents, flags = {}, languages = {} } = land[0];
  return (
    <>
      {/* <div>Now showing product with name - {name}</div> */}
      <div>
        <b>{name}</b>
        <p>Area: {area} sq. km</p>
        <p>Languages: {Object.values(languages).join(', ')}</p>
        <p>Continents: {continents}</p>
        <img src={flags.png} alt={name} width={'180'} height={'180'} />
      </div>
    </>
  );
}

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

  return (
    <>
      <div>Now showing product with name - {name}</div>;
      {/* <div>
        <p>{land.name}</p>
        <img
          src={land.flags.png}
          alt={land.name.common}
          width={'180'}
          height={'180'}
        />
      </div> */}
    </>
  );
}

import { useState, useEffect } from 'react';
import { fetchOneLand } from '../../services/eventsApi';

export function FetchOneLand() {
  const [land, setLand] = useState(null);
  useEffect(() => {
    fetchOneLand().then(setLand);
  }, []);
  console.log(land);

  return (
    <>
      <div>
        <p>{land.name}</p>
        <img
          src={land.flags.png}
          alt={land.name.common}
          width={'180'}
          height={'180'}
        />
      </div>
    </>
  );
}

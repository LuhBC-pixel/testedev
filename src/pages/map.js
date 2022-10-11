import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Circle, MapContainer, TileLayer, Tooltip } from 'react-leaflet';
import { Navbar } from '../components/Navbar';
import useMonitoring from '../hooks/useMonitoring';

import 'leaflet/dist/leaflet.css';

export default function Map() {
  const [data, setData] = useState([]);
  const { getListMonitoring } = useMonitoring();
  const router = useRouter();

  const findClientCSD = async () => {
    const response = await getListMonitoring();
    if (response) {
      const clientCSD = response.filter(
        (item) => item.cliente.nome === 'CSD VAREJO'
      );
      console.log(clientCSD);
      setData(clientCSD);
    } else {
      alert('Erro ao buscar dados');
    }
  };

  useEffect(() => {
    findClientCSD();
  }, []);

  return (
    <>
      <Navbar path={router.asPath} />
      <MapContainer
        center={[-20.6739, 310.5396]}
        zoom={5}
        scrollWheelZoom={false}
      >
        <Circle
          center={[-23.419026, -51.944131]}
          radius={20}
          pathOptions={{ color: 'blue' }}
        >
          <Tooltip>Latitude</Tooltip>
        </Circle>
      </MapContainer>
    </>
  );
}

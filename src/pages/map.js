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
      <main>
        <div>
          <h1>Mapa!!!</h1>
          <MapContainer
            center={[-20.6739, 310.5396]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            {data.map((item) => {
              return (
                <Circle
                  key={item.id}
                  center={[item.latitude, item.longitude]}
                  radius={20}
                  fillOpacity={0.5}
                  stroke={false}
                >
                  <Tooltip>Latitude: {item.latitude}</Tooltip>
                </Circle>
              );
            })}
          </MapContainer>
        </div>
      </main>
    </>
  );
}

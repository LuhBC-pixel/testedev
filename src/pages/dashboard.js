import { useEffect } from 'react';
// import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import useMonitoring from '../hooks/useMonitoring';

export default function Dashboard() {
  const { getListMonitoring } = useMonitoring();

  const findClientCSD = async () => {
    const data = await getListMonitoring();
    const clientCSD = data.filter((item) => item.cliente.nome === 'CSD VAREJO');
    console.log(clientCSD);
  };

  useEffect(() => {
    findClientCSD();
  }, []);

  return <h1>Hello!!!</h1>;
}

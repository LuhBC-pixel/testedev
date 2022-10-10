import { useRouter } from 'next/router';
import { Navbar } from '../components/Navbar';

export default function Chart() {
  const router = useRouter();

  return (
    <>
      <Navbar path={router.asPath} />
      <div>
        <h1>Gráfico!!!</h1>
      </div>
    </>
  );
}

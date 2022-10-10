import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import useAuth from '../hooks/useAuth';

const schema = yup.object({
  login: yup.string().required('Login obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

const LOGIN = process.env.NEXT_PUBLIC_LOGIN_NAME;
const PASSWORD = process.env.NEXT_PUBLIC_LOGIN_PASSWORD;

export default function Home() {
  const { login } = useAuth();
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const onSumit = async (data) => {
    if (data.login === LOGIN && data.password === PASSWORD) {
      const response = await login(data.login, data.password);
      if (response) {
        console.log(response);
        router.push('/dashboard');
      } else {
        alert('Erro ao fazer login');
      }
    } else {
      alert('Login ou senha inválidos');
    }
  };

  return (
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            Entre com sua conta
          </h2>
        </div>
        <form
          className='mt-8 space-y-6 border-blue-700'
          onSubmit={handleSubmit(onSumit)}
        >
          <div className='-space-y-px rounded-md shadow-sm'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Login
              </label>
              <input
                id='login'
                name='login'
                type='text'
                required
                className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Login'
                {...register('login')}
              />
              {errors.login && (
                <p className='text-red-500'>
                  {errors.login && errors.login.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Senha
              </label>
              <input
                id='password'
                name='password'
                type='password'
                required
                className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Senha'
                {...register('password')}
              />
              {errors.password && (
                <p className='text-red-500'>
                  {errors.password && errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

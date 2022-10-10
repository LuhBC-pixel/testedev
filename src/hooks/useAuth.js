import useCookies from './useCookies';
import api from '../api';

export default function useAuth() {
  const [getData, setData, removeData] = useCookies('auth');

  const login = async (_login, password) => {
    const response = await api.post('/login', {
      login: _login,
      password: password,
    });
    if (response) {
      setData(response);
      api.setToken(response.token);
      return response;
    }
    return null;
  };

  const logout = async () => {
    return removeData();
  };

  return {
    login,
    logout,
  };
}

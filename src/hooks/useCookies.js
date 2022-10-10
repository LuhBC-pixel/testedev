import { getCookie, setCookies, removeCookies } from 'cookies-next';

const GLOBAL_KEY = process.env.NEXT_PUBLIC_COOKIES_KEY;

export default function useCookies(key) {
  const get = () => {
    const value = getCookie(GLOBAL_KEY + key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  };

  const set = (value) => {
    return setCookies(GLOBAL_KEY + key, JSON.stringify(value));
  };

  const remove = () => {
    return removeCookies(GLOBAL_KEY + key);
  };

  return [get, set, remove];
}

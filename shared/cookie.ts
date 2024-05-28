import { destroyCookie, parseCookies, setCookie } from "nookies";
import { StateStorage } from 'zustand/middleware';


export const cookiePersistStorage: StateStorage = {
  setItem: (name, value) => {
    setCookie(null, name, value, {
      maxAge: 30 * 24 * 60 * 360,
      path: '/',
    });
  },
  getItem: (name) => {
    const value = parseCookies();
    return value[name] ?? null;
  },
  removeItem: (name) => {
    destroyCookie(null, name);
  },
};
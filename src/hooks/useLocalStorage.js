import { useState, useEffect } from 'react';

const useLocalStorage = key => {
  const defaultValue = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [state, setstate] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue,
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setstate];
};

export default useLocalStorage;

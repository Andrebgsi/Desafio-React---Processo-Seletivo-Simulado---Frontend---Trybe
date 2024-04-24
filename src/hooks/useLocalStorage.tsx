import { useState } from 'react';

type SetValue<T> = React.Dispatch<React.SetStateAction<T>>;

function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, SetValue<T>] {
  // Função para obter o valor do localStorage ou retornar o valor inicial
  const getInitialValue = (): T => {
    const storedValue = window.localStorage.getItem(key);
    if (storedValue) {
      try {
        return JSON.parse(storedValue);
      } catch (error) {
        console.error('Error parsing localStorage value:', error);
      }
    }
    return initialValue;
  };

  // Estado para armazenar o valor atual
  const [storedValue, setStoredValue] = useState<T>(getInitialValue);

  // Função para atualizar o valor no estado e no localStorage
  const setValue: SetValue<T> = (value: T | ((prevValue: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error updating localStorage:', error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;

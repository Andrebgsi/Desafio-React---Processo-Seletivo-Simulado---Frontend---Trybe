import { useEffect, useState } from 'react';
import { NewsType } from '../types';

function useFetch(fetchFunction: () => Promise<NewsType[]>) {
  const [data, setData] = useState<NewsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchFunction();
        setData(response);
        setLoading(false);
      } catch (e: any) {
        setError(e.message);
        console.error(e);
      }
    }
    fetchData();
  }, [fetchFunction]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;

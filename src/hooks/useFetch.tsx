/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

interface IUseFetchProps {
  data: any;
  isLoading: boolean;
}

function useFetch(url: string): IUseFetchProps {
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchUrl = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return { data, isLoading };
}

export { useFetch };

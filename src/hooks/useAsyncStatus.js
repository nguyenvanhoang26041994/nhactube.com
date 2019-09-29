import { useState, useCallback, useMemo } from 'react';

export default () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fetchRequest = useCallback(() => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
  }, [
    setIsLoading,
    setIsError,
    setIsSuccess,
  ]);

  const fetchFailure = useCallback(() => {
    setIsLoading(false);
    setIsError(true);
    setIsSuccess(false);
  }, [
    setIsLoading,
    setIsError,
    setIsSuccess,
  ]);

  const fetchSuccess = useCallback(() => {
    setIsLoading(false);
    setIsError(false);
    setIsSuccess(true);
  }, [
    setIsLoading,
    setIsError,
    setIsSuccess,
  ]);

  return useMemo(() => ({
    fetchRequest,
    fetchFailure,
    fetchSuccess,
    status: {
      isLoading,
      isError,
      isSuccess,
    },
    setStatus: {
      setIsLoading,
      setIsSuccess,
      setIsError,
    },
  }), [
    fetchRequest,
    fetchFailure,
    fetchSuccess,
    isLoading,
    isError,
    isSuccess,
    setIsLoading,
    setIsSuccess,
    setIsError,
  ]);
};

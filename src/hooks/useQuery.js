import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

// Hook
export default function useQuery() {
  const { search } = useLocation();

  return useMemo(() => (new URLSearchParams(search)), [search]);
}

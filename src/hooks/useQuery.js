import { useLocation } from 'react-router-dom';

// Hook
export default function useQuery() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return query;
}

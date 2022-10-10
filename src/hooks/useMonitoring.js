import api from '../api';

export default function useMonitoring() {
  const getListMonitoring = async () => {
    const response = await api.get('/monitoramento/instalacoes');
    if (response) {
      return response;
    }
    return null;
  };

  return {
    getListMonitoring,
  };
}

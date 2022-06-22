import api from '../../utils/axios';

export const fetchDataService = async () => {
  return await api.get(`companies`);
};
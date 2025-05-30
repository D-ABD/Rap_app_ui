import { useQuery } from '@tanstack/react-query';
import api from '@/src/api/axios';
import {
  LogUtilisateur,
  PaginatedLogUtilisateurList,
  LogsListParams,
} from '@/src/types/logs_types';

const LOGS_UTILISATEUR_KEY = ['logs_utilisateur'];

export const useLogsUtilisateur = (params?: LogsListParams) => {
  return useQuery<PaginatedLogUtilisateurList>({
    queryKey: [...LOGS_UTILISATEUR_KEY, params],
    queryFn: async () => {
      const res = await api.get('/logsutilisateur/', { params });
      return res.data;
    },
  });
};

export const useLogUtilisateur = (id: number) => {
  return useQuery<LogUtilisateur>({
    queryKey: [...LOGS_UTILISATEUR_KEY, id],
    queryFn: async () => {
      const res = await api.get(`/logsutilisateur/${id}/`);
      return res.data;
    },
    enabled: !!id,
  });
};

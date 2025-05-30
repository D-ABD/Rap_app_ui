import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/src/api/axios';
import {
  HistoriqueStatutVAE,
  PaginatedHistoriqueStatutVAEList,
  HistoriquesVaeListParams
} from '@/src/types/historiqueStatutVAE_types';

const HISTORIQUES_STATUT_VAE_KEY = ['historiques_statut_vae'];

export const useHistoriquesStatutVAE = (params?: HistoriquesVaeListParams) => {
  return useQuery<PaginatedHistoriqueStatutVAEList>({
    queryKey: [...HISTORIQUES_STATUT_VAE_KEY, params],
    queryFn: async () => {
      const res = await api.get('/historiquesstatutvae/', { params });
      return res.data;
    },
  });
};

export const useHistoriqueStatutVAE = (id: number) => {
  return useQuery<HistoriqueStatutVAE>({
    queryKey: [...HISTORIQUES_STATUT_VAE_KEY, id],
    queryFn: async () => {
      const res = await api.get(`/historiquesstatutvae/${id}/`);
      return res.data;
    },
    enabled: !!id,
  });
};

export const useCreateHistoriqueStatutVAE = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: Partial<HistoriqueStatutVAE>) => {
      const res = await api.post('/historiquesstatutvae/', data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: HISTORIQUES_STATUT_VAE_KEY });
    },
  });
};

export const useUpdateHistoriqueStatutVAE = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: Partial<HistoriqueStatutVAE>) => {
      const res = await api.patch(`/historiquesstatutvae/${id}/`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: HISTORIQUES_STATUT_VAE_KEY });
    },
  });
};

export const useDeleteHistoriqueStatutVAE = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/historiquesstatutvae/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: HISTORIQUES_STATUT_VAE_KEY });
    },
  });
};

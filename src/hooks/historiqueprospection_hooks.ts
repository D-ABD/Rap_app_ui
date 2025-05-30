  import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/src/api/axios';
import {
  HistoriqueProspection,
  PaginatedHistoriqueProspectionList,
  HistoriquesProspectionListParams
} from '@/src/types/historiqueProspection_types';

const HISTORIQUE_PROSPECTION_KEY = ['historiques_prospection'];

export const useHistoriquesProspection = (params?: HistoriquesProspectionListParams) => {
  return useQuery<PaginatedHistoriqueProspectionList>({
    queryKey: [...HISTORIQUE_PROSPECTION_KEY, params],
    queryFn: async () => {
      const res = await api.get('/historiquesprospection/', { params });
      return res.data;
    },
  });
};

export const useHistoriqueProspection = (id: number) => {
  return useQuery<HistoriqueProspection>({
    queryKey: [...HISTORIQUE_PROSPECTION_KEY, id],
    queryFn: async () => {
      const res = await api.get(`/historiquesprospection/${id}/`);
      return res.data;
    },
    enabled: !!id,
  });
};

export const useCreateHistoriqueProspection = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: Partial<HistoriqueProspection>) => {
      const res = await api.post('/historiquesprospection/', data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: HISTORIQUE_PROSPECTION_KEY });
    },
  });
};

export const useUpdateHistoriqueProspection = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: Partial<HistoriqueProspection>) => {
      const res = await api.patch(`/historiquesprospection/${id}/`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: HISTORIQUE_PROSPECTION_KEY });
    },
  });
};

export const useDeleteHistoriqueProspection = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/historiquesprospection/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: HISTORIQUE_PROSPECTION_KEY });
    },
  });
};

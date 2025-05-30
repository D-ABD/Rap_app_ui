import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/src/api/axios';
import {
  Rapport,
  RapportRequest,
  PatchedRapportRequest,
  PaginatedRapportList,
  RapportsListParams,
} from '@/src/types/rapport_types';

const RAPPORTS_KEY = ['rapports'];

export const useRapports = (params?: RapportsListParams) => {
  return useQuery<PaginatedRapportList>({
    queryKey: [...RAPPORTS_KEY, params],
    queryFn: async () => {
      const res = await api.get('/rapports/', { params });
      return res.data;
    },
  });
};

export const useRapport = (id: number) => {
  return useQuery<Rapport>({
    queryKey: [...RAPPORTS_KEY, id],
    queryFn: async () => {
      const res = await api.get(`/rapports/${id}/`);
      return res.data;
    },
    enabled: !!id,
  });
};

export const useCreateRapport = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: RapportRequest) => {
      const res = await api.post('/rapports/', data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: RAPPORTS_KEY });
    },
  });
};

export const useUpdateRapport = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: PatchedRapportRequest) => {
      const res = await api.patch(`/rapports/${id}/`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: RAPPORTS_KEY });
    },
  });
};

export const useDeleteRapport = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/rapports/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: RAPPORTS_KEY });
    },
  });
};

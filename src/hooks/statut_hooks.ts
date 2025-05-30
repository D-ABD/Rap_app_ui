import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/src/api/axios';
import {
  Statut,
  StatutRequest,
  PatchedStatutRequest,
  PaginatedStatutList,
  StatutsListParams,
} from '@/src/types/statut_types';

const STATUTS_KEY = ['statuts'];

export const useStatuts = (params?: StatutsListParams) => {
  return useQuery<PaginatedStatutList>({
    queryKey: [...STATUTS_KEY, params],
    queryFn: async () => {
      const res = await api.get('/statuts/', { params });
      return res.data;
    },
  });
};

export const useStatut = (id: number) => {
  return useQuery<Statut>({
    queryKey: [...STATUTS_KEY, id],
    queryFn: async () => {
      const res = await api.get(`/statuts/${id}/`);
      return res.data;
    },
    enabled: !!id,
  });
};

export const useCreateStatut = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: StatutRequest) => {
      const res = await api.post('/statuts/', data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: STATUTS_KEY });
    },
  });
};

export const useUpdateStatut = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: PatchedStatutRequest) => {
      const res = await api.patch(`/statuts/${id}/`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: STATUTS_KEY });
    },
  });
};

export const useDeleteStatut = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/statuts/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: STATUTS_KEY });
    },
  });
};

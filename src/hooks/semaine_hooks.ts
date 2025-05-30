import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/src/api/axios';
import {
  Semaine,
  SemaineRequest,
  PatchedSemaineRequest,
  PaginatedSemaineList,
  SemainesListParams,
} from '@/src/types/semaine_types';

const SEMAINES_KEY = ['semaines'];

export const useSemaines = (params?: SemainesListParams) => {
  return useQuery<PaginatedSemaineList>({
    queryKey: [...SEMAINES_KEY, params],
    queryFn: async () => {
      const res = await api.get('/semaines/', { params });
      return res.data;
    },
  });
};

export const useSemaine = (id: number) => {
  return useQuery<Semaine>({
    queryKey: [...SEMAINES_KEY, id],
    queryFn: async () => {
      const res = await api.get(`/semaines/${id}/`);
      return res.data;
    },
    enabled: !!id,
  });
};

export const useCreateSemaine = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: SemaineRequest) => {
      const res = await api.post('/semaines/', data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: SEMAINES_KEY });
    },
  });
};

export const useUpdateSemaine = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: PatchedSemaineRequest) => {
      const res = await api.patch(`/semaines/${id}/`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: SEMAINES_KEY });
    },
  });
};

export const useDeleteSemaine = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/semaines/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: SEMAINES_KEY });
    },
  });
};

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/src/api/axios';
import {
  PrepaCompGlobal,
  PrepaCompGlobalRequest,
  PatchedPrepaCompGlobalRequest,
  PaginatedPrepaCompGlobalList,
  PrepaGlobauxListParams,
} from '@/src/types/prepaComp_types';

const PREPA_COMP_GLOBAL_KEY = ['prepa_comp_global'];

export const usePrepaCompGlobaux = (params?: PrepaGlobauxListParams) => {
  return useQuery<PaginatedPrepaCompGlobalList>({
    queryKey: [...PREPA_COMP_GLOBAL_KEY, params],
    queryFn: async () => {
      const res = await api.get('/prepacompglobaux/', { params });
      return res.data;
    },
  });
};

export const usePrepaCompGlobal = (id: number) => {
  return useQuery<PrepaCompGlobal>({
    queryKey: [...PREPA_COMP_GLOBAL_KEY, id],
    queryFn: async () => {
      const res = await api.get(`/prepacompglobaux/${id}/`);
      return res.data;
    },
    enabled: !!id,
  });
};

export const useCreatePrepaCompGlobal = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: PrepaCompGlobalRequest) => {
      const res = await api.post('/prepacompglobaux/', data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PREPA_COMP_GLOBAL_KEY });
    },
  });
};

export const useUpdatePrepaCompGlobal = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: PatchedPrepaCompGlobalRequest) => {
      const res = await api.patch(`/prepacompglobaux/${id}/`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PREPA_COMP_GLOBAL_KEY });
    },
  });
};

export const useDeletePrepaCompGlobal = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/prepacompglobaux/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PREPA_COMP_GLOBAL_KEY });
    },
  });
};

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/src/api/axios';
import {
  TypeOffre,
  TypeOffreRequest,
  PatchedTypeOffreRequest,
  PaginatedTypeOffreList,
  TypeoffresListParams,
} from '@/src/types/typeOffre_types';

const TYPE_OFFRE_KEY = ['typeoffres'];

export const useTypeOffres = (params?: TypeoffresListParams) => {
  return useQuery<PaginatedTypeOffreList>({
    queryKey: [...TYPE_OFFRE_KEY, params],
    queryFn: async () => {
      const res = await api.get('/typeoffres/', { params });
      return res.data;
    },
  });
};

export const useTypeOffre = (id: number) => {
  return useQuery<TypeOffre>({
    queryKey: [...TYPE_OFFRE_KEY, id],
    queryFn: async () => {
      const res = await api.get(`/typeoffres/${id}/`);
      return res.data;
    },
    enabled: !!id,
  });
};

export const useCreateTypeOffre = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: TypeOffreRequest) => {
      const res = await api.post('/typeoffres/', data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TYPE_OFFRE_KEY });
    },
  });
};

export const useUpdateTypeOffre = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: PatchedTypeOffreRequest) => {
      const res = await api.patch(`/typeoffres/${id}/`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TYPE_OFFRE_KEY });
    },
  });
};

export const useDeleteTypeOffre = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/typeoffres/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TYPE_OFFRE_KEY });
    },
  });
};

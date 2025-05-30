import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/src/api/axios';
import {
  Vae,
  VAERequest,
  PatchedVAERequest,
  PaginatedVAEList,
  VaesListParams,
} from '@/src/types/vae_types';

const VAE_KEY = ['vae'];

export const useVaes = (params?: VaesListParams) => {
  return useQuery<PaginatedVAEList>({
    queryKey: [...VAE_KEY, params],
    queryFn: async () => {
      const res = await api.get('/vaes/', { params });
      return res.data;
    },
  });
};

export const useVae = (id: number) => {
  return useQuery<Vae>({
    queryKey: [...VAE_KEY, id],
    queryFn: async () => {
      const res = await api.get(`/vaes/${id}/`);
      return res.data;
    },
    enabled: !!id,
  });
};

export const useCreateVae = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: VAERequest) => {
      const res = await api.post('/vaes/', data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: VAE_KEY });
    },
  });
};

export const useUpdateVae = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: PatchedVAERequest) => {
      const res = await api.patch(`/vaes/${id}/`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: VAE_KEY });
    },
  });
};

export const useDeleteVae = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/vaes/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: VAE_KEY });
    },
  });
};

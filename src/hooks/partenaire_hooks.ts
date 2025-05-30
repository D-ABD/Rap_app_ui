import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/src/api/axios';
import {
  Partenaire,
  PartenaireRequest,
  PatchedPartenaireRequest,
  PaginatedPartenaireList,
  PartenairesListParams,
} from '@/src/types/partenaire_types';

const PARTENAIRES_KEY = ['partenaires'];

export const usePartenaires = (params?: PartenairesListParams) => {
  return useQuery<PaginatedPartenaireList>({
    queryKey: [...PARTENAIRES_KEY, params],
    queryFn: async () => {
      const res = await api.get('/partenaires/', { params });
      return res.data;
    },
  });
};

export const usePartenaire = (id: number) => {
  return useQuery<Partenaire>({
    queryKey: [...PARTENAIRES_KEY, id],
    queryFn: async () => {
      const res = await api.get(`/partenaires/${id}/`);
      return res.data;
    },
    enabled: !!id,
  });
};

export const useCreatePartenaire = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: PartenaireRequest) => {
      const res = await api.post('/partenaires/', data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PARTENAIRES_KEY });
    },
  });
};

export const useUpdatePartenaire = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: PatchedPartenaireRequest) => {
      const res = await api.patch(`/partenaires/${id}/`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PARTENAIRES_KEY });
    },
  });
};

export const useDeletePartenaire = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/partenaires/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PARTENAIRES_KEY });
    },
  });
};

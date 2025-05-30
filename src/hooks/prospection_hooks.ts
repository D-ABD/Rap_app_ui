import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/src/api/axios';
import {
  Prospection,
  ProspectionRequest,
  PatchedProspectionRequest,
  PaginatedProspectionList,
  ProspectionsListParams,
} from '@/src/types/prospection_types';

const PROSPECTIONS_KEY = ['prospections'];

export const useProspections = (params?: ProspectionsListParams) => {
  return useQuery<PaginatedProspectionList>({
    queryKey: [...PROSPECTIONS_KEY, params],
    queryFn: async () => {
      const res = await api.get('/prospections/', { params });
      return res.data;
    },
  });
};

export const useProspection = (id: number) => {
  return useQuery<Prospection>({
    queryKey: [...PROSPECTIONS_KEY, id],
    queryFn: async () => {
      const res = await api.get(`/prospections/${id}/`);
      return res.data;
    },
    enabled: !!id,
  });
};

export const useCreateProspection = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: ProspectionRequest) => {
      const res = await api.post('/prospections/', data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROSPECTIONS_KEY });
    },
  });
};

export const useUpdateProspection = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: PatchedProspectionRequest) => {
      const res = await api.patch(`/prospections/${id}/`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROSPECTIONS_KEY });
    },
  });
};

export const useDeleteProspection = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/prospections/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROSPECTIONS_KEY });
    },
  });
};

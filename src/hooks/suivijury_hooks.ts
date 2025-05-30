import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/src/api/axios';
import {
  SuiviJury,
  SuiviJuryRequest,
  PatchedSuiviJuryRequest,
  PaginatedSuiviJuryList,
  SuivisJuryListParams,
} from '@/src/types/suiviJury_types';

const SUIVIS_JURY_KEY = ['suivis_jury'];

export const useSuivisJury = (params?: SuivisJuryListParams) => {
  return useQuery<PaginatedSuiviJuryList>({
    queryKey: [...SUIVIS_JURY_KEY, params],
    queryFn: async () => {
      const res = await api.get('/suivisjury/', { params });
      return res.data;
    },
  });
};

export const useSuiviJury = (id: number) => {
  return useQuery<SuiviJury>({
    queryKey: [...SUIVIS_JURY_KEY, id],
    queryFn: async () => {
      const res = await api.get(`/suivisjury/${id}/`);
      return res.data;
    },
    enabled: !!id,
  });
};

export const useCreateSuiviJury = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: SuiviJuryRequest) => {
      const res = await api.post('/suivisjury/', data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: SUIVIS_JURY_KEY });
    },
  });
};

export const useUpdateSuiviJury = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: PatchedSuiviJuryRequest) => {
      const res = await api.patch(`/suivisjury/${id}/`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: SUIVIS_JURY_KEY });
    },
  });
};

export const useDeleteSuiviJury = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/suivisjury/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: SUIVIS_JURY_KEY });
    },
  });
};

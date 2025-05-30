import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/src/api/axios';
import type {
  Centre,
  CentreRequest,
  PatchedCentreRequest,
  PaginatedCentreList,
  CentresListParams,
} from '@/src/types/centre_types';

const CENTRES_KEY = 'centres';

/**
 * 🔍 Récupère la liste paginée des centres avec filtres optionnels.
 */
export const useCentres = (params?: CentresListParams) => {
  return useQuery<PaginatedCentreList>({
    queryKey: [CENTRES_KEY, params],
    queryFn: async () => {
      const response = await api.get<PaginatedCentreList>('/centres/', { params });
      return response.data;
    },
  });
};

/**
 * 📄 Récupère un centre par son ID.
 */
export const useCentre = (id: number) => {
  return useQuery<Centre>({
    queryKey: [CENTRES_KEY, id],
    queryFn: async () => {
      const response = await api.get<Centre>(`/centres/${id}/`);
      return response.data;
    },
  });
};

/**
 * ➕ Crée un nouveau centre.
 */
export const useCreateCentre = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: CentreRequest) => {
      const response = await api.post<Centre>('/centres/', payload);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CENTRES_KEY] });
    },
  });
};

/**
 * ✏️ Met à jour partiellement un centre existant.
 */
export const useUpdateCentre = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: PatchedCentreRequest) => {
      const response = await api.patch<Centre>(`/centres/${id}/`, payload);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CENTRES_KEY, id] });
    },
  });
};

/**
 * ❌ Supprime un centre.
 */
export const useDeleteCentre = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/centres/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CENTRES_KEY] });
    },
  });
};

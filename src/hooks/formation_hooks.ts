import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/src/api/axios';
import type {
  Formation,
  FormationRequest,
  PatchedFormationRequest,
  PaginatedFormationList,
  FormationsListParams,
} from '@/src/types/formation_types';

const FORMATIONS_KEY = 'formations';

/**
 * 🎓 Récupère la liste paginée des formations avec filtres.
 */
export const useFormations = (params?: FormationsListParams) => {
  return useQuery<PaginatedFormationList>({
    queryKey: [FORMATIONS_KEY, params],
    queryFn: async () => {
      const response = await api.get<PaginatedFormationList>('/formations/', { params });
      return response.data;
    },
  });
};

/**
 * 📄 Récupère une formation par ID.
 */
export const useFormation = (id: number) => {
  return useQuery<Formation>({
    queryKey: [FORMATIONS_KEY, id],
    queryFn: async () => {
      const response = await api.get<Formation>(`/formations/${id}/`);
      return response.data;
    },
  });
};

/**
 * ➕ Crée une nouvelle formation.
 */
export const useCreateFormation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: FormationRequest) => {
      const response = await api.post<Formation>('/formations/', payload);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [FORMATIONS_KEY] });
    },
  });
};

/**
 * ✏️ Met à jour partiellement une formation (PATCH).
 */
export const useUpdateFormation = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: PatchedFormationRequest) => {
      const response = await api.patch<Formation>(`/formations/${id}/`, payload);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [FORMATIONS_KEY, id] });
    },
  });
};

/**
 * ❌ Supprime une formation.
 */
export const useDeleteFormation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/formations/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [FORMATIONS_KEY] });
    },
  });
};

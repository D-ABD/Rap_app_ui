import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/src/api/axios';
import type {
  Evenement,
  EvenementRequest,
  PatchedEvenementRequest,
  PaginatedEvenementList,
  EvenementsListParams,
  EvenementsStatsParTypeRetrieveParams,
} from '@/src/types/evenement_types';

const EVENEMENTS_KEY = 'evenements';

/**
 * 📅 Liste paginée des événements, avec filtres.
 */
export const useEvenements = (params?: EvenementsListParams) => {
  return useQuery<PaginatedEvenementList>({
    queryKey: [EVENEMENTS_KEY, params],
    queryFn: async () => {
      const response = await api.get<PaginatedEvenementList>('/evenements/', { params });
      return response.data;
    },
  });
};

/**
 * 📄 Récupère un événement par son ID.
 */
export const useEvenement = (id: number) => {
  return useQuery<Evenement>({
    queryKey: [EVENEMENTS_KEY, id],
    queryFn: async () => {
      const response = await api.get<Evenement>(`/evenements/${id}/`);
      return response.data;
    },
  });
};

/**
 * ➕ Crée un événement.
 */
export const useCreateEvenement = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: EvenementRequest) => {
      const response = await api.post<Evenement>('/evenements/', payload);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EVENEMENTS_KEY] });
    },
  });
};

/**
 * ✏️ Met à jour un événement (partiel).
 */
export const useUpdateEvenement = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: PatchedEvenementRequest) => {
      const response = await api.patch<Evenement>(`/evenements/${id}/`, payload);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EVENEMENTS_KEY, id] });
    },
  });
};

/**
 * ❌ Supprime un événement.
 */
export const useDeleteEvenement = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/evenements/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EVENEMENTS_KEY] });
    },
  });
};

/**
 * 📊 Récupère des statistiques d'événements (par type) entre deux dates.
 */
export const useEvenementStats = (params: EvenementsStatsParTypeRetrieveParams) => {
  return useQuery({
    queryKey: [EVENEMENTS_KEY, 'stats', params],
    queryFn: async () => {
      const response = await api.get('/evenements/stats_par_type/', { params });
      return response.data;
    },
    enabled: !!params.start && !!params.end,
  });
};

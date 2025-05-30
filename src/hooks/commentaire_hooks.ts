import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/src/api/axios';
import type {
  Commentaire,
  CommentaireRequest,
  PatchedCommentaireRequest,
  PaginatedCommentaireList,
  CommentairesListParams,
} from '@/src/types/commentaire_types';

const COMMENTAIRES_KEY = 'commentaires';

/**
 * 🔍 Liste paginée des commentaires, avec filtres.
 */
export const useCommentaires = (params?: CommentairesListParams) => {
  return useQuery<PaginatedCommentaireList>({
    queryKey: [COMMENTAIRES_KEY, params],
    queryFn: async () => {
      const response = await api.get<PaginatedCommentaireList>('/commentaires/', { params });
      return response.data;
    },
  });
};

/**
 * 📄 Récupère un commentaire par ID.
 */
export const useCommentaire = (id: number) => {
  return useQuery<Commentaire>({
    queryKey: [COMMENTAIRES_KEY, id],
    queryFn: async () => {
      const response = await api.get<Commentaire>(`/commentaires/${id}/`);
      return response.data;
    },
  });
};

/**
 * ➕ Crée un commentaire.
 */
export const useCreateCommentaire = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: CommentaireRequest) => {
      const response = await api.post<Commentaire>('/commentaires/', payload);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [COMMENTAIRES_KEY] });
    },
  });
};

/**
 * ✏️ Met à jour un commentaire partiellement.
 */
export const useUpdateCommentaire = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: PatchedCommentaireRequest) => {
      const response = await api.patch<Commentaire>(`/commentaires/${id}/`, payload);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [COMMENTAIRES_KEY, id] });
    },
  });
};

/**
 * ❌ Supprime un commentaire.
 */
export const useDeleteCommentaire = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/commentaires/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [COMMENTAIRES_KEY] });
    },
  });
};


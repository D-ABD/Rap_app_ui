import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/src/api/axios';
import type {
  CustomUser,
  CustomUserRequest,
  PatchedCustomUserRequest,
  PaginatedCustomUserList,
} from '@/src/types/customUser_types';

const USERS_KEY = 'customusers';

/**
 * 🔍 Récupère la liste paginée des utilisateurs.
 */
export const useCustomUsers = () => {
  return useQuery<PaginatedCustomUserList>({
    queryKey: [USERS_KEY],
    queryFn: async () => {
      const response = await api.get<PaginatedCustomUserList>('/users/');
      return response.data;
    },
  });
};

/**
 * 📄 Récupère un utilisateur par son ID.
 */
export const useCustomUser = (id: number) => {
  return useQuery<CustomUser>({
    queryKey: [USERS_KEY, id],
    queryFn: async () => {
      const response = await api.get<CustomUser>(`/users/${id}/`);
      return response.data;
    },
  });
};

/**
 * ➕ Crée un nouvel utilisateur.
 */
export const useCreateCustomUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: CustomUserRequest) => {
      const formData = new FormData();
      Object.entries(payload).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value);
        }
      });

      const response = await api.post<CustomUser>('/users/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USERS_KEY] });
    },
  });
};

/**
 * ✏️ Met à jour partiellement un utilisateur.
 */
export const useUpdateCustomUser = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: PatchedCustomUserRequest) => {
      const formData = new FormData();
      Object.entries(payload).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value);
        }
      });

      const response = await api.patch<CustomUser>(`/users/${id}/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USERS_KEY, id] });
    },
  });
};

/**
 * ❌ Supprime un utilisateur.
 */
export const useDeleteCustomUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/users/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USERS_KEY] });
    },
  });
};

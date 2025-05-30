import { useQuery } from '@tanstack/react-query';
import api from '@/src/api/axios';
import { User, UsersListParams } from '@/src/types/user_types';

const USERS_KEY = ['users'];

export const useUsers = (params?: UsersListParams) => {
  return useQuery<{ count: number; results: User[] }>({
    queryKey: [...USERS_KEY, params],
    queryFn: async () => {
      const res = await api.get('/users/', { params });
      return res.data;
    },
  });
};

export const useUser = (id: number) => {
  return useQuery<User>({
    queryKey: [...USERS_KEY, id],
    queryFn: async () => {
      const res = await api.get(`/users/${id}/`);
      return res.data;
    },
    enabled: !!id,
  });
};

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/src/api/axios';
import type {
  Document,
  DocumentRequest,
  PatchedDocumentRequest,
  PaginatedDocumentList,
  DocumentsListParams,
  DocumentsParFormationRetrieveParams,
} from '@/src/types/document_types';

const DOCUMENTS_KEY = 'documents';

/**
 * 📄 Liste paginée de tous les documents (global).
 */
export const useDocuments = (params?: DocumentsListParams) => {
  return useQuery<PaginatedDocumentList>({
    queryKey: [DOCUMENTS_KEY, params],
    queryFn: async () => {
      const response = await api.get<PaginatedDocumentList>('/documents/', { params });
      return response.data;
    },
  });
};

/**
 * 📄 Liste des documents liés à une formation spécifique.
 */
export const useDocumentsParFormation = (
  params: DocumentsParFormationRetrieveParams
) => {
  return useQuery<PaginatedDocumentList>({
    queryKey: [DOCUMENTS_KEY, 'formation', params.formation],
    queryFn: async () => {
      const response = await api.get<PaginatedDocumentList>('/documents/', {
        params,
      });
      return response.data;
    },
    enabled: !!params.formation,
  });
};


/**
 * 📄 Récupère un document par son ID.
 */
export const useDocument = (id: number) => {
  return useQuery<Document>({
    queryKey: [DOCUMENTS_KEY, id],
    queryFn: async () => {
      const response = await api.get<Document>(`/documents/${id}/`);
      return response.data;
    },
  });
};

/**
 * ➕ Crée un document (upload multipart).
 */
export const useCreateDocument = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: DocumentRequest) => {
      const formData = new FormData();
      Object.entries(payload).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value);
        }
      });

      const response = await api.post<Document>('/documents/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [DOCUMENTS_KEY] });
    },
  });
};

/**
 * ✏️ Met à jour un document (upload partiel multipart).
 */
export const useUpdateDocument = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: PatchedDocumentRequest) => {
      const formData = new FormData();
      Object.entries(payload).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value);
        }
      });

      const response = await api.patch<Document>(`/documents/${id}/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [DOCUMENTS_KEY, id] });
    },
  });
};

/**
 * ❌ Supprime un document.
 */
export const useDeleteDocument = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      await api.delete(`/documents/${id}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [DOCUMENTS_KEY] });
    },
  });
};

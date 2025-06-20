/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Rap_app
 * Documentation complète de l'API Rap_App pour l'application mobile et web.
 * OpenAPI spec version: 1.0.0
 */

export type SemaineDepartements = unknown | null;
export type SemaineNombreParAtelier = unknown | null;
export type SemaineRequestDepartements = unknown | null;
export type SemaineRequestNombreParAtelier = unknown | null;
export type PatchedSemaineRequestDepartements = unknown | null;
export type PatchedSemaineRequestNombreParAtelier = unknown | null;

/**
 * 📅 Serializer principal pour les objets Semaine.
 * Fournit une sortie enrichie via `to_serializable_dict`.
 */
export interface Semaine {
  readonly id?: number;
  centre: number | null;
  annee?: number;
  mois?: number;
  numero_semaine?: number;
  date_debut_semaine: string;
  date_fin_semaine: string;
  objectif_annuel_prepa?: number;
  objectif_mensuel_prepa?: number;
  objectif_hebdo_prepa?: number;
  nombre_places_ouvertes?: number;
  nombre_prescriptions?: number;
  nombre_presents_ic?: number;
  nombre_adhesions?: number;
  departements?: SemaineDepartements;
  nombre_par_atelier?: SemaineNombreParAtelier;
  readonly created_at?: string;
  readonly updated_at?: string;
  readonly created_by?: number | null;
  readonly updated_by?: number | null;
  readonly is_active?: boolean;
}

/**
 * 📅 Requête de création de Semaine.
 */
export interface SemaineRequest {
  centre: number | null;
  annee?: number;
  mois?: number;
  numero_semaine?: number;
  date_debut_semaine: string;
  date_fin_semaine: string;
  objectif_annuel_prepa?: number;
  objectif_mensuel_prepa?: number;
  objectif_hebdo_prepa?: number;
  nombre_places_ouvertes?: number;
  nombre_prescriptions?: number;
  nombre_presents_ic?: number;
  nombre_adhesions?: number;
  departements?: SemaineRequestDepartements;
  nombre_par_atelier?: SemaineRequestNombreParAtelier;
}

/**
 * 📅 Requête partielle de mise à jour de Semaine (PATCH).
 */
export interface PatchedSemaineRequest {
  centre?: number | null;
  annee?: number;
  mois?: number;
  numero_semaine?: number;
  date_debut_semaine?: string;
  date_fin_semaine?: string;
  objectif_annuel_prepa?: number;
  objectif_mensuel_prepa?: number;
  objectif_hebdo_prepa?: number;
  nombre_places_ouvertes?: number;
  nombre_prescriptions?: number;
  nombre_presents_ic?: number;
  nombre_adhesions?: number;
  departements?: PatchedSemaineRequestDepartements;
  nombre_par_atelier?: PatchedSemaineRequestNombreParAtelier;
}

/**
 * Paramètres de liste paginée pour les Semaines.
 */
export type SemainesListParams = {
  page?: number;
  page_size?: number;
};

/**
 * Résultat paginé pour la liste des Semaines.
 */
export interface PaginatedSemaineList {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: Semaine[];
}

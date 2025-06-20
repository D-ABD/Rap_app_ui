/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Rap_app
 * Documentation complète de l'API Rap_App pour l'application mobile et web.
 * OpenAPI spec version: 1.0.0
 */

/**
 * 📅 Serializer principal pour les événements liés à une formation.
 * Inclut toutes les données utiles pour affichage et analyse dans l'interface.
 */
export interface Evenement {
  readonly id?: number;

  /**
   * Formation associée à l'événement
   * @nullable
   */
  readonly formation_id?: number | null;

  /** Nom de la formation */
  readonly formation_nom?: string;

  /** Catégorie de l'événement (ex : forum, job dating, etc.) */
  type_evenement: EvenementTypeEvenement;

  /** Nom lisible du type */
  readonly type_evenement_display?: string;

  /**
   * Détail du type si 'Autre' est sélectionné
   * @maxLength 255
   * @nullable
   */
  description_autre?: string | null;

  /**
   * Détails ou informations supplémentaires
   * @nullable
   */
  details?: string | null;

  /**
   * Date prévue pour l'événement
   * @nullable
   */
  event_date?: string | null;

  /** Timestamp formaté (ex. 20240501) */
  readonly event_date_formatted?: number;

  /**
   * Lieu où se déroule l'événement
   * @maxLength 255
   * @nullable
   */
  lieu?: string | null;

  /**
   * Nombre de personnes attendues
   * @minimum 0
   * @maximum 2147483647
   * @nullable
   */
  participants_prevus?: number | null;

  /**
   * Nombre de participants présents
   * @minimum 0
   * @maximum 2147483647
   * @nullable
   */
  participants_reels?: number | null;

  /** Calculé automatiquement */
  readonly taux_participation?: number;

  /** Statut brut (code technique) */
  readonly status?: string;

  /** Nom lisible du statut */
  readonly status_label?: string;

  /** Couleur du statut */
  readonly status_color?: string;

  /** Date et heure de création de l'enregistrement */
  readonly created_at?: string;

  /** Date et heure de la dernière modification */
  readonly updated_at?: string;
}

/**
 * 📅 Données pour créer ou modifier un événement
 */
export interface EvenementRequest {
  /** Catégorie de l'événement (ex : forum, job dating, etc.) */
  type_evenement: EvenementTypeEvenement;

  /**
   * Détail du type si 'Autre' est sélectionné
   * @maxLength 255
   * @nullable
   */
  description_autre?: string | null;

  /**
   * Détails ou informations supplémentaires
   * @nullable
   */
  details?: string | null;

  /**
   * Date prévue pour l'événement
   * @nullable
   */
  event_date?: string | null;

  /**
   * Lieu où se déroule l'événement
   * @maxLength 255
   * @nullable
   */
  lieu?: string | null;

  /**
   * Nombre de personnes attendues
   * @minimum 0
   * @maximum 2147483647
   * @nullable
   */
  participants_prevus?: number | null;

  /**
   * Nombre de participants présents
   * @minimum 0
   * @maximum 2147483647
   * @nullable
   */
  participants_reels?: number | null;
}

/**
 * 📅 Données pour modifier partiellement un événement (PATCH)
 */
export interface PatchedEvenementRequest {
  /** Catégorie de l'événement (ex : forum, job dating, etc.) */
  type_evenement?: EvenementTypeEvenement;

  /**
   * Détail du type si 'Autre' est sélectionné
   * @maxLength 255
   * @nullable
   */
  description_autre?: string | null;

  /**
   * Détails ou informations supplémentaires
   * @nullable
   */
  details?: string | null;

  /**
   * Date prévue pour l'événement
   * @nullable
   */
  event_date?: string | null;

  /**
   * Lieu où se déroule l'événement
   * @maxLength 255
   * @nullable
   */
  lieu?: string | null;

  /**
   * Nombre de personnes attendues
   * @minimum 0
   * @maximum 2147483647
   * @nullable
   */
  participants_prevus?: number | null;

  /**
   * Nombre de participants présents
   * @minimum 0
   * @maximum 2147483647
   * @nullable
   */
  participants_reels?: number | null;
}

/**
 * Catégorie de l'événement (ex : forum, job dating, etc.)
 */
export type EvenementTypeEvenement = typeof EvenementTypeEvenement[keyof typeof EvenementTypeEvenement];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const EvenementTypeEvenement = {
  info_collective_presentiel: 'info_collective_presentiel',
  info_collective_distanciel: 'info_collective_distanciel',
  job_dating: 'job_dating',
  evenement_emploi: 'evenement_emploi',
  forum: 'forum',
  jpo: 'jpo',
  autre: 'autre',
} as const;

/**
 * 🔍 Paramètres de filtre pour la liste des événements
 */
export type EvenementsListParams = {
  /** Date maximale (YYYY-MM-DD) */
  date_max?: string;

  /** Date minimale (YYYY-MM-DD) */
  date_min?: string;

  /** ID de la formation */
  formation?: number;

  /** A page number within the paginated result set. */
  page?: number;

  /** Number of results to return per page. */
  page_size?: number;

  /** Type d'événement */
  type_evenement?: string;
};

/**
 * 🔍 Paramètres pour la récupération des stats d'événements
 */
export type EvenementsStatsParTypeRetrieveParams = {
  /** Date de début (YYYY-MM-DD) */
  start?: string;

  /** Date de fin (YYYY-MM-DD) */
  end?: string;
};

/**
 * 📄 Liste paginée d'événements
 */
export interface PaginatedEvenementList {
  count?: number;

  /** URL de la page suivante */
  next?: string | null;

  /** URL de la page précédente */
  previous?: string | null;

  results?: Evenement[];
}

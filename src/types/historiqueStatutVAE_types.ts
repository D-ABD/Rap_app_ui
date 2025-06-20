/**
 * Generated by orval v7.9.0 🍺  
 * Do not edit manually.  
 * Rap_app  
 * Documentation complète de l'API Rap_App pour l'application mobile et web.  
 * OpenAPI spec version: 1.0.0
 */

/**
 * 🎓 Historique des changements de statut d'une VAE.
 * Fournit les métadonnées utiles pour suivre la progression et les transitions.
 */
export interface HistoriqueStatutVAE {
  readonly id?: number;

  /** VAE concernée par ce changement de statut */
  readonly vae_id?: number;

  /** Référence textuelle de la VAE (ex: identifiant visible) */
  readonly vae_reference?: string;

  /** Nouveau statut de la VAE */
  statut: HistoriqueStatutVAEStatut;

  /** Libellé lisible du statut */
  readonly statut_libelle?: string;

  /**
   * Date à laquelle le changement de statut a eu lieu
   * (pas nécessairement la date de création de l'enregistrement)
   */
  date_changement_effectif: string;

  /** Notes ou informations supplémentaires sur ce changement de statut */
  commentaire?: string;

  /** Date et heure de création de l'enregistrement */
  readonly created_at?: string;

  /**
   * Utilisateur ayant créé l'enregistrement
   * @nullable
   */
  readonly created_by?: number | null;
}

/**
 * 🟢 Liste des statuts possibles d’une VAE dans l’historique
 */
export type HistoriqueStatutVAEStatut = typeof HistoriqueStatutVAEStatut[keyof typeof HistoriqueStatutVAEStatut];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const HistoriqueStatutVAEStatut = {
  info: 'info',
  dossier: 'dossier',
  attente_financement: 'attente_financement',
  accompagnement: 'accompagnement',
  jury: 'jury',
  terminee: 'terminee',
  abandonnee: 'abandonnee',
} as const;

/**
 * 🔍 Paramètres de pagination pour la liste des historiques VAE
 */
export type HistoriquesVaeListParams = {
  /**
   * A page number within the paginated result set.
   */
  page?: number;

  /**
   * Number of results to return per page.
   */
  page_size?: number;
};

/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Rap_app
 * Documentation complète de l'API Rap_App pour l'application mobile et web.
 * OpenAPI spec version: 1.0.0
 */

export interface PaginatedHistoriqueStatutVAEList {
  count?: number;
  /** @nullable */
  next?: string | null;
  /** @nullable */
  previous?: string | null;
  results?: HistoriqueStatutVAE[];
}

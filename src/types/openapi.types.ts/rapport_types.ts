// Enums (objets + types)
export const RapportTypeRapportEnum = {
  occupation: 'occupation',
  centre: 'centre',
  statut: 'statut',
  evenement: 'evenement',
  recrutement: 'recrutement',
  partenaire: 'partenaire',
  repartition: 'repartition',
  periodique: 'periodique',
  annuel: 'annuel',
  utilisateur: 'utilisateur',
} as const;
export type RapportTypeRapport = keyof typeof RapportTypeRapportEnum;

export const RapportPeriodeEnum = {
  quotidien: 'quotidien',
  hebdomadaire: 'hebdomadaire',
  mensuel: 'mensuel',
  trimestriel: 'trimestriel',
  annuel: 'annuel',
  personnalise: 'personnalise',
} as const;
export type RapportPeriode = keyof typeof RapportPeriodeEnum;

export const RapportFormatEnum = {
  pdf: 'pdf',
  excel: 'excel',
  csv: 'csv',
  html: 'html',
} as const;
export type RapportFormat = keyof typeof RapportFormatEnum;

// Interfaces principales
export interface Rapport {
  readonly id?: number;
  nom: string;
  type_rapport: RapportTypeRapport;
  readonly type_rapport_display?: string;
  periode: RapportPeriode;
  readonly periode_display?: string;
  date_debut: string;
  date_fin: string;
  format?: RapportFormat;
  readonly format_display?: string;
  centre?: number | null;
  readonly centre_nom?: string;
  type_offre?: number | null;
  readonly type_offre_nom?: string;
  statut?: number | null;
  readonly statut_nom?: string;
  formation?: number | null;
  readonly formation_nom?: string;
  donnees?: unknown;
  temps_generation?: number | null;
  readonly created_at?: string;
  readonly created_by?: number | null;
  readonly updated_at?: string;
  readonly updated_by?: number | null;
  readonly is_active?: boolean;
}

export interface RapportRequest {
  nom: string;
  type_rapport: RapportTypeRapport;
  periode: RapportPeriode;
  date_debut: string;
  date_fin: string;
  format?: RapportFormat;
  centre?: number | null;
  type_offre?: number | null;
  statut?: number | null;
  formation?: number | null;
  donnees?: unknown;
  temps_generation?: number | null;
}

export interface PatchedRapportRequest {
  nom?: string;
  type_rapport?: RapportTypeRapport;
  periode?: RapportPeriode;
  date_debut?: string;
  date_fin?: string;
  format?: RapportFormat;
  centre?: number | null;
  type_offre?: number | null;
  statut?: number | null;
  formation?: number | null;
  donnees?: unknown;
  temps_generation?: number | null;
}

export interface PaginatedRapportList {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: Rapport[];
}

export type RapportsListParams = {
  ordering?: string;
  page?: number;
  page_size?: number;
  search?: string;
};

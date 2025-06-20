/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Rap_app
 * Documentation complète de l'API Rap_App pour l'application mobile et web.
 * OpenAPI spec version: 1.0.0
 */

//
// Enums fusionnés pour éviter les re-déclarations
//

/**
 * Rôle attribué à cet utilisateur (utilisé dans toutes les interfaces)
 */
export const USER_ROLE = {
  superadmin: 'superadmin',
  admin: 'admin',
  stagiaire: 'stagiaire',
  staff: 'staff',
  test: 'test',
} as const;

export type CustomUserRole = keyof typeof USER_ROLE;
export type CustomUserRequestRole = keyof typeof USER_ROLE;
export type PatchedCustomUserRequestRole = keyof typeof USER_ROLE;

/* ============================================
 * 👤 UTILISATEUR
 * ============================================
 */

/**
 * 🎯 Sérialiseur du modèle CustomUser.
 * Affiche les infos publiques du profil + avatar + rôle + noms.
 */
export interface CustomUser {
  readonly id?: number;

  /**
   * Adresse email utilisée pour se connecter
   * @maxLength 254
   */
  email: string;

  /**
   * Nom d'utilisateur unique
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string;

  /** @maxLength 150 */
  first_name?: string;

  /** @maxLength 150 */
  last_name?: string;

  /**
   * Numéro de téléphone mobile
   * @maxLength 20
   */
  phone?: string;

  /** Bio ou description libre */
  bio?: string;

  /**
   * Image de profil
   * @nullable
   */
  avatar?: string | null;

  /**
   * URL de l'avatar (image de profil)
   * @nullable
   */
  readonly avatar_url?: string | null;

  /** Rôle attribué à cet utilisateur */
  role?: CustomUserRole;

  /** Nom lisible du rôle */
  readonly role_display?: string;

  /**
   * Designates whether this user should be treated as active.
   * Unselect this instead of deleting accounts.
   */
  is_active?: boolean;

  /** Date d'inscription */
  readonly date_joined?: string;

  /** Nom complet (prénom + nom) */
  readonly full_name?: string;
}

/**
 * 🎯 Sérialiseur de création ou mise à jour du modèle CustomUser.
 */
export interface CustomUserRequest {
  /**
   * Adresse email utilisée pour se connecter
   * @minLength 1
   * @maxLength 254
   */
  email: string;

  /**
   * Nom d'utilisateur unique
   * @minLength 1
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string;

  /** @maxLength 150 */
  first_name?: string;

  /** @maxLength 150 */
  last_name?: string;

  /**
   * Numéro de téléphone mobile
   * @maxLength 20
   */
  phone?: string;

  /** Bio ou description libre */
  bio?: string;

  /**
   * Image de profil
   * @nullable
   */
  avatar?: Blob | null;

  /** Rôle attribué à cet utilisateur */
  role?: CustomUserRequestRole;

  /**
   * Designates whether this user should be treated as active.
   * Unselect this instead of deleting accounts.
   */
  is_active?: boolean;
}

/**
 * 🎯 Sérialiseur de mise à jour partielle du modèle CustomUser.
 */
export interface PatchedCustomUserRequest {
  /**
   * Adresse email utilisée pour se connecter
   * @minLength 1
   * @maxLength 254
   */
  email?: string;

  /**
   * Nom d'utilisateur unique
   * @minLength 1
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username?: string;

  /** @maxLength 150 */
  first_name?: string;

  /** @maxLength 150 */
  last_name?: string;

  /**
   * Numéro de téléphone mobile
   * @maxLength 20
   */
  phone?: string;

  /** Bio ou description libre */
  bio?: string;

  /**
   * Image de profil
   * @nullable
   */
  avatar?: Blob | null;

  /** Rôle attribué à cet utilisateur */
  role?: PatchedCustomUserRequestRole;

  /**
   * Designates whether this user should be treated as active.
   * Unselect this instead of deleting accounts.
   */
  is_active?: boolean;
}

/**
 * 📄 Résultat paginé de la liste des utilisateurs.
 */
export interface PaginatedCustomUserList {
  count?: number;
  /** @nullable */
  next?: string | null;
  /** @nullable */
  previous?: string | null;
  results?: CustomUser[];
}

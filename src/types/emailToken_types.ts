/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Rap_app
 * Documentation complète de l'API Rap_App pour l'application mobile et web.
 * OpenAPI spec version: 1.0.0
 */

export interface EmailTokenRequestRequest {
  /** @minLength 1 */
  email: string;
  /** @minLength 1 */
  password: string;
}

/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Rap_app
 * Documentation complète de l'API Rap_App pour l'application mobile et web.
 * OpenAPI spec version: 1.0.0
 */

export interface EmailTokenResponse {
  access: string;
  refresh: string;
}

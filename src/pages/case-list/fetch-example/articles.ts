/**
 * src/pages/case-list/fetch-example/articles.ts
 *
 * Improved TypeScript types for the article search response.
 *
 * Changes:
 * - Clearer, documented types (JSDoc).
 * - Prefer singular `Hit` for single item; export `Hits` alias for backward compatibility.
 * - Use  where reasonable to signal immutability.
 * - Mark fields optional when backend may omit them.
 * - Add small unions (MatchLevel) to help developer ergonomics while remaining forward-compatible.
 * - Provide index signature for highlight results to allow extra fields without TS errors.
 *
 * Note: These are type-level improvements only. For runtime safety, add a parser/validator
 * (e.g., zod or io-ts) at the network boundary to validate untrusted backend responses.
 */

/**
 * Match level returned by highlight engines.
 * Keeping `| string` makes the union forward-compatible with unknown future values.
 */
export type MatchLevel = "none" | "partial" | "full" | string;

/**
 * A single highlighted field returned by the search backend.
 */
export interface HighlightResultField {
  matchLevel: MatchLevel;
  matchedWords: string[];
  /**
   * The highlighted value. Note: this may contain markup depending on backend.
   * Treat as untrusted when rendering into the DOM (sanitize if needed).
   */
  value: string;
  fullyHighlighted?: boolean;
}

/**
 * Mapping of fields to their highlight results.
 * Known fields are declared but an index signature allows future-proofing.
 */
export interface HighlightResult {
  author?: HighlightResultField;
  story_text?: HighlightResultField;
  title?: HighlightResultField;
  url?: HighlightResultField;
  [field: string]: HighlightResultField | undefined;
}

/**
 * A single "hit" (result item) returned from the search API.
 *
 * Many fields are optional because real-world search backends sometimes omit values.
 * Use defensive checks or a normalization step when consuming network data.
 */
export interface Hit {
  objectID: string;
  title?: string;
  url?: string;
  author?: string;
  story_text?: string;
  points?: number;
  num_comments?: number;
  children?: number[]; // IDs of child comments or stories
  story_id?: number | null;
  created_at?: string; // ISO date string
  created_at_i?: number; // timestamp integer
  updated_at?: string; // ISO date string
  _tags?: string[];
  _highlightResult?: HighlightResult;
}

/**
 * Backwards-compatibility alias: previous code used plural 'Hits' to mean a single item.
 * Prefer `Hit` for new code.
 */
export type Hits = Hit;

/**
 * Exhaustive flags the backend may provide.
 */
export interface ExhaustiveFlags {
  nbHits: boolean;
  typo: boolean;
}

/**
 * Processing timings; fields optional because not every backend provides all timings.
 */
export interface ProcessingTimings {
  _request?: {
    roundTrip?: number;
  };
  fetch?: {
    query?: number;
    scanning?: number;
    total?: number;
  };
  total?: number;
}

/**
 * Top-level search response.
 * Many fields are optional; when consuming, validate required invariants (e.g., hits array).
 */
export interface ArticlesSearchResponse {
  hits: Hit[];
  nbHits: number;
  page: number;
  nbPages?: number;
  hitsPerPage?: number;
  query?: string;
  params?: string;
  processingTimeMS?: number;
  processingTimingsMS?: ProcessingTimings;
  serverTimeMS?: number;
  exhaustive?: ExhaustiveFlags;
  exhaustiveNbHits?: boolean;
  exhaustiveTypo?: boolean;
}

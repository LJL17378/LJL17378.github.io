import type { Post } from "./posts";

export type SearchDocument = Pick<Post, "slug" | "title" | "summary" | "tags" | "publishedAt">;

export function searchPosts<T extends SearchDocument>(posts: T[], query: string, limit?: number): T[];
export function getRelatedPosts(
  posts: Post[],
  currentPost: Post,
  limit?: number,
): Post[];
export function getAdjacentPosts(
  posts: Post[],
  slug: string,
): { previous: Post | undefined; next: Post | undefined };

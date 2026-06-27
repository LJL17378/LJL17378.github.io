import type { Post } from "./posts";

export function searchPosts(posts: Post[], query: string, limit?: number): Post[];
export function getRelatedPosts(
  posts: Post[],
  currentPost: Post,
  limit?: number,
): Post[];
export function getAdjacentPosts(
  posts: Post[],
  slug: string,
): { previous: Post | undefined; next: Post | undefined };

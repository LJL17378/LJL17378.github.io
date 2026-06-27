function normalize(value) {
  return String(value || "").normalize("NFKC").trim().toLocaleLowerCase();
}

function searchScore(post, query) {
  const title = normalize(post.title);
  const summary = normalize(post.summary);
  const tags = post.tags.map(normalize);
  let score = 0;

  if (title === query) score += 100;
  else if (title.startsWith(query)) score += 50;
  else if (title.includes(query)) score += 30;

  if (tags.some((tag) => tag === query)) score += 40;
  else if (tags.some((tag) => tag.includes(query))) score += 20;

  if (summary.includes(query)) score += 10;
  return score;
}

export function searchPosts(posts, query, limit = 10) {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return [];

  return posts
    .map((post) => ({ post, score: searchScore(post, normalizedQuery) }))
    .filter(({ score }) => score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        b.post.publishedAt.localeCompare(a.post.publishedAt),
    )
    .slice(0, limit)
    .map(({ post }) => post);
}

export function getRelatedPosts(posts, currentPost, limit = 3) {
  const currentTags = new Set(currentPost.tags);
  return posts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => ({
      post,
      sharedTags: post.tags.filter((tag) => currentTags.has(tag)).length,
    }))
    .sort(
      (a, b) =>
        b.sharedTags - a.sharedTags ||
        b.post.publishedAt.localeCompare(a.post.publishedAt),
    )
    .slice(0, limit)
    .map(({ post }) => post);
}

export function getAdjacentPosts(posts, slug) {
  const sorted = [...posts].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
  const index = sorted.findIndex((post) => post.slug === slug);
  if (index < 0) return { previous: undefined, next: undefined };

  return {
    previous: sorted[index + 1],
    next: sorted[index - 1],
  };
}

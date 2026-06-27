import assert from 'node:assert/strict'
import test from 'node:test'
import {
  getAdjacentPosts,
  getRelatedPosts,
  searchPosts,
} from '../src/content/post-utils.mjs'

const posts = [
  {
    slug: 'react-hooks',
    title: 'React Hooks 实战',
    summary: '副作用与状态管理',
    tags: ['React', '前端'],
    publishedAt: '2026-03-03',
  },
  {
    slug: 'react-agent',
    title: 'React 工程实践',
    summary: '在 React 中实现 Agent UI',
    tags: ['React', 'AI'],
    publishedAt: '2026-03-02',
  },
  {
    slug: 'agent-basics',
    title: 'AI Agent 入门',
    summary: '工具调用与记忆',
    tags: ['AI'],
    publishedAt: '2026-03-01',
  },
  {
    slug: 'css-layout',
    title: 'CSS 布局',
    summary: 'Grid 与 Flexbox',
    tags: ['CSS', '前端'],
    publishedAt: '2026-02-28',
  },
]

test('search ranks title matches before summary matches and respects the limit', () => {
  const results = searchPosts(posts, 'agent', 2)

  assert.deepEqual(results.map((post) => post.slug), [
    'agent-basics',
    'react-agent',
  ])
})

test('search matches Chinese tags and returns no results for blank queries', () => {
  assert.deepEqual(
    searchPosts(posts, '前端').map((post) => post.slug),
    ['react-hooks', 'css-layout'],
  )
  assert.deepEqual(searchPosts(posts, '   '), [])
})

test('related posts rank shared tags first and exclude the current post', () => {
  const related = getRelatedPosts(posts, posts[1], 3)

  assert.deepEqual(related.map((post) => post.slug), [
    'react-hooks',
    'agent-basics',
    'css-layout',
  ])
})

test('adjacent posts follow descending publication order', () => {
  assert.deepEqual(getAdjacentPosts(posts, 'react-agent'), {
    previous: posts[2],
    next: posts[0],
  })
  assert.deepEqual(getAdjacentPosts(posts, 'missing'), {
    previous: undefined,
    next: undefined,
  })
})

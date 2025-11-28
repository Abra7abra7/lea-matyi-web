/**
 * Utility functions for page handling
 */

export function createSlug(url: string): string {
  // Remove protocol and domain
  const path = url
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/^[^/]+\//, '');
  
  // Remove trailing slash
  const cleanPath = path.replace(/\/$/, '');
  
  // If empty (homepage), return 'home'
  if (!cleanPath) return 'home';
  
  // Replace slashes with hyphens for nested paths
  return cleanPath.replace(/\//g, '-');
}

export function getPageBySlug(pages: any[], slug: string) {
  return pages.find((page) => {
    const pageSlug = createSlug(page.url);
    return pageSlug === slug;
  });
}


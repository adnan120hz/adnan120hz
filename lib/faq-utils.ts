import { faqs, type CategoryId, type FAQ } from '../data/faq';

export function getFaqById(id: number): FAQ | undefined {
  return faqs.find((f) => f.id === id);
}

export function getFaqsByCategory(category: CategoryId): FAQ[] {
  return faqs.filter((f) => f.category === category);
}

export function getAdjacentIds(id: number): { prev: number | null; next: number | null } {
  const idx = faqs.findIndex((f) => f.id === id);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? faqs[idx - 1].id : null,
    next: idx < faqs.length - 1 ? faqs[idx + 1].id : null,
  };
}

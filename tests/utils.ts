export function formatTitle(title: string): string {
  return title.trim().toLowerCase().replace(/\s+/g, '-');
}

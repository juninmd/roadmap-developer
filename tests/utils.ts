export function formatTitle(title: string): string {
  let formatted = title.trim().toLowerCase();
  while (formatted.indexOf(' ') !== -1) {
    formatted = formatted.replace(' ', '-');
  }
  return formatted;
}

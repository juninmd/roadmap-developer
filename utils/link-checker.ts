export function extractMarkdownLinks(content: string): string[] {
  const links: string[] = [];
  let currentIndex = 0;

  while (currentIndex < content.length) {
    const linkStart = content.indexOf("[", currentIndex);
    if (linkStart === -1) break;

    const linkTextEnd = content.indexOf("]", linkStart);
    if (linkTextEnd === -1) {
      currentIndex = linkStart + 1;
      continue;
    }

    const urlStart = content.indexOf("(", linkTextEnd);
    if (urlStart === -1 || urlStart !== linkTextEnd + 1) {
      currentIndex = linkTextEnd + 1;
      continue;
    }

    const urlEnd = content.indexOf(")", urlStart);
    if (urlEnd === -1) {
      currentIndex = urlStart + 1;
      continue;
    }

    const url = content.substring(urlStart + 1, urlEnd).trim();
    if (url) {
      links.push(url);
    }

    currentIndex = urlEnd + 1;
  }

  return links;
}

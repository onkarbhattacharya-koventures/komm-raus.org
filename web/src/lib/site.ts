export const site = {
  title: 'Komm Raus',
  description: 'Angebote für Schulen, Kinder- und Jugendgruppen im Freien',
  url: 'https://komm-raus.org',
  image: '/images/lagerfeuer-bg.jpg',
};

export function buildMeta({ title, description, url, image }: Partial<typeof site> = {}) {
  return {
    title: title || site.title,
    description: description || site.description,
    url: url || site.url,
    image: image || site.image,
  };
}

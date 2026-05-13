export const SITE_ORIGIN = "https://beshur.github.io";
export const SITE_NAME = "Spanish Cards";

export const DEFAULT_TITLE =
  "Spanish Cards — Practice Spanish Grammar & Vocabulary";
export const DEFAULT_DESCRIPTION =
  "Fill-in-the-blank flashcards for A2 and B1 Spanish exam prep. Drill tenses, ser/estar, subjunctive, reported speech, vocabulary and more.";

export interface SeoData {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  type?: "website" | "article";
}

export interface ResolvedSeo {
  title: string;
  fullTitle: string;
  description: string;
  url: string;
  image: string;
  type: "website" | "article";
}

export function resolveSeo(data: SeoData = {}): ResolvedSeo {
  const title = data.title ?? DEFAULT_TITLE;
  const fullTitle =
    data.title && !data.title.includes(SITE_NAME)
      ? `${data.title} · ${SITE_NAME}`
      : title;
  const description = data.description ?? DEFAULT_DESCRIPTION;
  const path = data.pathname ?? "/";
  const url = path.startsWith("http") ? path : `${SITE_ORIGIN}${path}`;
  const rawImage = data.image ?? "";
  const image = rawImage.startsWith("http")
    ? rawImage
    : `${SITE_ORIGIN}${rawImage}`;
  return {
    title,
    fullTitle,
    description,
    url,
    image,
    type: data.type ?? "website",
  };
}

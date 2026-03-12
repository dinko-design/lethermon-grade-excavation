export interface SanityCompanySettings {
  name: string;
  tagline?: string;
  description?: string;
  ownerName?: string;
  phone: string;
  phoneTel?: string;
  email?: string;
  website?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
  };
  geo?: { lat: number; lng: number };
  hours?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    google?: string;
    youtube?: string;
  };
  aggregateRating?: {
    ratingValue?: string;
    reviewCount?: string;
    bestRating?: string;
  };
  priceRange?: string;
  logo?: SanityImage;
  projectTypes?: string[];
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref?: string;
    _id?: string;
    url?: string;
  };
  alt?: string;
  hotspot?: { x: number; y: number; width: number; height: number };
  crop?: { top: number; bottom: number; left: number; right: number };
}

export interface SanityService {
  _id: string;
  title: string;
  slug: string;
  icon?: string;
  tagline: string;
  heroImage: SanityImage;
  description?: SanityBlock[];
  features: string[];
  process?: SanityProcessStep[];
  guarantee?: { title: string; description: string };
  faq?: SanityFaqItem[];
  galleryImages?: Array<{ asset: { _id: string; url: string }; alt?: string }>;
  videoTitle?: string;
  videoUrl?: string;
  videoPoster?: SanityImage;
  relatedServices?: Array<{ _id: string; title: string; slug: string; icon?: string }>;
  seoContent?: SanitySeoContentBlock[];
  serviceAreaIntro?: string;
  seo?: SanitySeo;
  order?: number;
  relatedReviews?: SanityReview[];
}

export interface SanityServiceArea {
  _id: string;
  city: string;
  slug: string;
  county?: string;
  zips?: string[];
  projects: number;
  description: string;
  neighborhoods?: string[];
  mapQuery?: string;
  intro?: string[];
  servicesHighlight?: string[];
  seo?: SanitySeo;
}

export interface SanityReview {
  _id?: string;
  name: string;
  role?: string;
  text: string;
  stars: number;
  project?: string;
  services?: Array<{ _id: string; title: string; slug: string }>;
  featured?: boolean;
}

export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category?: string;
  categorySlug?: string;
  image?: SanityImage;
  readTime?: string;
  content?: SanityBlock[];
  seo?: SanitySeo;
}

export interface SanityPressRelease {
  _id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content?: SanityBlock[];
}

export interface SanityJobListing {
  _id: string;
  title: string;
  type: string;
  location: string;
  description: string;
  requirements?: string[];
}

export interface SanityCategory {
  _id: string;
  title: string;
  slug: string;
  description?: string;
}

export interface SanitySeo {
  title?: string;
  description?: string;
}

export interface SanityProcessStep {
  title: string;
  description: string;
}

export interface SanityFaqItem {
  question: string;
  answer: string;
}

export interface SanitySeoContentBlock {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  linkText?: string;
  linkTo?: string;
}

export interface SanityBlock {
  _type: "block";
  _key: string;
  style?: string;
  children: Array<{
    _type: "span";
    _key: string;
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{ _key: string; _type: string; href?: string }>;
}

export interface SanityContentStore {
  settings: SanityCompanySettings | null;
  services: SanityService[];
  serviceAreas: SanityServiceArea[];
  reviews: SanityReview[];
  blogPosts: SanityBlogPost[];
  pressReleases: SanityPressRelease[];
  jobListings: SanityJobListing[];
  categories: SanityCategory[];
}

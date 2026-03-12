export const COMPANY_SETTINGS_QUERY = `*[_type == "companySettings"][0]{
  name,
  tagline,
  description,
  ownerName,
  phone,
  phoneTel,
  email,
  website,
  address,
  geo,
  hours,
  socialLinks,
  aggregateRating,
  priceRange,
  logo,
  projectTypes
}`;

export const ALL_SERVICES_QUERY = `*[_type == "service"] | order(order asc){
  _id,
  title,
  "slug": slug.current,
  icon,
  tagline,
  heroImage,
  description,
  features,
  process,
  guarantee,
  faq[]{question, answer},
  galleryImages[]{asset->{_id, url}, alt},
  videoTitle,
  videoUrl,
  videoPoster,
  "relatedServices": relatedServices[]->{_id, title, "slug": slug.current, icon},
  seoContent,
  serviceAreaIntro,
  seo,
  order
}`;

export const SERVICE_BY_SLUG_QUERY = `*[_type == "service" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  icon,
  tagline,
  heroImage,
  description,
  features,
  process,
  guarantee,
  faq[]{question, answer},
  galleryImages[]{asset->{_id, url}, alt},
  videoTitle,
  videoUrl,
  videoPoster,
  "relatedServices": relatedServices[]->{_id, title, "slug": slug.current, icon},
  seoContent,
  serviceAreaIntro,
  seo,
  order,
  "relatedReviews": *[_type == "review" && references(^._id)]{
    name, role, text, stars, project
  }
}`;

export const ALL_SERVICE_AREAS_QUERY = `*[_type == "serviceArea"] | order(projects desc){
  _id,
  city,
  "slug": slug.current,
  county,
  zips,
  projects,
  description,
  neighborhoods,
  mapQuery,
  intro,
  servicesHighlight,
  seo
}`;

export const SERVICE_AREA_BY_SLUG_QUERY = `*[_type == "serviceArea" && slug.current == $slug][0]{
  _id,
  city,
  "slug": slug.current,
  county,
  zips,
  projects,
  description,
  neighborhoods,
  mapQuery,
  intro,
  servicesHighlight,
  seo
}`;

export const ALL_REVIEWS_QUERY = `*[_type == "review"] | order(_createdAt desc){
  _id,
  name,
  role,
  text,
  stars,
  project,
  "services": services[]->{_id, title, "slug": slug.current},
  featured
}`;

export const ALL_BLOG_POSTS_QUERY = `*[_type == "blogPost"] | order(date desc){
  _id,
  title,
  "slug": slug.current,
  excerpt,
  date,
  "category": category->title,
  "categorySlug": category->slug.current,
  image,
  readTime,
  seo
}`;

export const BLOG_POST_BY_SLUG_QUERY = `*[_type == "blogPost" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  date,
  "category": category->title,
  "categorySlug": category->slug.current,
  image,
  readTime,
  content,
  seo
}`;

export const ALL_PRESS_RELEASES_QUERY = `*[_type == "pressRelease"] | order(date desc){
  _id,
  title,
  "slug": slug.current,
  date,
  excerpt,
  content
}`;

export const ALL_JOB_LISTINGS_QUERY = `*[_type == "jobListing" && isActive == true] | order(_createdAt desc){
  _id,
  title,
  type,
  location,
  description,
  requirements
}`;

export const ALL_CATEGORIES_QUERY = `*[_type == "category"] | order(title asc){
  _id,
  title,
  "slug": slug.current,
  description
}`;

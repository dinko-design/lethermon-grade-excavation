"use client";
import { createContext, useContext, useEffect, useState, useMemo, type ReactNode } from "react";
import { sanityClient, sanityEnabled } from "@/lib/sanity.client";
import {
  COMPANY_SETTINGS_QUERY,
  ALL_SERVICES_QUERY,
  ALL_SERVICE_AREAS_QUERY,
  ALL_REVIEWS_QUERY,
  ALL_BLOG_POSTS_QUERY,
  ALL_PRESS_RELEASES_QUERY,
  ALL_JOB_LISTINGS_QUERY,
  ALL_CATEGORIES_QUERY,
} from "@/lib/sanity.queries";
import type { SanityContentStore } from "@/lib/sanity.types";
import {
  reviews as staticReviews,
  serviceAreas as staticServiceAreas,
  serviceAreasDetailed as staticServiceAreasDetailed,
  blogPosts as staticBlogPosts,
  pressReleases as staticPressReleases,
  openPositions as staticOpenPositions,
  projectTypes as staticProjectTypes,
} from "../components/data";

interface ContentContextValue extends SanityContentStore {
  loading: boolean;
  error: string | null;
  source: "sanity" | "static";
}

const defaultValue: ContentContextValue = {
  settings: null,
  services: [],
  serviceAreas: [],
  reviews: [],
  blogPosts: [],
  pressReleases: [],
  jobListings: [],
  categories: [],
  loading: true,
  error: null,
  source: "static",
};

const ContentContext = createContext<ContentContextValue>(defaultValue);

function buildStaticFallback(): ContentContextValue {
  return {
    settings: {
      name: "Lethermon Grade Excavations",
      tagline: "Southwest Florida's Trusted Excavation Contractor",
      phone: "(941) 290-7208",
      phoneTel: "9412907208",
      ownerName: "Kameron Lethermon",
      email: "info@lethermongradeexcavations.com",
      website: "https://www.lethermongradeexcavations.com",
      address: { street: "1404 21st ST W.", city: "Palmetto", state: "FL", zip: "34221", country: "US" },
      geo: { lat: 27.4989, lng: -82.5748 },
      hours: "Mon-Fri 7AM-5PM, Sat by appointment",
      aggregateRating: { ratingValue: "5.0", reviewCount: "27", bestRating: "5" },
      priceRange: "$$",
      projectTypes: staticProjectTypes,
    },
    services: [],
    serviceAreas: Object.values(staticServiceAreasDetailed).map((a) => ({
      _id: a.slug,
      city: a.city,
      slug: a.slug,
      county: a.county,
      zips: a.zip,
      projects: a.projects,
      description: a.desc,
      neighborhoods: a.neighborhoods,
      mapQuery: a.mapQuery,
      intro: a.intro,
      servicesHighlight: a.servicesHighlight,
    })),
    reviews: staticReviews.map((r, i) => ({
      _id: `review-${i}`,
      name: r.name,
      role: r.role,
      text: r.text,
      stars: r.stars,
      project: r.project,
    })),
    blogPosts: staticBlogPosts.map((p) => ({
      _id: p.slug,
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt,
      date: p.date,
      category: p.category,
      readTime: p.readTime,
      ...(p as any),
    })),
    pressReleases: staticPressReleases.map((pr) => ({
      _id: pr.slug,
      title: pr.title,
      slug: pr.slug,
      date: pr.date,
      excerpt: pr.excerpt,
    })),
    jobListings: staticOpenPositions.map((j, i) => ({
      _id: `job-${i}`,
      title: j.title,
      type: j.type,
      location: j.location,
      description: j.desc,
    })),
    categories: [],
    loading: false,
    error: null,
    source: "static",
  };
}

export function SanityProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<ContentContextValue>(() =>
    sanityEnabled ? defaultValue : { ...buildStaticFallback(), loading: false },
  );

  useEffect(() => {
    if (!sanityEnabled) return;

    let cancelled = false;

    async function fetchAll() {
      try {
        const [settings, services, serviceAreas, reviews, blogPosts, pressReleases, jobListings, categories] =
          await Promise.all([
            sanityClient.fetch(COMPANY_SETTINGS_QUERY),
            sanityClient.fetch(ALL_SERVICES_QUERY),
            sanityClient.fetch(ALL_SERVICE_AREAS_QUERY),
            sanityClient.fetch(ALL_REVIEWS_QUERY),
            sanityClient.fetch(ALL_BLOG_POSTS_QUERY),
            sanityClient.fetch(ALL_PRESS_RELEASES_QUERY),
            sanityClient.fetch(ALL_JOB_LISTINGS_QUERY),
            sanityClient.fetch(ALL_CATEGORIES_QUERY),
          ]);

        if (cancelled) return;

        setData({
          settings,
          services: services || [],
          serviceAreas: serviceAreas || [],
          reviews: reviews || [],
          blogPosts: blogPosts || [],
          pressReleases: pressReleases || [],
          jobListings: jobListings || [],
          categories: categories || [],
          loading: false,
          error: null,
          source: "sanity",
        });
      } catch (err) {
        if (cancelled) return;
        console.warn("Sanity fetch failed, falling back to static data:", err);
        setData({ ...buildStaticFallback(), error: String(err) });
      }
    }

    fetchAll();
    return () => { cancelled = true; };
  }, []);

  return <ContentContext.Provider value={data}>{children}</ContentContext.Provider>;
}

export function useContent() {
  return useContext(ContentContext);
}

export function useCompanySettings() {
  return useContent().settings;
}

export function useServices() {
  return useContent().services;
}

export function useService(slug: string) {
  const { services } = useContent();
  return useMemo(() => services.find((s) => s.slug === slug) || null, [services, slug]);
}

export function useServiceAreas() {
  return useContent().serviceAreas;
}

export function useServiceArea(slug: string) {
  const { serviceAreas } = useContent();
  return useMemo(() => serviceAreas.find((a) => a.slug === slug) || null, [serviceAreas, slug]);
}

export function useReviews() {
  return useContent().reviews;
}

export function useBlogPosts() {
  return useContent().blogPosts;
}

export function usePressReleases() {
  return useContent().pressReleases;
}

export function useJobListings() {
  return useContent().jobListings;
}

export function useCategories() {
  return useContent().categories;
}

export function useContentLoading() {
  const { loading, error, source } = useContent();
  return { loading, error, source };
}

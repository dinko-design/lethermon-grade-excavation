import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";

const HomePage = lazy(() => import("./components/HomePage").then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import("./components/AboutPage").then((m) => ({ default: m.AboutPage })));
const ProjectsPage = lazy(() => import("./components/ProjectsPage").then((m) => ({ default: m.ProjectsPage })));
const GalleryPage = lazy(() => import("./components/GalleryPage").then((m) => ({ default: m.GalleryPage })));
const ContactPage = lazy(() => import("./components/ContactPage").then((m) => ({ default: m.ContactPage })));
const LandClearingPage = lazy(() => import("./components/services/LandClearingPage").then((m) => ({ default: m.LandClearingPage })));
const ExcavationPage = lazy(() => import("./components/services/ExcavationPage").then((m) => ({ default: m.ExcavationPage })));
const SiteGradingPage = lazy(() => import("./components/services/SiteGradingPage").then((m) => ({ default: m.SiteGradingPage })));
const DrainagePage = lazy(() => import("./components/services/DrainagePage").then((m) => ({ default: m.DrainagePage })));
const DemolitionPage = lazy(() => import("./components/services/DemolitionPage").then((m) => ({ default: m.DemolitionPage })));
const TrenchingPage = lazy(() => import("./components/services/TrenchingPage").then((m) => ({ default: m.TrenchingPage })));
const BlogPage = lazy(() => import("./components/BlogPage").then((m) => ({ default: m.BlogPage })));
const BlogDetailPage = lazy(() => import("./components/BlogDetailPage").then((m) => ({ default: m.BlogDetailPage })));
const ReviewsPage = lazy(() => import("./components/ReviewsPage").then((m) => ({ default: m.ReviewsPage })));
const ServiceAreasPage = lazy(() => import("./components/ServiceAreasPage").then((m) => ({ default: m.ServiceAreasPage })));
const ServiceAreaDetailPage = lazy(() => import("./components/ServiceAreaDetailPage").then((m) => ({ default: m.ServiceAreaDetailPage })));
const LocationPage = lazy(() => import("./components/LocationPage").then((m) => ({ default: m.LocationPage })));
const TrustPage = lazy(() => import("./components/TrustPage").then((m) => ({ default: m.TrustPage })));
const CareersPage = lazy(() => import("./components/CareersPage").then((m) => ({ default: m.CareersPage })));
const PressReleasesPage = lazy(() => import("./components/PressReleasesPage").then((m) => ({ default: m.PressReleasesPage })));
const MediaKitPage = lazy(() => import("./components/MediaKitPage").then((m) => ({ default: m.MediaKitPage })));
const TermsPage = lazy(() => import("./components/TermsPage").then((m) => ({ default: m.TermsPage })));
const PrivacyPage = lazy(() => import("./components/PrivacyPage").then((m) => ({ default: m.PrivacyPage })));
const SitemapPage = lazy(() => import("./components/SitemapPage").then((m) => ({ default: m.SitemapPage })));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "projects", Component: ProjectsPage },
      { path: "gallery", Component: GalleryPage },
      { path: "contact", Component: ContactPage },
      // Services
      { path: "services/land-clearing", Component: LandClearingPage },
      { path: "services/excavation", Component: ExcavationPage },
      { path: "services/site-grading", Component: SiteGradingPage },
      { path: "services/drainage", Component: DrainagePage },
      { path: "services/demolition", Component: DemolitionPage },
      { path: "services/trenching", Component: TrenchingPage },
      // Blog
      { path: "blog", Component: BlogPage },
      { path: "blog/:slug", Component: BlogDetailPage },
      // Reviews
      { path: "reviews", Component: ReviewsPage },
      // Service Areas
      { path: "service-areas", Component: ServiceAreasPage },
      { path: "service-areas/:slug", Component: ServiceAreaDetailPage },
      // Location
      { path: "location", Component: LocationPage },
      // Trust
      { path: "trust", Component: TrustPage },
      // Careers
      { path: "careers", Component: CareersPage },
      // Press
      { path: "press-releases", Component: PressReleasesPage },
      { path: "media-kit", Component: MediaKitPage },
      // Legal
      { path: "terms", Component: TermsPage },
      { path: "privacy-policy", Component: PrivacyPage },
      // Sitemap
      { path: "sitemap", Component: SitemapPage },
    ],
  },
]);

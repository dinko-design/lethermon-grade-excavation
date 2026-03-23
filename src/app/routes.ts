import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { LandingLayout } from "./components/LandingLayout";

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
const PressReleaseDetailPage = lazy(() => import("./components/PressReleaseDetailPage").then((m) => ({ default: m.PressReleaseDetailPage })));
const MediaKitPage = lazy(() => import("./components/MediaKitPage").then((m) => ({ default: m.MediaKitPage })));
const TermsPage = lazy(() => import("./components/TermsPage").then((m) => ({ default: m.TermsPage })));
const PrivacyPage = lazy(() => import("./components/PrivacyPage").then((m) => ({ default: m.PrivacyPage })));
const SitemapPage = lazy(() => import("./components/SitemapPage").then((m) => ({ default: m.SitemapPage })));
const TeamPage = lazy(() => import("./components/TeamPage").then((m) => ({ default: m.TeamPage })));
const VideosPage = lazy(() => import("./components/VideosPage").then((m) => ({ default: m.VideosPage })));
const VideoWatchPage = lazy(() => import("./components/VideoWatchPage").then((m) => ({ default: m.VideoWatchPage })));
const ServicesPage = lazy(() => import("./components/ServicesPage").then((m) => ({ default: m.ServicesPage })));
const FaithPage = lazy(() => import("./components/FaithPage").then((m) => ({ default: m.FaithPage })));
const MilitaryPage = lazy(() => import("./components/MilitaryPage").then((m) => ({ default: m.MilitaryPage })));

// Offer / Landing pages (Google Ads)
const LandClearingOffer = lazy(() => import("./components/landing/LandClearingOffer").then((m) => ({ default: m.LandClearingOffer })));
const ExcavationOffer = lazy(() => import("./components/landing/ExcavationOffer").then((m) => ({ default: m.ExcavationOffer })));
const SiteGradingOffer = lazy(() => import("./components/landing/SiteGradingOffer").then((m) => ({ default: m.SiteGradingOffer })));
const DrainageOffer = lazy(() => import("./components/landing/DrainageOffer").then((m) => ({ default: m.DrainageOffer })));
const DemolitionOffer = lazy(() => import("./components/landing/DemolitionOffer").then((m) => ({ default: m.DemolitionOffer })));

// Thank-you pages (conversion tracking destinations)
const LandClearingThankYou = lazy(() => import("./components/landing/LandClearingThankYou").then((m) => ({ default: m.LandClearingThankYou })));
const ExcavationThankYou = lazy(() => import("./components/landing/ExcavationThankYou").then((m) => ({ default: m.ExcavationThankYou })));
const SiteGradingThankYou = lazy(() => import("./components/landing/SiteGradingThankYou").then((m) => ({ default: m.SiteGradingThankYou })));
const DrainageThankYou = lazy(() => import("./components/landing/DrainageThankYou").then((m) => ({ default: m.DrainageThankYou })));
const DemolitionThankYou = lazy(() => import("./components/landing/DemolitionThankYou").then((m) => ({ default: m.DemolitionThankYou })));
const ContactThankYou = lazy(() => import("./components/ContactThankYou").then((m) => ({ default: m.ContactThankYou })));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "team", Component: TeamPage },
      { path: "projects", Component: ProjectsPage },
      { path: "gallery", Component: GalleryPage },
      { path: "contact", Component: ContactPage },
      { path: "contact/thank-you", Component: ContactThankYou },
      // Services
      { path: "services", Component: ServicesPage },
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
      // Videos
      { path: "videos", Component: VideosPage },
      { path: "videos/:slug", Component: VideoWatchPage },
      // Location
      { path: "location", Component: LocationPage },
      // Trust
      { path: "trust", Component: TrustPage },
      // Faith & Military
      { path: "faith", Component: FaithPage },
      { path: "military", Component: MilitaryPage },
      // Careers
      { path: "careers", Component: CareersPage },
      // Press
      { path: "press-releases", Component: PressReleasesPage },
      { path: "press-releases/:slug", Component: PressReleaseDetailPage },
      { path: "media-kit", Component: MediaKitPage },
      // Legal
      { path: "terms", Component: TermsPage },
      { path: "privacy-policy", Component: PrivacyPage },
      // Sitemap
      { path: "sitemap", Component: SitemapPage },
    ],
  },
  // Google Ads landing pages — minimal layout, no navigation
  {
    path: "/offer",
    Component: LandingLayout,
    children: [
      { path: "land-clearing", Component: LandClearingOffer },
      { path: "land-clearing/thank-you", Component: LandClearingThankYou },
      { path: "excavation", Component: ExcavationOffer },
      { path: "excavation/thank-you", Component: ExcavationThankYou },
      { path: "site-grading", Component: SiteGradingOffer },
      { path: "site-grading/thank-you", Component: SiteGradingThankYou },
      { path: "drainage", Component: DrainageOffer },
      { path: "drainage/thank-you", Component: DrainageThankYou },
      { path: "demolition", Component: DemolitionOffer },
      { path: "demolition/thank-you", Component: DemolitionThankYou },
    ],
  },
]);

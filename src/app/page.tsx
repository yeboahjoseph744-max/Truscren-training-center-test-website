"use client";

import { useReveal } from "@/lib/useReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/sections/CoursesSection";
import LearningPath from "@/components/sections/LearningPath";
import FormatSection from "@/components/sections/FormatSection";
import SubjectsSection from "@/components/sections/SubjectsSection";
import StatsSection from "@/components/sections/StatsSection";
import CorporateSection from "@/components/sections/CorporateSection";
import DiscoverSection from "@/components/sections/DiscoverSection";
import BrowseSection from "@/components/sections/BrowseSection";
import RequirementsSection from "@/components/sections/RequirementsSection";
import EnrolSection from "@/components/sections/EnrolSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import LocationsSection from "@/components/sections/LocationsSection";
import AboutSection from "@/components/sections/AboutSection";
import SiteFooter from "@/components/sections/SiteFooter";
import CourseModal from "@/components/modals/CourseModal";
import AuthModal from "@/components/modals/AuthModal";
import DashboardModal from "@/components/modals/DashboardModal";

export default function Home() {
  useReveal();
  return (
    <>
      <Navbar />
      <Hero />
      <CoursesSection />
      <LearningPath />
      <FormatSection />
      <SubjectsSection />
      <StatsSection />
      <CorporateSection />
      <DiscoverSection />
      <BrowseSection />
      <RequirementsSection />
      <EnrolSection />
      <CertificationsSection />
      <LocationsSection />
      <AboutSection />
      <SiteFooter />

      <CourseModal />
      <AuthModal />
      <DashboardModal />
    </>
  );
}

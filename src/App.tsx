
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./components/global/ThemeProvider";

import HomePage from "./pages/HomePage";
import PatientIntakePage from "./pages/PatientIntakePage";
import DoctorPortalPage from "./pages/DoctorPortalPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import HealthHubPage from "./pages/HealthHubPage";
import ArticlePage from "./pages/ArticlePage";
import NotFound from "./pages/NotFound";
import Layout from "./components/global/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/patient-intake" element={<PatientIntakePage />} />
              <Route path="/doctor" element={<DoctorPortalPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/health-hub" element={<HealthHubPage />} />
              <Route path="/health-hub/:articleId" element={<ArticlePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

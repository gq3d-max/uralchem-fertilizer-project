
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Partnership from "./pages/Partnership";
import Registration from "./pages/Registration";
import Logistics from "./pages/Logistics";
import Quality from "./pages/Quality";
import SoilApplication from "./pages/SoilApplication";
import DripIrrigation from "./pages/DripIrrigation";
import FoliarFeeding from "./pages/FoliarFeeding";
import Info from "./pages/Info";
import ArticlePage from "./pages/ArticlePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/soil-application" element={<SoilApplication />} />
          <Route path="/drip-irrigation" element={<DripIrrigation />} />
          <Route path="/foliar-feeding" element={<FoliarFeeding />} />
          <Route path="/info" element={<Info />} />
          <Route path="/info/:slug" element={<ArticlePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
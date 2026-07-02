import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "@/pages/Index";
import ScrollToTop from "@/components/ScrollToTop";

const Seguranca = lazy(() => import("@/pages/Seguranca"));
const Lgpd = lazy(() => import("@/pages/Lgpd"));
const QuemSomos = lazy(() => import("@/pages/QuemSomos"));
const Contato = lazy(() => import("@/pages/Contato"));
const SuporteGestaoTI = lazy(() => import("@/pages/SuporteGestaoTI"));
const InfraestruturaServidores = lazy(() => import("@/pages/InfraestruturaServidores"));
const LicenciamentoVendas = lazy(() => import("@/pages/LicenciamentoVendas"));
const CloudColaboracao = lazy(() => import("@/pages/CloudColaboracao"));
const Diagnostico = lazy(() => import("@/pages/Diagnostico"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/seguranca" element={<Seguranca />} />
            <Route path="/lgpd" element={<Lgpd />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/suporte-gestao-ti" element={<SuporteGestaoTI />} />
            <Route path="/infraestrutura-servidores" element={<InfraestruturaServidores />} />
            <Route path="/licenciamento-vendas" element={<LicenciamentoVendas />} />
            <Route path="/cloud-colaboracao" element={<CloudColaboracao />} />
            <Route path="/diagnostico" element={<Diagnostico />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "@/pages/Index";
import Seguranca from "@/pages/Seguranca";
import Lgpd from "@/pages/Lgpd";
import QuemSomos from "@/pages/QuemSomos";
import Contato from "@/pages/Contato";
import SuporteGestaoTI from "@/pages/SuporteGestaoTI";
import InfraestruturaServidores from "@/pages/InfraestruturaServidores";
import LicenciamentoVendas from "@/pages/LicenciamentoVendas";
import CloudColaboracao from "@/pages/CloudColaboracao";
import NotFound from "@/pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

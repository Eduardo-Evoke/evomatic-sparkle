import { Headset } from "lucide-react";

const TicketButton = () => {
  return (
    <a
      href="https://evoketi.desk.ms/?LoginPortal"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chamado"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-3 py-2.5 md:px-5 md:py-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 group"
    >
      <Headset className="w-5 h-5 shrink-0" />
      <span className="text-xs md:text-sm font-bold whitespace-nowrap hidden sm:inline">Deseja abrir um chamado?</span>
    </a>
  );
};

export default TicketButton;

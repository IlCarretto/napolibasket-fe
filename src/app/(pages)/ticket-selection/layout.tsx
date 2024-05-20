import { EventTotalProvider } from "@/app/context/EventTotalContext";

function TicketSelectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <EventTotalProvider>
      <div
        className="flex flex-col grow"
        style={{ minHeight: "calc(100vh - 66px)" }}
      >
        {children}
      </div>
    </EventTotalProvider>
  );
}

export default TicketSelectionLayout;

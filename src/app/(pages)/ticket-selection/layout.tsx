function TicketSelectionLayout({ children }: { children: React.ReactNode }) {
  return (
      <div
        className="flex flex-col grow"
        style={{ minHeight: "calc(100vh - 66px)" }}
      >
        {children}
      </div>
  );
}

export default TicketSelectionLayout;

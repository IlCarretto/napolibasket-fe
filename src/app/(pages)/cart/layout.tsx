import { EventTotalProvider } from "@/app/context/EventTotalContext";

function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <EventTotalProvider>
      <div>{children}</div>
    </EventTotalProvider>
  );
}

export default CartLayout;

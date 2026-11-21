import { Outlet } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";
import { WhatsappFloatingButton } from "../components/WhatsappFloatingButton/WhatsappFloatingButton";

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text">
      <WhatsappFloatingButton />
      <Navbar />
      <main className="flex-1 w-full max-w-3xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
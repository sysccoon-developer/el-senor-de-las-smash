import { EventsPage } from "@/features/events/EventsPage";
import { GalleryPage } from "@/features/gallery/GalleryPage";
import { MenuPage } from "@/features/menu/MenuPage";
import { NotFoundPage } from "@/features/not-found/NotFoundPage";
import { routes } from "@/shared/constants/NavLinks.constants";
import { MainLayout } from "@/shared/layout/MainLayout";
import { ScrollToTop } from "@/shared/ui/scrollToTop/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path={routes.index} element={<MainLayout />}>
        <Route index element={<MenuPage />} />
        <Route path={routes.events} element={<EventsPage />} />
        <Route path={routes.gallery} element={<GalleryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);  
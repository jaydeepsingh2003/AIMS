import { Outlet } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { useScrollToTop } from '../hooks/useScrollToTop';

export function MainLayout() {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text font-body selection:bg-brand-blue/20 selection:text-brand-navy">
      <Header />
      <main className="flex-1 w-full" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

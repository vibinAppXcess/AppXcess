import { Outlet } from 'react-router-dom';
import { Header, Footer } from '.';
import ScrollToTop from '../common/ScrollToTop';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
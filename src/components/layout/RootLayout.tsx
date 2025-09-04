import { Outlet } from 'react-router-dom';
import { Header, Footer } from '.';
import ScrollToTop from '../common/ScrollToTop';
import ChatWidget from '../common/ChatWidget';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default RootLayout;



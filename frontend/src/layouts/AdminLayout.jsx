import { lazy, Suspense } from 'react';
import FallbackLoading from '@/components/FallbackLoading';
import Footer from '@/components/layout/Footer';
import Preloader from '@/components/Preloader';

const TopNavigationBar = lazy(() => import('@/components/layout/TopNavigationBar'));
const VerticalNavigationBar = lazy(() => import('@/components/layout/VerticalNavigationBar'));

const AdminLayout = ({ children }) => {
  return (
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <Suspense fallback={<FallbackLoading />}>
        <TopNavigationBar />
      </Suspense>
      <div className="body flex-grow-1 d-flex">
        <Suspense fallback={<FallbackLoading />}>
          <VerticalNavigationBar />
        </Suspense>
        <div
          className="content flex-grow-1 p-3"
          style={{ marginLeft: '250px', width: 'calc(100% - 250px)', transition: 'margin-left 0.3s ease' }}
        >
          <div className="container-fluid container-xxl">
            <Suspense fallback={<Preloader />}>{children}</Suspense>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
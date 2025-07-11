import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CNavGroup, CNavItem, CNavTitle, CSpinner } from '@coreui/react'; 
import CIcon from '@coreui/icons-react';
import {
  cilBell, cilCalculator, cilChartPie, cilDescription, cilDrop,
  cilNotes, cilPuzzle, cilSpeedometer, cilStar, cilHospital,
} from '@coreui/icons';
import { Container, Row, Col } from 'react-bootstrap';
import FallbackLoading from '@/components/FallbackLoading';
import Preloader from '@/components/Preloader';
import TopNavigationBar from '@/components/layout/TopNavigationBar';
import VerticalNavigationBar from '@/components/layout/VerticalNavigationBar';
import Footer from '@/components/layout/Footer';

// Lazy-loaded components
const NotFound = React.lazy(() => import('@/app/(admin)/not-found'));
const PrescriptionTable = React.lazy(() => import('./components/PrescriptionTable.jsx'));
const PrescriptionDetailForm = React.lazy(() => import('./components/PrescriptionDetailForm.jsx'));
const Diagnosis = React.lazy(() => import('./components/healthauthorities/Diagnosis.jsx'));
const Prescription = React.lazy(() => import('./components/HealthcareThemes/Prescription.jsx'));
const Payers = React.lazy(() => import('./components/healthauthorities/Payers.jsx'));
const Pharmacies = React.lazy(() => import('./components/healthauthorities/Pharmacies.jsx'));
const Analytics = React.lazy(() => import('@/app/(admin)/dashboard/analytics/page'));
const Finance = React.lazy(() => import('@/app/(admin)/dashboard/finance/page'));
const Sales = React.lazy(() => import('@/app/(admin)/dashboard/sales/page'));
const EcommerceProducts = React.lazy(() => import('@/app/(admin)/ecommerce/products/page'));
const Chat = React.lazy(() => import('@/app/(admin)/apps/chat/page'));
const Invoices = React.lazy(() => import('@/app/(admin)/invoices/page'));
const Welcome = React.lazy(() => import('@/app/(admin)/pages/welcome/page'));
const Page404 = React.lazy(() => import('./components/pages/page404/Page404.js'));
const AuthSignIn = React.lazy(() => import('@/app/(other)/auth/sign-in/page'));
const ComingSoon = React.lazy(() => import('@/app/(other)/coming-soon/page'));

const appRoutes = [
  { path: '/', name: 'root', element: <Navigate to="/dashboard/analytics" /> },
  { path: '*', name: 'not-found', element: <NotFound /> },
  { path: '/prescription/authorities', name: 'Prescription', element: <PrescriptionTable /> },
  { path: '/prescription/PrescriptionDetailForm', name: 'Prescription Detail Form', element: <PrescriptionDetailForm /> },
  { path: '/dashboard/diagnosis', name: 'Diagnosis', element: <Diagnosis /> },
  { path: '/dashboard/prescription', name: 'Prescription', element: <Prescription /> },
  { path: '/healthauthorities/payers', name: 'Payers', element: <Payers /> },
  { path: '/pharmacy/pharmacies', name: 'Pharmacies', element: <Pharmacies /> },
  { path: '/health/authorities', name: 'Health Authorities', element: <div>Health Authorities Placeholder</div> },
  { path: '/dashboard/analytics', name: 'Analytics', element: <Analytics /> },
  { path: '/dashboard/finance', name: 'Finance', element: <Finance /> },
  { path: '/dashboard/sales', name: 'Sales', element: <Sales /> },
  { path: '/ecommerce/products', name: 'Products', element: <EcommerceProducts /> },
  { path: '/apps/chat', name: 'Chat', element: <Chat /> },
  { path: '/invoices', name: 'Invoices', element: <Invoices /> },
  { path: '/pages/welcome', name: 'Welcome', element: <Welcome /> },
  { path: '/auth/sign-in', name: 'Sign In', element: <AuthSignIn /> },
  { path: '/coming-soon', name: 'Coming Soon', element: <ComingSoon /> },
  { path: '/404', name: '404 Error', element: <Page404 /> },
];

export const navConfig = [
  { component: CNavTitle, name: 'Health Authorities' },
  { component: CNavItem, name: 'Prescription', to: '/prescription/authorities', icon: <CIcon icon={cilNotes} customClassName="nav-icon" /> },
  { component: CNavItem, name: 'Prescription Detail Form', to: '/prescription/PrescriptionDetailForm', icon: <CIcon icon={cilNotes} customClassName="nav-icon" /> },
  { component: CNavItem, name: 'Diagnosis', to: '/dashboard/diagnosis', icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" /> },
  { component: CNavTitle, name: 'Dashboard' },
  { component: CNavGroup, name: 'Dashboard', to: '/dashboard', icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />, items: [
    { component: CNavItem, name: 'Analytics', to: '/dashboard/analytics' },
    { component: CNavItem, name: 'Finance', to: '/dashboard/finance' },
    { component: CNavItem, name: 'Sales', to: '/dashboard/sales' },
  ] },
  { component: CNavTitle, name: 'Apps' },
  { component: CNavGroup, name: 'Ecommerce', to: '/ecommerce', icon: <CIcon icon={cilStar} customClassName="nav-icon" />, items: [
    { component: CNavItem, name: 'Products', to: '/ecommerce/products' },
  ] },
  { component: CNavItem, name: 'Chat', to: '/apps/chat', icon: <CIcon icon={cilBell} customClassName="nav-icon" /> },
  { component: CNavTitle, name: 'Pages' },
  { component: CNavItem, name: 'Welcome', to: '/pages/welcome', icon: <CIcon icon={cilDrop} customClassName="nav-icon" /> },
  { component: CNavTitle, name: 'Authentication' },
  { component: CNavItem, name: 'Sign In', to: '/auth/sign-in', icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" /> },
  { component: CNavTitle, name: 'Miscellaneous' },
  { component: CNavItem, name: 'Coming Soon', to: '/coming-soon', icon: <CIcon icon={cilStar} customClassName="nav-icon" /> },
  { component: CNavItem, name: '404 Error', to: '/404', icon: <CIcon icon={cilStar} customClassName="nav-icon" /> },
];

const AdminLayout = ({ children }) => (
  <div className="wrapper d-flex flex-column min-vh-100 bg-light">
    <Suspense fallback={<FallbackLoading />}>
      <TopNavigationBar />
    </Suspense>
    <div className="body flex-grow-1 d-flex">
      <Suspense fallback={<FallbackLoading />}>
        <VerticalNavigationBar />
      </Suspense>
      <div className="content flex-grow-1 p-3">
        <Container fluid className="container-xxl">
          <Suspense fallback={<Preloader />}>{children}</Suspense>
        </Container>
        <Footer />
      </div>
    </div>
  </div>
);

const AuthLayout = ({ children }) => (
  <div className="authentication-bg min-vh-100 d-flex align-items-center">
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Suspense fallback={<Preloader />}>{children}</Suspense>
        </Col>
      </Row>
    </Container>
  </div>
);

const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="d-flex justify-content-center align-items-center min-vh-100">
            <CSpinner color="primary" variant="grow" /> 
          </div>
        }
      >
        <Routes>
          {appRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.path.startsWith('/auth/') || ['/coming-soon', '/404'].includes(route.path)
                  ? <AuthLayout>{route.element}</AuthLayout>
                  : <AdminLayout>{route.element}</AdminLayout>
              }
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
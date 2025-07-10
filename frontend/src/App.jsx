import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CSpinner, CNavGroup, CNavItem, CNavTitle } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilHospital,
} from '@coreui/icons';
import { Col, Container, Row } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import FallbackLoading from '@/components/FallbackLoading';
import Preloader from '@/components/Preloader';
import Footer from '@/components/layout/Footer';

// Layout Components
const TopNavigationBar = React.lazy(() => import('@/components/layout/TopNavigationBar'));
const VerticalNavigationBar = React.lazy(() => import('@/components/layout/VerticalNavigationBar'));

// Health-Related Routes
const PrescriptionTable = React.lazy(() => import('./components/PrescriptionTable.jsx'));
const PrescriptionDetailForm = React.lazy(() => import('./components/PrescriptionDetailForm.jsx'));
const Diagnosis = React.lazy(() => import('./components/healthauthorities/Diagnosis.jsx'));
const Prescription = React.lazy(() => import('./components/HealthcareThemes/Prescription.jsx'));
const Payers = React.lazy(() => import('./components/healthauthorities/Payers.jsx'));
const Pharmacies = React.lazy(() => import('./components/healthauthorities/Pharmacies.jsx'));

// Dashboard Routes
const Analytics = React.lazy(() => import('@/app/(admin)/dashboard/analytics/page'));
const Finance = React.lazy(() => import('@/app/(admin)/dashboard/finance/page'));
const Sales = React.lazy(() => import('@/app/(admin)/dashboard/sales/page'));

// Apps Routes
const EcommerceProducts = React.lazy(() => import('@/app/(admin)/ecommerce/products/page'));
const EcommerceProductDetails = React.lazy(() => import('@/app/(admin)/ecommerce/products/[productId]/page'));
const EcommerceProductCreate = React.lazy(() => import('@/app/(admin)/ecommerce/products/create/page'));
const EcommerceCustomers = React.lazy(() => import('@/app/(admin)/ecommerce/customers/page'));
const EcommerceSellers = React.lazy(() => import('@/app/(admin)/ecommerce/sellers/page'));
const EcommerceOrders = React.lazy(() => import('@/app/(admin)/ecommerce/orders/page'));
const EcommerceOrderDetails = React.lazy(() => import('@/app/(admin)/ecommerce/orders/[orderId]/page'));
const EcommerceInventory = React.lazy(() => import('@/app/(admin)/ecommerce/inventory/page'));
const Chat = React.lazy(() => import('@/app/(admin)/apps/chat/page'));
const Email = React.lazy(() => import('@/app/(admin)/apps/email/page'));
const Schedule = React.lazy(() => import('@/app/(admin)/calendar/schedule/page'));
const Integration = React.lazy(() => import('@/app/(admin)/calendar/integration/page'));
const Help = React.lazy(() => import('@/app/(admin)/calendar/help/page'));
const Todo = React.lazy(() => import('@/app/(admin)/apps/todo/page'));
const Social = React.lazy(() => import('@/app/(admin)/apps/social/page'));
const Contacts = React.lazy(() => import('@/app/(admin)/apps/contacts/page'));
const Invoices = React.lazy(() => import('@/app/(admin)/invoices/page'));
const InvoiceDetails = React.lazy(() => import('@/app/(admin)/invoices/[invoiceId]/page'));

// Pages Routes
const Welcome = React.lazy(() => import('@/app/(admin)/pages/welcome/page'));
const FAQs = React.lazy(() => import('@/app/(admin)/pages/faqs/page'));
const Profile = React.lazy(() => import('@/app/(admin)/pages/profile/page'));
const ComingSoon = React.lazy(() => import('@/app/(other)/coming-soon/page'));
const ContactUs = React.lazy(() => import('@/app/(admin)/pages/contact-us/page'));
const AboutUs = React.lazy(() => import('@/app/(admin)/pages/about-us/page'));
const OurTeam = React.lazy(() => import('@/app/(admin)/pages/our-team/page'));
const TimelinePage = React.lazy(() => import('@/app/(admin)/pages/timeline/page'));
const Pricing = React.lazy(() => import('@/app/(admin)/pages/pricing/page'));
const Maintenance = React.lazy(() => import('@/app/(other)/maintenance/page'));
const Widgets = React.lazy(() => import('@/app/(admin)/widgets/page'));

// Base UI Routes
const Accordions = React.lazy(() => import('@/app/(admin)/ui/accordions/page'));
const Alerts = React.lazy(() => import('@/app/(admin)/ui/alerts/page'));
const Avatars = React.lazy(() => import('@/app/(admin)/ui/avatars/page'));
const Badges = React.lazy(() => import('@/app/(admin)/ui/badges/page'));
const Breadcrumb = React.lazy(() => import('@/app/(admin)/ui/breadcrumb/page'));
const Buttons = React.lazy(() => import('@/app/(admin)/ui/buttons/page'));
const Cards = React.lazy(() => import('@/app/(admin)/ui/cards/page'));
const Carousel = React.lazy(() => import('@/app/(admin)/ui/carousel/page'));
const Collapse = React.lazy(() => import('@/app/(admin)/ui/collapse/page'));
const Dropdowns = React.lazy(() => import('@/app/(admin)/ui/dropdowns/page'));
const ListGroup = React.lazy(() => import('@/app/(admin)/ui/list-group/page'));
const Modals = React.lazy(() => import('@/app/(admin)/ui/modals/page'));
const Tabs = React.lazy(() => import('@/app/(admin)/ui/tabs/page'));
const Offcanvas = React.lazy(() => import('@/app/(admin)/ui/offcanvas/page'));
const Pagination = React.lazy(() => import('@/app/(admin)/ui/pagination/page'));
const Placeholders = React.lazy(() => import('@/app/(admin)/ui/placeholders/page'));
const Popovers = React.lazy(() => import('@/app/(admin)/ui/popovers/page'));
const Progress = React.lazy(() => import('@/app/(admin)/ui/progress/page'));
const Spinners = React.lazy(() => import('@/app/(admin)/ui/spinners/page'));
const Toasts = React.lazy(() => import('@/app/(admin)/ui/toasts/page'));
const Tooltips = React.lazy(() => import('@/app/(admin)/ui/tooltips/page'));

// Advanced UI Routes
const Ratings = React.lazy(() => import('@/app/(admin)/advanced/ratings/page'));
const SweetAlerts = React.lazy(() => import('@/app/(admin)/advanced/alert/page'));
const Swiper = React.lazy(() => import('@/app/(admin)/advanced/swiper/page'));
const Scrollbar = React.lazy(() => import('@/app/(admin)/advanced/scrollbar/page'));
const Toastify = React.lazy(() => import('@/app/(admin)/advanced/toastify/page'));

// Charts and Maps Routes
const Area = React.lazy(() => import('@/app/(admin)/charts/area/page'));
const Bar = React.lazy(() => import('@/app/(admin)/charts/bar/page'));
const Bubble = React.lazy(() => import('@/app/(admin)/charts/bubble/page'));
const Candlestick = React.lazy(() => import('@/app/(admin)/charts/candlestick/page'));
const Column = React.lazy(() => import('@/app/(admin)/charts/column/page'));
const Heatmap = React.lazy(() => import('@/app/(admin)/charts/heatmap/page'));
const Line = React.lazy(() => import('@/app/(admin)/charts/line/page'));
const Mixed = React.lazy(() => import('@/app/(admin)/charts/mixed/page'));
const Timeline = React.lazy(() => import('@/app/(admin)/charts/timeline/page'));
const Boxplot = React.lazy(() => import('@/app/(admin)/charts/boxplot/page'));
const Treemap = React.lazy(() => import('@/app/(admin)/charts/treemap/page'));
const Pie = React.lazy(() => import('@/app/(admin)/charts/pie/page'));
const Radar = React.lazy(() => import('@/app/(admin)/charts/radar/page'));
const RadialBar = React.lazy(() => import('@/app/(admin)/charts/radial-bar/page'));
const Scatter = React.lazy(() => import('@/app/(admin)/charts/scatter/page'));
const Polar = React.lazy(() => import('@/app/(admin)/charts/polar/page'));
const GoogleMaps = React.lazy(() => import('@/app/(admin)/maps/google/page'));
const VectorMaps = React.lazy(() => import('@/app/(admin)/maps/vector/page'));

// Forms Routes
const Basic = React.lazy(() => import('@/app/(admin)/forms/basic/page'));
const Checkbox = React.lazy(() => import('@/app/(admin)/forms/checkbox/page'));
const Select = React.lazy(() => import('@/app/(admin)/forms/select/page'));
const Clipboard = React.lazy(() => import('@/app/(admin)/forms/clipboard/page'));
const FlatPicker = React.lazy(() => import('@/app/(admin)/forms/flat-picker/page'));
const Validation = React.lazy(() => import('@/app/(admin)/forms/validation/page'));
const Wizard = React.lazy(() => import('@/app/(admin)/forms/wizard/page'));
const FileUploads = React.lazy(() => import('@/app/(admin)/forms/file-uploads/page'));
const Editors = React.lazy(() => import('@/app/(admin)/forms/editors/page'));
const InputMask = React.lazy(() => import('@/app/(admin)/forms/input-mask/page'));
const Slider = React.lazy(() => import('@/app/(admin)/forms/slider/page'));

// Table Routes
const BasicTable = React.lazy(() => import('@/app/(admin)/tables/basic/page'));
const GridjsTable = React.lazy(() => import('@/app/(admin)/tables/gridjs/page'));

// Icon Routes
const BoxIcons = React.lazy(() => import('@/app/(admin)/icons/boxicons/page'));
const IconaMoonIcons = React.lazy(() => import('@/app/(admin)/icons/iconamoon/page'));

// Error Pages
const Page404 = React.lazy(() => import('./components/pages/page404/Page404.js'));
const Page500 = React.lazy(() => import('./components/pages/page500/Page500.js'));
const NotFound = React.lazy(() => import('@/app/(other)/(error-pages)/error-404/page'));
const NotFound2 = React.lazy(() => import('@/app/(other)/(error-pages)/error-404-2/page'));
const NotFoundAdmin = React.lazy(() => import('@/app/(admin)/not-found'));

// Auth Routes
const AuthSignIn = React.lazy(() => import('@/app/(other)/auth/sign-in/page'));
const AuthSignIn2 = React.lazy(() => import('@/app/(other)/auth/sign-in-2/page'));
const AuthSignUp = React.lazy(() => import('@/app/(other)/auth/sign-up/page'));
const AuthSignUp2 = React.lazy(() => import('@/app/(other)/auth/sign-up-2/page'));
const ResetPassword = React.lazy(() => import('@/app/(other)/auth/reset-pass/page'));
const ResetPassword2 = React.lazy(() => import('@/app/(other)/auth/reset-pass-2/page'));
const LockScreen = React.lazy(() => import('@/app/(other)/auth/lock-screen/page'));
const LockScreen2 = React.lazy(() => import('@/app/(other)/auth/lock-screen-2/page'));

// Health Routes (retained from previous App.jsx)
const healthRoutes = [
  {
    path: '/prescription/authorities',
    name: 'Prescription',
    element: <PrescriptionTable />,
  },
  {
    path: '/prescription/PrescriptionDetailForm',
    name: 'Prescription Detail Form',
    element: <PrescriptionDetailForm />,
  },
  {
    path: '/dashboard/diagnosis',
    name: 'Diagnosis',
    element: <Diagnosis />,
  },
  {
    path: '/dashboard/prescription',
    name: 'Prescription',
    element: <Prescription />,
  },
  {
    path: '/healthauthorities/payers',
    name: 'Payers',
    element: <Payers />,
  },
  {
    path: '/pharmacy/pharmacies',
    name: 'Pharmacies',
    element: <Pharmacies />,
  },
  {
    path: '/health/authorities',
    name: 'Health Authorities',
    element: <div>Health Authorities Placeholder</div>,
  },
  {
    path: '/drugs/authorities',
    name: 'Drugs List',
    element: <div>Drugs List Placeholder</div>,
  },
  {
    path: '/diagnosis/authorities',
    name: 'Diagnosis List',
    element: <div>Diagnosis List Placeholder</div>,
  },
  {
    path: '/clinicianlist/authorities',
    name: 'Clinician List',
    element: <div>Clinician List Placeholder</div>,
  },
];

// Route Definitions (from your provided code)
const initialRoutes = [
  {
    path: '/',
    name: 'root',
    element: <Navigate to="/dashboard/analytics" />,
  },
  {
    path: '*',
    name: 'not-found',
    element: <NotFound />,
  },
];

const generalRoutes = [
  {
    path: '/dashboard/analytics',
    name: 'Analytics',
    element: <Analytics />,
  },
  {
    path: '/dashboard/finance',
    name: 'Finance',
    element: <Finance />,
  },
  {
    path: '/dashboard/sales',
    name: 'Sales',
    element: <Sales />,
  },
];

const appsRoutes = [
  {
    name: 'Products',
    path: '/ecommerce/products',
    element: <EcommerceProducts />,
  },
  {
    name: 'Product Details',
    path: '/ecommerce/products/:productId',
    element: <EcommerceProductDetails />,
  },
  {
    name: 'Create Product',
    path: '/ecommerce/products/create',
    element: <EcommerceProductCreate />,
  },
  {
    name: 'Customers',
    path: '/ecommerce/customers',
    element: <EcommerceCustomers />,
  },
  {
    name: 'Sellers',
    path: '/ecommerce/sellers',
    element: <EcommerceSellers />,
  },
  {
    name: 'Orders',
    path: '/ecommerce/orders',
    element: <EcommerceOrders />,
  },
  {
    name: 'Order Details',
    path: '/ecommerce/orders/:orderId',
    element: <EcommerceOrderDetails />,
  },
  {
    name: 'Inventory',
    path: '/ecommerce/inventory',
    element: <EcommerceInventory />,
  },
  {
    name: 'Chat',
    path: '/apps/chat',
    element: <Chat />,
  },
  {
    name: 'Email',
    path: '/apps/email',
    element: <Email />,
  },
  {
    name: 'Schedule',
    path: '/calendar/schedule',
    element: <Schedule />,
  },
  {
    name: 'Integration',
    path: '/calendar/integration',
    element: <Integration />,
  },
  {
    name: 'Help',
    path: '/calendar/help',
    element: <Help />,
  },
  {
    name: 'Todo',
    path: '/apps/todo',
    element: <Todo />,
  },
  {
    name: 'Social',
    path: '/apps/social',
    element: <Social />,
  },
  {
    name: 'Contacts',
    path: '/apps/contacts',
    element: <Contacts />,
  },
  {
    name: 'Invoices List',
    path: '/invoices',
    element: <Invoices />,
  },
  {
    name: 'Invoices Details',
    path: '/invoices/:invoiceId',
    element: <InvoiceDetails />,
  },
];

const customRoutes = [
  {
    name: 'Welcome',
    path: '/pages/welcome',
    element: <Welcome />,
  },
  {
    name: 'FAQs',
    path: '/pages/faqs',
    element: <FAQs />,
  },
  {
    name: 'Profile',
    path: '/pages/profile',
    element: <Profile />,
  },
  {
    name: 'Contact Us',
    path: '/pages/contact-us',
    element: <ContactUs />,
  },
  {
    name: 'About Us',
    path: '/pages/about-us',
    element: <AboutUs />,
  },
  {
    name: 'Our Team',
    path: '/pages/our-team',
    element: <OurTeam />,
  },
  {
    name: 'Timeline',
    path: '/pages/timeline',
    element: <TimelinePage />,
  },
  {
    name: 'Pricing',
    path: '/pages/pricing',
    element: <Pricing />,
  },
  {
    name: 'Error 404 Alt',
    path: '/pages/error-404-alt',
    element: <NotFoundAdmin />,
  },
  {
    name: 'Widgets',
    path: '/widgets',
    element: <Widgets />,
  },
];

const baseUIRoutes = [
  {
    name: 'Accordions',
    path: '/ui/accordions',
    element: <Accordions />,
  },
  {
    name: 'Alerts',
    path: '/ui/alerts',
    element: <Alerts />,
  },
  {
    name: 'Avatars',
    path: '/ui/avatars',
    element: <Avatars />,
  },
  {
    name: 'Badges',
    path: '/ui/badges',
    element: <Badges />,
  },
  {
    name: 'Breadcrumb',
    path: '/ui/breadcrumb',
    element: <Breadcrumb />,
  },
  {
    name: 'Buttons',
    path: '/ui/buttons',
    element: <Buttons />,
  },
  {
    name: 'Cards',
    path: '/ui/cards',
    element: <Cards />,
  },
  {
    name: 'Carousel',
    path: '/ui/carousel',
    element: <Carousel />,
  },
  {
    name: 'Collapse',
    path: '/ui/collapse',
    element: <Collapse />,
  },
  {
    name: 'Dropdowns',
    path: '/ui/dropdowns',
    element: <Dropdowns />,
  },
  {
    name: 'List Group',
    path: '/ui/list-group',
    element: <ListGroup />,
  },
  {
    name: 'Modals',
    path: '/ui/modals',
    element: <Modals />,
  },
  {
    name: 'Tabs',
    path: '/ui/tabs',
    element: <Tabs />,
  },
  {
    name: 'Offcanvas',
    path: '/ui/offcanvas',
    element: <Offcanvas />,
  },
  {
    name: 'Pagination',
    path: '/ui/pagination',
    element: <Pagination />,
  },
  {
    name: 'Placeholders',
    path: '/ui/placeholders',
    element: <Placeholders />,
  },
  {
    name: 'Popovers',
    path: '/ui/popovers',
    element: <Popovers />,
  },
  {
    name: 'Progress',
    path: '/ui/progress',
    element: <Progress />,
  },
  {
    name: 'Spinners',
    path: '/ui/spinners',
    element: <Spinners />,
  },
  {
    name: 'Toasts',
    path: '/ui/toasts',
    element: <Toasts />,
  },
  {
    name: 'Tooltips',
    path: '/ui/tooltips',
    element: <Tooltips />,
  },
];

const advancedUIRoutes = [
  {
    name: 'Ratings',
    path: '/advanced/ratings',
    element: <Ratings />,
  },
  {
    name: 'Sweet Alert',
    path: '/advanced/alert',
    element: <SweetAlerts />,
  },
  {
    name: 'Swiper Slider',
    path: '/advanced/swiper',
    element: <Swiper />,
  },
  {
    name: 'Scrollbar',
    path: '/advanced/scrollbar',
    element: <Scrollbar />,
  },
  {
    name: 'Toastify',
    path: '/advanced/toastify',
    element: <Toastify />,
  },
];

const chartsNMapsRoutes = [
  {
    name: 'Area',
    path: '/charts/area',
    element: <Area />,
  },
  {
    name: 'Bar',
    path: '/charts/bar',
    element: <Bar />,
  },
  {
    name: 'Bubble',
    path: '/charts/bubble',
    element: <Bubble />,
  },
  {
    name: 'Candle Stick',
    path: '/charts/candlestick',
    element: <Candlestick />,
  },
  {
    name: 'Column',
    path: '/charts/column',
    element: <Column />,
  },
  {
    name: 'Heatmap',
    path: '/charts/heatmap',
    element: <Heatmap />,
  },
  {
    name: 'Line',
    path: '/charts/line',
    element: <Line />,
  },
  {
    name: 'Mixed',
    path: '/charts/mixed',
    element: <Mixed />,
  },
  {
    name: 'Timeline',
    path: '/charts/timeline',
    element: <Timeline />,
  },
  {
    name: 'Boxplot',
    path: '/charts/boxplot',
    element: <Boxplot />,
  },
  {
    name: 'Treemap',
    path: '/charts/treemap',
    element: <Treemap />,
  },
  {
    name: 'Pie',
    path: '/charts/pie',
    element: <Pie />,
  },
  {
    name: 'Radar',
    path: '/charts/radar',
    element: <Radar />,
  },
  {
    name: 'Radial Bar',
    path: '/charts/radial-bar',
    element: <RadialBar />,
  },
  {
    name: 'Scatter',
    path: '/charts/scatter',
    element: <Scatter />,
  },
  {
    name: 'Polar Area',
    path: '/charts/polar',
    element: <Polar />,
  },
  {
    name: 'Google',
    path: '/maps/google',
    element: <GoogleMaps />,
  },
  {
    name: 'Vector',
    path: '/maps/vector',
    element: <VectorMaps />,
  },
];

const formsRoutes = [
  {
    name: 'Basic Elements',
    path: '/forms/basic',
    element: <Basic />,
  },
  {
    name: 'Checkbox & Radio',
    path: '/forms/checkbox',
    element: <Checkbox />,
  },
  {
    name: 'Choice Select',
    path: '/forms/select',
    element: <Select />,
  },
  {
    name: 'Clipboard',
    path: '/forms/clipboard',
    element: <Clipboard />,
  },
  {
    name: 'Flat Picker',
    path: '/forms/flat-picker',
    element: <FlatPicker />,
  },
  {
    name: 'Validation',
    path: '/forms/validation',
    element: <Validation />,
  },
  {
    name: 'Wizard',
    path: '/forms/wizard',
    element: <Wizard />,
  },
  {
    name: 'File Uploads',
    path: '/forms/file-uploads',
    element: <FileUploads />,
  },
  {
    name: 'Editors',
    path: '/forms/editors',
    element: <Editors />,
  },
  {
    name: 'Input Mask',
    path: '/forms/input-mask',
    element: <InputMask />,
  },
  {
    name: 'Slider',
    path: '/forms/slider',
    element: <Slider />,
  },
];

const tableRoutes = [
  {
    name: 'Basic Tables',
    path: '/tables/basic',
    element: <BasicTable />,
  },
  {
    name: 'Grid JS',
    path: '/tables/gridjs',
    element: <GridjsTable />,
  },
];

const iconRoutes = [
  {
    name: 'Boxicons',
    path: '/icons/boxicons',
    element: <BoxIcons />,
  },
  {
    name: 'IconaMoon',
    path: '/icons/iconamoon',
    element: <IconaMoonIcons />,
  },
];

const authRoutes = [
  {
    path: '/auth/sign-in',
    name: 'Sign In',
    element: <AuthSignIn />,
  },
  {
    name: 'Sign In 2',
    path: '/auth/sign-in-2',
    element: <AuthSignIn2 />,
  },
  {
    name: 'Sign Up',
    path: '/auth/sign-up',
    element: <AuthSignUp />,
  },
  {
    name: 'Sign Up 2',
    path: '/auth/sign-up-2',
    element: <AuthSignUp2 />,
  },
  {
    name: 'Reset Password',
    path: '/auth/reset-pass',
    element: <ResetPassword />,
  },
  {
    name: 'Reset Password 2',
    path: '/auth/reset-pass-2',
    element: <ResetPassword2 />,
  },
  {
    name: 'Lock Screen',
    path: '/auth/lock-screen',
    element: <LockScreen />,
  },
  {
    name: 'Lock Screen 2',
    path: '/auth/lock-screen-2',
    element: <LockScreen2 />,
  },
  {
    name: '404 Error',
    path: '/error-404',
    element: <NotFound />,
  },
  {
    name: 'Maintenance',
    path: '/maintenance',
    element: <Maintenance />,
  },
  {
    name: '404 Error 2',
    path: '/error-404-2',
    element: <NotFound2 />,
  },
  {
    name: 'Coming Soon',
    path: '/coming-soon',
    element: <ComingSoon />,
  },
];

const errorRoutes = [
  {
    path: '/404',
    name: '404 Error',
    element: <Page404 />,
  },
  {
    path: '/500',
    name: '500 Error',
    element: <Page500 />,
  },
];

const appRoutes = [
  ...initialRoutes,
  ...healthRoutes,
  ...generalRoutes,
  ...appsRoutes,
  ...customRoutes,
  ...baseUIRoutes,
  ...advancedUIRoutes,
  ...chartsNMapsRoutes,
  ...formsRoutes,
  ...tableRoutes,
  ...iconRoutes,
  ...authRoutes,
  ...errorRoutes,
];

// Navigation Configuration
export const navConfig = [
  {
    component: CNavTitle,
    name: 'Health Authorities',
  },
  {
    component: CNavItem,
    name: 'Prescription',
    to: '/prescription/authorities',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Prescription Detail Form',
    to: '/prescription/PrescriptionDetailForm',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Health Authorities',
    to: '/health/authorities',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Drugs List',
    to: '/drugs/authorities',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Diagnosis List',
    to: '/diagnosis/authorities',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Clinician List',
    to: '/clinicianlist/authorities',
    icon: <CIcon icon={cilHospital} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Pharmacies',
    to: '/pharmacy/pharmacies',
    icon: <CIcon icon={cilHospital} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Payers',
    to: '/healthauthorities/payers',
    icon: <CIcon icon={cilHospital} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Dashboard',
  },
  {
    component: CNavGroup,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Analytics',
        to: '/dashboard/analytics',
      },
      {
        component: CNavItem,
        name: 'Finance',
        to: '/dashboard/finance',
      },
      {
        component: CNavItem,
        name: 'Sales',
        to: '/dashboard/sales',
      },
      {
        component: CNavItem,
        name: 'Diagnosis',
        to: '/dashboard/diagnosis',
      },
      {
        component: CNavItem,
        name: 'Prescription',
        to: '/dashboard/prescription',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Apps',
  },
  {
    component: CNavGroup,
    name: 'Ecommerce',
    to: '/ecommerce',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Products',
        to: '/ecommerce/products',
      },
      {
        component: CNavItem,
        name: 'Create Product',
        to: '/ecommerce/products/create',
      },
      {
        component: CNavItem,
        name: 'Customers',
        to: '/ecommerce/customers',
      },
      {
        component: CNavItem,
        name: 'Sellers',
        to: '/ecommerce/sellers',
      },
      {
        component: CNavItem,
        name: 'Orders',
        to: '/ecommerce/orders',
      },
      {
        component: CNavItem,
        name: 'Inventory',
        to: '/ecommerce/inventory',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Apps',
    to: '/apps',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Chat',
        to: '/apps/chat',
      },
      {
        component: CNavItem,
        name: 'Email',
        to: '/apps/email',
      },
      {
        component: CNavItem,
        name: 'Todo',
        to: '/apps/todo',
      },
      {
        component: CNavItem,
        name: 'Social',
        to: '/apps/social',
      },
      {
        component: CNavItem,
        name: 'Contacts',
        to: '/apps/contacts',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Calendar',
    to: '/calendar',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Schedule',
        to: '/calendar/schedule',
      },
      {
        component: CNavItem,
        name: 'Integration',
        to: '/calendar/integration',
      },
      {
        component: CNavItem,
        name: 'Help',
        to: '/calendar/help',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Invoices',
    to: '/invoices',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Invoices List',
        to: '/invoices',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Pages',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    to: '/pages',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Welcome',
        to: '/pages/welcome',
      },
      {
        component: CNavItem,
        name: 'FAQs',
        to: '/pages/faqs',
      },
      {
        component: CNavItem,
        name: 'Profile',
        to: '/pages/profile',
      },
      {
        component: CNavItem,
        name: 'Contact Us',
        to: '/pages/contact-us',
      },
      {
        component: CNavItem,
        name: 'About Us',
        to: '/pages/about-us',
      },
      {
        component: CNavItem,
        name: 'Our Team',
        to: '/pages/our-team',
      },
      {
        component: CNavItem,
        name: 'Timeline',
        to: '/pages/timeline',
      },
      {
        component: CNavItem,
        name: 'Pricing',
        to: '/pages/pricing',
      },
      {
        component: CNavItem,
        name: 'Error 404 Alt',
        to: '/pages/error-404-alt',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'UI Elements',
  },
  {
    component: CNavGroup,
    name: 'Base UI',
    to: '/ui',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordions',
        to: '/ui/accordions',
      },
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/ui/alerts',
      },
      {
        component: CNavItem,
        name: 'Avatars',
        to: '/ui/avatars',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/ui/badges',
      },
      {
        component: CNavItem,
        name: 'Breadcrumb',
        to: '/ui/breadcrumb',
      },
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/ui/buttons',
      },
      {
        component: CNavItem,
        name: 'Cards',
        to: '/ui/cards',
      },
      {
        component: CNavItem,
        name: 'Carousel',
        to: '/ui/carousel',
      },
      {
        component: CNavItem,
        name: 'Collapse',
        to: '/ui/collapse',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/ui/dropdowns',
      },
      {
        component: CNavItem,
        name: 'List Group',
        to: '/ui/list-group',
      },
      {
        component: CNavItem,
        name: 'Modals',
        to: '/ui/modals',
      },
      {
        component: CNavItem,
        name: 'Tabs',
        to: '/ui/tabs',
      },
      {
        component: CNavItem,
        name: 'Offcanvas',
        to: '/ui/offcanvas',
      },
      {
        component: CNavItem,
        name: 'Pagination',
        to: '/ui/pagination',
      },
      {
        component: CNavItem,
        name: 'Placeholders',
        to: '/ui/placeholders',
      },
      {
        component: CNavItem,
        name: 'Popovers',
        to: '/ui/popovers',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/ui/progress',
      },
      {
        component: CNavItem,
        name: 'Spinners',
        to: '/ui/spinners',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/ui/toasts',
      },
      {
        component: CNavItem,
        name: 'Tooltips',
        to: '/ui/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Advanced UI',
    to: '/advanced',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Ratings',
        to: '/advanced/ratings',
      },
      {
        component: CNavItem,
        name: 'Sweet Alert',
        to: '/advanced/alert',
      },
      {
        component: CNavItem,
        name: 'Swiper Slider',
        to: '/advanced/swiper',
      },
      {
        component: CNavItem,
        name: 'Scrollbar',
        to: '/advanced/scrollbar',
      },
      {
        component: CNavItem,
        name: 'Toastify',
        to: '/advanced/toastify',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Charts & Maps',
  },
  {
    component: CNavGroup,
    name: 'Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Area',
        to: '/charts/area',
      },
      {
        component: CNavItem,
        name: 'Bar',
        to: '/charts/bar',
      },
      {
        component: CNavItem,
        name: 'Bubble',
        to: '/charts/bubble',
      },
      {
        component: CNavItem,
        name: 'Candle Stick',
        to: '/charts/candlestick',
      },
      {
        component: CNavItem,
        name: 'Column',
        to: '/charts/column',
      },
      {
        component: CNavItem,
        name: 'Heatmap',
        to: '/charts/heatmap',
      },
      {
        component: CNavItem,
        name: 'Line',
        to: '/charts/line',
      },
      {
        component: CNavItem,
        name: 'Mixed',
        to: '/charts/mixed',
      },
      {
        component: CNavItem,
        name: 'Timeline',
        to: '/charts/timeline',
      },
      {
        component: CNavItem,
        name: 'Boxplot',
        to: '/charts/boxplot',
      },
      {
        component: CNavItem,
        name: 'Treemap',
        to: '/charts/treemap',
      },
      {
        component: CNavItem,
        name: 'Pie',
        to: '/charts/pie',
      },
      {
        component: CNavItem,
        name: 'Radar',
        to: '/charts/radar',
      },
      {
        component: CNavItem,
        name: 'Radial Bar',
        to: '/charts/radial-bar',
      },
      {
        component: CNavItem,
        name: 'Scatter',
        to: '/charts/scatter',
      },
      {
        component: CNavItem,
        name: 'Polar Area',
        to: '/charts/polar',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Maps',
    to: '/maps',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Google',
        to: '/maps/google',
      },
      {
        component: CNavItem,
        name: 'Vector',
        to: '/maps/vector',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Forms',
  },
  {
    component: CNavGroup,
    name: 'Forms',
    to: '/forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Basic Elements',
        to: '/forms/basic',
      },
      {
        component: CNavItem,
        name: 'Checkbox & Radio',
        to: '/forms/checkbox',
      },
      {
        component: CNavItem,
        name: 'Choice Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Clipboard',
        to: '/forms/clipboard',
      },
      {
        component: CNavItem,
        name: 'Flat Picker',
        to: '/forms/flat-picker',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
      {
        component: CNavItem,
        name: 'Wizard',
        to: '/forms/wizard',
      },
      {
        component: CNavItem,
        name: 'File Uploads',
        to: '/forms/file-uploads',
      },
      {
        component: CNavItem,
        name: 'Editors',
        to: '/forms/editors',
      },
      {
        component: CNavItem,
        name: 'Input Mask',
        to: '/forms/input-mask',
      },
      {
        component: CNavItem,
        name: 'Slider',
        to: '/forms/slider',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Tables',
  },
  {
    component: CNavGroup,
    name: 'Tables',
    to: '/tables',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Basic Tables',
        to: '/tables/basic',
      },
      {
        component: CNavItem,
        name: 'Grid JS',
        to: '/tables/gridjs',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Icons',
  },
  {
    component: CNavGroup,
    name: 'Icons',
    to: '/icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Boxicons',
        to: '/icons/boxicons',
      },
      {
        component: CNavItem,
        name: 'IconaMoon',
        to: '/icons/iconamoon',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Authentication',
  },
  {
    component: CNavGroup,
    name: 'Auth',
    to: '/auth',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Sign In',
        to: '/auth/sign-in',
      },
      {
        component: CNavItem,
        name: 'Sign Up',
        to: '/auth/sign-up',
      },
      {
        component: CNavItem,
        name: 'Reset Password',
        to: '/auth/reset-pass',
      },
      {
        component: CNavItem,
        name: 'Lock Screen',
        to: '/auth/lock-screen',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Miscellaneous',
  },
  {
    component: CNavItem,
    name: 'Coming Soon',
    to: '/coming-soon',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Maintenance',
    to: '/maintenance',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: '404 Error',
    to: '/error-404',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: '404 Error 2',
    to: '/error-404-2',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
];

// Layout Components
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
        <div className="content flex-grow-1 p-3">
          <Container fluid className="container-xxl">
            <Suspense fallback={<Preloader />}>{children}</Suspense>
          </Container>
          <Footer />
        </div>
      </div>
    </div>
  );
};

const AuthLayout = ({ children }) => {
  return (
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
};

const App = () => {
  return (
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
                  route.path.startsWith('/auth/') ||
                  route.path === '/error-404' ||
                  route.path === '/error-404-2' ||
                  route.path === '/coming-soon' ||
                  route.path === '/maintenance' ||
                  route.path === '/404' ||
                  route.path === '/500' ? (
                    <AuthLayout>{route.element}</AuthLayout>
                  ) : (
                    <AdminLayout>{route.element}</AdminLayout>
                  )
                }
              />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'

import PrescriptionTable from './components/PrescriptionTable';
import Diagnosis from 'src/views/theme/HealthcareThemes/Diagnosis'
import PrescriptionDetailForm from './components/PrescriptionDetailForm';
import Prescription from 'src/views/theme/HealthcareThemes/Prescription';
import Payers from 'src/views/healthauthorities/Payers';
const PayerHACredential = React.lazy(() => import('./views/healthauthorities/PayerHACredential'));

import Pharmacies from 'src/views/healthauthorities/Pharmacies';
import './scss/examples.scss'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))

const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          <Route path="/dashboard/prescription" element={<PrescriptionTable />} />
          <Route path="/prescription-detail-form" element={<PrescriptionDetailForm />} />
          <Route path="/prescription-detail/:eRxNo" element={<PrescriptionTable />} />
          <Route path="/dashboard/diagnosis" element={<Diagnosis />} />
          <Route path="/health/payers" element={<Payers />} />
          <Route path="/health/pharmacies" element={<Pharmacies />} />
          <Route path="/dashboard/prescription" element={<Prescription />} />
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
import React from 'react'

// Health Authorities
const ClinicianList = React.lazy(() => import('./components/healthauthorities/ClinicianList.jsx'))
const CliniciansTable = React.lazy(() => import('./components/healthauthorities/CliniciansTable.jsx'))
const ConfigurationPage = React.lazy(() => import('./components/healthauthorities/ConfigurationPage.jsx'))
const DiagnosesTable = React.lazy(() => import('./components/healthauthorities/DiagnosesTable.jsx'))
const Diagnosis = React.lazy(() => import('./components/healthauthorities/Diagnosis.jsx'))
const DrugDetails = React.lazy(() => import('./components/healthauthorities/DrugDetails.jsx'))
const Drugs = React.lazy(() => import('./components/healthauthorities/Drugs.jsx'))
const DrugsTable = React.lazy(() => import('./components/healthauthorities/DrugsTable.jsx'))
const HealthAuthority = React.lazy(() => import('./components/healthauthorities/HealthAuthority.jsx'))
const PayerHACredential = React.lazy(() => import('./components/healthauthorities/PayerHACredential.jsx'))
const Payers = React.lazy(() => import('./components/healthauthorities/Payers.jsx'))
const Pharmacies = React.lazy(() => import('./components/healthauthorities/Pharmacies.jsx'))

// Healthcare Themes
const HealthcareDiagnosis = React.lazy(() => import('./components/HealthcareThemes/Diagnosis.jsx'))
const Prescription = React.lazy(() => import('./components/HealthcareThemes/Prescription.jsx'))

// Prescription Details
const PrescriptionTable = React.lazy(() => import('./components/PrescriptionTable.jsx'))
const PrescriptionDetailForm = React.lazy(() => import('./components/PrescriptionDetailForm.jsx'))

// Dashboard or Misc (optional)
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard.jsx'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // Health Authorities
  { path: '/health/authorities', name: 'Health Authority', element: HealthAuthority },
  { path: '/health/configurations', name: 'Configuration Page', element: ConfigurationPage },
  { path: '/health/clinicians', name: 'Clinicians Table', element: CliniciansTable },
  { path: '/health/clinicianlist', name: 'Clinician List', element: ClinicianList },
  { path: '/health/diagnoses', name: 'Diagnoses Table', element: DiagnosesTable },
  { path: '/health/diagnosis', name: 'Diagnosis', element: Diagnosis },
  { path: '/health/drugs', name: 'Drugs', element: Drugs },
  { path: '/health/drugs-table', name: 'Drugs Table', element: DrugsTable },
  { path: '/health/drugs/:id', name: 'Drug Details', element: DrugDetails },
  { path: '/health/pharmacies', name: 'Pharmacies', element: Pharmacies },
  { path: '/health/payers', name: 'Payers', element: Payers },
  { path: '/payers/:id/ha-credential', name: 'Payer HA Credential', element: PayerHACredential },

  // Healthcare Themes
  { path: '/theme/diagnosis', name: 'Healthcare Diagnosis', element: HealthcareDiagnosis },
  { path: '/theme/prescription', name: 'Prescription', element: Prescription },

  // Prescriptions
  { path: '/prescriptions/table', name: 'Prescription Table', element: PrescriptionTable },
  { path: '/prescriptions/detail-form', name: 'Prescription Detail Form', element: PrescriptionDetailForm },
]

export default routes

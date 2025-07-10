// app/(auth)/reset-password/page.jsx
import React from 'react';
import { CContainer, CRow, CCol, CCard, CCardBody } from '@coreui/react';

const ResetPassword = () => {
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <h1>Reset Password</h1>
                <p className="text-body-secondary">Enter your email to reset your password</p>
                {/* Add form logic here */}
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default ResetPassword;
// app/(auth)/login/page.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInputGroup,
  CInputGroupText,
  CFormInput,
  CRow,
  CFormCheck,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilEnvelopeClosed } from '@coreui/icons';
import axios from 'axios';

export const loginSchema = yup.object({
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  password: yup.string().required('Please enter your password'),
});

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:8081/login', {
        email: data.email,
        password: data.password,
      });
      localStorage.setItem('token', response.data.token);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit(onSubmit)}>
                  <h1>Sign In</h1>
                  <p className="text-body-secondary">Sign in to your account</p>
                  {error && <p className="text-danger">{error}</p>}
                  {loading && <p className="text-info">Signing in...</p>}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilEnvelopeClosed} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      autoComplete="email"
                      {...control.register('email')}
                      disabled={loading}
                    />
                  </CInputGroup>
                  {errors.email && <p className="text-danger">{errors.email.message}</p>}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                      {...control.register('password')}
                      disabled={loading}
                    />
                  </CInputGroup>
                  {errors.password && <p className="text-danger">{errors.password.message}</p>}
                  <CFormCheck
                    id="checkbox-signin"
                    label="Remember me"
                    className="mb-3"
                    disabled={loading}
                  />
                  <div className="d-grid">
                    <CButton color="primary" type="submit" disabled={loading}>
                      {loading ? 'Signing In...' : 'Sign In'}
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default LoginForm;
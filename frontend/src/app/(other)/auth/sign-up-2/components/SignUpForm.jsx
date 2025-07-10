
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
  CFormSelect,
  CRow,
  CFormCheck,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser, cilEnvelopeClosed } from '@coreui/icons';
import axios from 'axios';

const signUpSchema = yup.object({
  healthAuthority: yup.string().required('Please select a health authority'),
  firstname: yup.string().required('Please enter your first name'),
  lastname: yup.string().required('Please enter your last name'),
  email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  password: yup.string().required('Please enter your password'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please repeat your password'),
});

const healthAuthorities = [
  { value: '', label: 'Select Health Authority', disabled: true },
  { value: 'NHS', label: 'National Health Service (NHS)' },
  { value: 'HHS', label: 'U.S. Department of Health and Human Services (HHS)' },
  { value: 'PHAC', label: 'Public Health Agency of Canada (PHAC)' },
  { value: 'WHO', label: 'World Health Organization (WHO)' },
];

const SignUpForm = () => {
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
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:8081/signup', {
        healthAuthority: data.healthAuthority,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
      });
      localStorage.setItem('token', response.data.token);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
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
                  <h1>Register</h1>
                  <p className="text-body-secondary">Create your account</p>
                  {error && <p className="text-danger">{error}</p>}
                  {loading && <p className="text-info">Signing up...</p>}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormSelect
                      {...control.register('healthAuthority')}
                      disabled={loading}
                    >
                      {healthAuthorities.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          disabled={option.disabled}
                        >
                          {option.label}
                        </option>
                      ))}
                    </CFormSelect>
                  </CInputGroup>
                  {errors.healthAuthority && (
                    <p className="text-danger">{errors.healthAuthority.message}</p>
                  )}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="First Name"
                      autoComplete="given-name"
                      {...control.register('firstname')}
                      disabled={loading}
                    />
                  </CInputGroup>
                  {errors.firstname && <p className="text-danger">{errors.firstname.message}</p>}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Last Name"
                      autoComplete="family-name"
                      {...control.register('lastname')}
                      disabled={loading}
                    />
                  </CInputGroup>
                  {errors.lastname && <p className="text-danger">{errors.lastname.message}</p>}
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
                      autoComplete="new-password"
                      {...control.register('password')}
                      disabled={loading}
                    />
                  </CInputGroup>
                  {errors.password && <p className="text-danger">{errors.password.message}</p>}
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      {...control.register('repeatPassword')}
                      disabled={loading}
                    />
                  </CInputGroup>
                  {errors.repeatPassword && (
                    <p className="text-danger">{errors.repeatPassword.message}</p>
                  )}
                  <CFormCheck
                    id="termAndCondition2"
                    label="I accept Terms and Conditions"
                    className="mb-3"
                    disabled={loading}
                    required
                  />
                  <div className="d-grid">
                    <CButton color="success" type="submit" disabled={loading}>
                      {loading ? 'Creating...' : 'Create Account'}
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

export default SignUpForm;
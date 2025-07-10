
import React from 'react';
import { NavLink } from 'react-router-dom';
import { CNav, CNavItem } from '@coreui/react';

const TopNavigationBar = () => (
  <CNav variant="pills" layout="fill">
    <CNavItem>
      <NavLink to="/dashboard/analytics" className="nav-link">
        Dashboard
      </NavLink>
    </CNavItem>
    <CNavItem>
      <NavLink to="/prescription/authorities" className="nav-link">
        Prescription
      </NavLink>
    </CNavItem>
    <CNavItem>
      <NavLink to="/sign-in" className="nav-link">
        Sign In
      </NavLink>
    </CNavItem>
  </CNav>
);

export default TopNavigationBar;
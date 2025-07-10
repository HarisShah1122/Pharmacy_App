
import React from 'react';
import { NavLink } from 'react-router-dom';
import { CSidebar, CSidebarNav, CNavTitle, CNavGroup, CNavItem } from '@coreui/react';
import { navConfig } from '../../App.jsx';

const VerticalNavigationBar = () => {
  return (
    <CSidebar>
      <CSidebarNav>
        {navConfig.map((item, index) => {
          if (item.component === CNavTitle) {
            return <CNavTitle key={index}>{item.name}</CNavTitle>;
          } else if (item.component === CNavGroup) {
            return (
              <CNavGroup key={index} name={item.name} icon={item.icon} to={item.to}>
                {item.items.map((subItem, subIndex) => (
                  <CNavItem key={subIndex}>
                    <NavLink to={subItem.to} className="nav-link">
                      {subItem.name}
                    </NavLink>
                  </CNavItem>
                ))}
              </CNavGroup>
            );
          } else {
            return (
              <CNavItem key={index}>
                <NavLink to={item.to} className="nav-link">
                  {item.icon}
                  {item.name}
                </NavLink>
              </CNavItem>
            );
          }
        })}
      </CSidebarNav>
    </CSidebar>
  );
};

export default VerticalNavigationBar;
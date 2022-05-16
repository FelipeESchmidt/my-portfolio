import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes as BrowserRoutes,
} from 'react-router-dom';

import Home from '../Screens/Home';
import Contact from '../Screens/Contact';
import { useResponsive } from '../Hooks/useResponsive';

function Routes() {
  const isResponsive = useResponsive();
  return (
    <Router>
      <BrowserRoutes>
        <Route path="/" element={<Home />} />
        {isResponsive && <Route path="contact" element={<Contact />} />}
        <Route path="/*" element={<Navigate to="/" />} />
      </BrowserRoutes>
    </Router>
  );
}

export default Routes;

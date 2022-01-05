import React from "react";
import { Routes, Route } from "react-router-dom";
import CRMLayout from "./@react-crm/@crm-layout/CRMLayout";
import routes from "./@react-crm/@routes/routes";
import './App.css';

const App = () => {
  return (
    <CRMLayout>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <React.Suspense fallback={<div>Loading</div>}>
                <route.component />
              </React.Suspense>
            }
          />
        ))}
      </Routes>
    </CRMLayout>
  );
};

export default App;

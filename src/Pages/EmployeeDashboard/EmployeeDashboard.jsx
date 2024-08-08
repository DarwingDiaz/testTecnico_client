import React from 'react';
import style from './EmployeeDashboard.module.css'; // Asume que tienes estilos personalizados

const EmployeeDashboard = () => {
  return (
    <div className={`container-sm p-3 ${style.dashboardContainer}`}>
      <h1>Employee Dashboard</h1>
    </div>
  );
};

export default EmployeeDashboard;


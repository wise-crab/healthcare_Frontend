const routes = {
  patient: [
    { path: '/patient', name: 'Exams List', icon: 'fa fa-list' },
    { path: '#', name: 'Exams Results', icon: 'fa fa-tv' },
  ],
  doctor: [
    { path: '/doctor', name: 'Home', icon: 'fa fa-home', render: true },
    { path: '#', name: 'Patient List', icon: 'fa fa-home' },
  ],
  bacteriologist: [
    { path: '/bacteriologist', name: 'Home', icon: 'fa fa-home', render: true },
    {
      path: '/bacteriologist/patient-exams',
      name: 'Exámenes de paciente',
      icon: 'fa fa-file-text-o',
      render: false,
    },
    {
      path: '/bacteriologist/assign-results',
      name: 'Asignar resultados',
      icon: 'fa fa-file-text-o',
      render: false,
    },
  ],
  admin: [
    { path: '/admin', name: 'Home', icon: 'fa fa-home' },
    { path: '/users-rol', name: 'Users', icon: 'fa fa-home' },
    { path: '/search', name: 'User', icon: 'fa fa-home' },
    { path: '/create-user', name: 'Create User', icon: 'fa fa-home' },
    { path: '/bulk-data', name: 'Bulky Upload', icon: 'fa fa-home' },
    { path: '/update-user', name: 'Update user', icon: 'fa fa-home' },
  ],
};

export default routes;

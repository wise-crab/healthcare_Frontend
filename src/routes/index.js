const routes = {
  patient: [
    { path: '/patient', name: 'Exams List', icon: 'fa fa-list' },
    { path: '#', name: 'Exams Results', icon: 'fa fa-tv' },
  ],
  doctor: [
    { path: '/doctor', name: 'Home', icon: 'fa fa-home' },
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
    { path: '#', name: 'Users', icon: 'fa fa-users' },
    { path: '/create-user', name: 'Create User', icon: 'fa fa-plus' },
    { path: '/bulk-data', name: 'Bulky Upload', icon: 'fa fa-upload' },
    { path: '/update-user', name: 'Update user', icon: 'fa fa-edit' },
  ],
};

export default routes;

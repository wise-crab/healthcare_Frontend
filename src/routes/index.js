const routes = {
  patient: [
    { path: '/patient', name: 'Exams List', icon: 'fa fa-home' },
    { path: '#', name: 'Exams Results', icon: 'fa fa-home' },
  ],
  doctor: [
    { path: '/medic', name: 'Home', icon: 'fa fa-home' },
    { path: '#', name: 'Patient List', icon: 'fa fa-home' },
  ],
  bacteriologist: [
    { path: '/bacteriologist', name: 'Home', icon: 'fa fa-home' },
    { path: '#', name: 'Patient List', icon: 'fa fa-home' },
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

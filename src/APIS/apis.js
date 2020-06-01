// server Domain
const serverIP = 'https://examedic.wl.r.appspot.com';

//Users
const getUsersList = 'https://data-mock-278118.wl.r.appspot.com/api/users';
const getUserByID = 'https://data-mock-278118.wl.r.appspot.com/api/users/ID';

//Exams
const examsList = 'https://data-mock-278118.wl.r.appspot.com/api/exams';
const getExamByID = 'https://data-mock-278118.wl.r.appspot.com/api/exams/ID';
const examsByPatientURL = `${serverIP}/types-exams/`;

const patientsList = `${serverIP}/users-rol?rol=patient`;
const loginURL = `${serverIP}/login`;
const listUsers = `${serverIP}/users`;
const getUser = `${serverIP}/users/user?document=`;
const createUserURL = listUsers;
const updateUser = `${serverIP}/users/`;
const csvUpload = `${serverIP}/users-csv`;
const usersByRol = `${serverIP}/users-rol?rol=`;
const getExamsById = `${serverIP}/exams-query?user=patient&id=`;

module.exports = {
  getUsersList,
  getUserByID,
  examsList,
  getExamByID,
  patientsList,
  loginURL,
  getUser,
  createUserURL,
  updateUser,
  csvUpload,
  examsByPatientURL,
  usersByRol,
  getExamsById,
};

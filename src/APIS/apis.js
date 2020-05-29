//Users
const getUsersList = 'https://data-mock-278118.wl.r.appspot.com/api/users';
const getUserByID = 'https://data-mock-278118.wl.r.appspot.com/api/users/ID';

//Exams
const examsList = 'https://data-mock-278118.wl.r.appspot.com/api/exams';
const getExamByID = 'https://data-mock-278118.wl.r.appspot.com/api/exams/ID';

const patientsList = 'http://localhost:3000/users-rol?rol=patient'
const loginURL = 'http://localhost:3000/login'
const listUsers = 'http://localhost:3000/users'
const getUser = 'http://localhost:3000/users/user?document='
const createUser = listUsers;
const updateUser = listUsers;
const csvUpload = 'http://localhost:3000/users-csv';



module.exports = {
  getUsersList,
  getUserByID,
  examsList,
  getExamByID,
  patientsList,
  loginURL,
  getUser,
  createUser,
  updateUser,
  csvUpload,
};
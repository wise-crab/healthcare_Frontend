import { loginUser, loginRequest } from '../../actions/userActions';
import loginMock from '../../__mocks__/loginMock';

describe('LOGIN_REQUEST Action',() => {
  
  test('Login',() => {
    const payload = {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVlY2NhYzNiY2FiYmM2MGJjYmViNTc3OSIsInVzZXJOYW1lIjoianVhbi5yb2RyaWd1ZXouMTU2MSIsInJvbCI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMDUkUVMxQnlGRnJ2NU43N1FKVFVrRjlrTzhqVzVrNWV6elV1LzNQa21zR0lDdjdJUFZHcjRGV3kiLCJfX3YiOjB9LCJpYXQiOjE1OTA1NDI1MTAsImV4cCI6MTU5MDU0MzQxMH0.nuh00D6IYPVTmHsgt87dqeEG1tdSMIymp2SZYHh5gkA",
      "userRol": "admin"
    }
    const expectedAction = {
      type: 'LOGIN_REQUEST',
      payload,
    }
    expect(loginRequest(payload)).toEqual(expectedAction);
  });
});

describe('loginUser Action',() => {
  
  test('Login',() => {
    const payload = {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVlY2NhYzNiY2FiYmM2MGJjYmViNTc3OSIsInVzZXJOYW1lIjoianVhbi5yb2RyaWd1ZXouMTU2MSIsInJvbCI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMDUkUVMxQnlGRnJ2NU43N1FKVFVrRjlrTzhqVzVrNWV6elV1LzNQa21zR0lDdjdJUFZHcjRGV3kiLCJfX3YiOjB9LCJpYXQiOjE1OTA1NDI1MTAsImV4cCI6MTU5MDU0MzQxMH0.nuh00D6IYPVTmHsgt87dqeEG1tdSMIymp2SZYHh5gkA",
      "userRol": "admin"
    }
    const expectedAction = {
      type: 'LOGIN_REQUEST',
      payload,
    }
    expect(loginUser(payload)).toEqual(expectedAction);
  });
});

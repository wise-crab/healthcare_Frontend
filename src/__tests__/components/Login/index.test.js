import React from 'react';
import { mount } from 'enzyme';
import Login from '../../../views/Login';

describe('<Login />', () => {
  test('Login form', () => {
    const preventDefault = jest.fn();
    const login = mount(<Login />);
    login.find('form').simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    login.unmount();
  });
});

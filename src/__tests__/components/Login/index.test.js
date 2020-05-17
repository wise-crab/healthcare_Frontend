import React from 'react';
import { mount } from 'enzyme';
import Login from '../../../components/Login';
// import ProviderMock from '../../../__mocks__/ProviderMock';

describe('<Login />', () => {
  test('Login form', () => {
    const preventDefault = jest.fn();
    const login = mount(
      <ProviderMock>
        <Login />
      </ProviderMock>
    );
    login.find('form').simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalledTimes(1);
    login.unmount();
  })
});

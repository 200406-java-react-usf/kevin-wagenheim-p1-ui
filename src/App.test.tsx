import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {mount} from 'enzyme';
import NavbarComponent from './components/NavbarComponent';


describe('testing main app component', () => {

  test('renders App component', () => {
    
    const app = render(<App/>);
    expect(app).toBeTruthy();

  });

  test('renders navbar component', () => {

    const wrapper = mount(<App/>);

    expect(wrapper.find(NavbarComponent)).toHaveLength(1);

  });

});

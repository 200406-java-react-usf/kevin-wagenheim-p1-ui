import * as React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import RegisterComponent, { IRegisterProps } from '../RegisterComponent';
import { FormControl, InputLabel, Input, Select } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

const props: IRegisterProps = {
    authUser: {
        id: 0,
        username: 'testun',
        password: 'testpw',
        firstName: 'testfn',
        lastName: 'testln',
        email: 'testemail',
        roleId: 1
    }
}

describe('RegisterComponent renders', () => {

    const wrapper: ReactWrapper = mount(<BrowserRouter><RegisterComponent {...props}/></BrowserRouter>);

    test('renders 6 FormControls Formcontrols', () => {

        expect(wrapper.find(FormControl)).toHaveLength(6);

    });

    test('renders 6 InputLabels', () => {

        expect(wrapper.find(InputLabel)).toHaveLength(6);

    });

    test('renders 6 Inputs', () => {

        expect(wrapper.find(Input)).toHaveLength(6);

    });

    test('renders 1 Select', () => {

        expect(wrapper.find(Select)).toHaveLength(1);

    });

});

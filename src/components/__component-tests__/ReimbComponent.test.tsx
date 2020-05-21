import * as React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import ReimbComponent, { IReimbProps } from '../ReimbComponent';
import { FormControl, InputLabel, Input, Select, Button } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { User } from '../../models/users';

const props: IReimbProps = {

    authUser: {
        id: 0,
        username: 'testun',
        password: 'testpw',
        firstName: 'testfn',
        lastName: 'testln',
        email: 'testemail',
        roleId: 2
    },

    setThisReimb: jest.fn()

}

describe('NewReimbComponent', () => {

    const wrapper: ReactWrapper = mount(<BrowserRouter><ReimbComponent {...props}/></BrowserRouter>);

    test('Renders the component', () => {

        expect(wrapper.exists()).toBeTruthy();

    });

});
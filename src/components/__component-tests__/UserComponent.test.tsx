import * as React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import UserComponent, { IUserProps } from '../UserComponent';
import { FormControl, InputLabel, Input, Select, Button } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { User } from '../../models/users';

const props: IUserProps = {

    authUser: {
        id: 0,
        username: 'testun',
        password: 'testpw',
        firstName: 'testfn',
        lastName: 'testln',
        email: 'testemail',
        roleId: 1
    },
    setThisUser: jest.fn()

}

describe('NewReimbComponent', () => {

    const wrapper: ReactWrapper = mount(<BrowserRouter><UserComponent {...props}/></BrowserRouter>);

    test('Renders the component', () => {

        expect(wrapper.exists()).toBeTruthy();

    });

});
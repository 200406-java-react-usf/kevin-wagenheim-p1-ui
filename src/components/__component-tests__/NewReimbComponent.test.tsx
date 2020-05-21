import * as React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import NewReimbComponent, { INewReimbProps } from '../NewReimbComponent';
import { FormControl, InputLabel, Input, Select, Button } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { User } from '../../models/users';

const props: INewReimbProps = {

    authUser: {
        id: 0,
        username: 'testun',
        password: 'testpw',
        firstName: 'testfn',
        lastName: 'testln',
        email: 'testemail',
        roleId: 2
    }

}

describe('NewReimbComponent', () => {

    const wrapper: ReactWrapper = mount(<BrowserRouter><NewReimbComponent {...props}/></BrowserRouter>);

    test('Renders the component', () => {

        expect(wrapper.exists()).toBeTruthy();

    });

});
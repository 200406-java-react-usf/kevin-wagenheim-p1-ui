import * as React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import ReimbDetailsComponent, { IReimbDetailsProps } from '../ReimbDetailsComponent';
import { FormControl, InputLabel, Input, Select, Button } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { User } from '../../models/users';

const props: IReimbDetailsProps = {

    authUser: {
        id: 0,
        username: 'testun',
        password: 'testpw',
        firstName: 'testfn',
        lastName: 'testln',
        email: 'testemail',
        roleId: 2
    },

    thisReimb: {

        id: 0,
        amount: 500,
        submitted: 'submitted',
        resolved: 'resolved',
        description: 'description',
        authorId: 3,
        resolverId: 2,
        reimbStatusId: 3,
        reimbTypeId: 4

    }

}

describe('NewReimbComponent', () => {

    const wrapper: ReactWrapper = mount(<BrowserRouter><ReimbDetailsComponent {...props}/></BrowserRouter>);

    test('Renders the component', () => {

        expect(wrapper.exists()).toBeTruthy();

    });

});
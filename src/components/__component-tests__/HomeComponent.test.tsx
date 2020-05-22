import * as React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import HomeComponent, {IHomeProps} from '../HomeComponent';
import { User } from '../../models/users';

const props: IHomeProps = {

    authUser: {
        id: 0,
        username: 'testun',
        password: 'testpw',
        firstName: 'testfn',
        lastName: 'testln',
        email: 'testemail',
        roleId: 3
    }

}

const homeComponent = <HomeComponent authUser = {props.authUser}/>;

describe('Render home h1', () => {

    const wrapper = mount(<HomeComponent {...props}/>);

    test('h1 renders', () => {

        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find('h1')).toHaveLength(1);

    });

});
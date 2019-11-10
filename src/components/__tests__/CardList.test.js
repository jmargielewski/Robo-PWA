import React from 'react';
import { shallow } from 'enzyme';
import CardList from '../CardList';
import toJson from 'enzyme-to-json';


it('expect to CardList snapshot', () => {
    const mockRobots = [
    {
        id: 1,
        name: 'Robo 1',
        username: 'robico',
        email: 'robi@test.com',
    },
    {
        id: 2,
        name: 'Robo 2',
        username: 'robotto',
        email: 'robotto@test.com',
    }];

    const wrapper = shallow(<CardList robots={mockRobots} />);

    expect(toJson(wrapper)).toMatchSnapshot();
});
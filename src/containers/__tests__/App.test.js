import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';
import toJson from 'enzyme-to-json';
// npm redux-mock-store

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false,
    };
    wrapper = shallow(<App { ...mockProps } />);
});

it('render App without crashing', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
});

it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 1,
            name: 'Robo 1',
            username: 'robica',
            email: 'robi@test.com',
        },{
            id: 3,
            name: 'Robo 2',
            username: 'robotto',
            email: 'robotto@test.com',
        }],
        searchField: 'Robo 1',
        isPending: false,
    };
    const wrapper2 = shallow(<App { ...mockProps2 } />);
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id: 1,
        name: 'Robo 1',
        username: 'robica',
        email: 'robi@test.com',
    }]);
});

it('filters robots correctly 2', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 1,
            name: 'Robo 1',
            username: 'robica',
            email: 'robi@test.com',
        },{
            id: 3,
            name: 'Robo 2',
            username: 'robotto',
            email: 'robotto@test.com',
        }],
        searchField: 'a',
        isPending: false,
    };
    const wrapper3 = shallow(<App { ...mockProps3 } />);
    expect(wrapper3.instance().filterRobots()).toEqual([]);
});

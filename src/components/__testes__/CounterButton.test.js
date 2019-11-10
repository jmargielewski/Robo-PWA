import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from '../CounterButton';
import toJson from 'enzyme-to-json';

it('expect to CounterButton snapshot', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);

    expect(toJson(wrapper)).toMatchSnapshot();
});

it('correctly increments the couter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);

    wrapper.find('[id="counter"]').simulate('click');

    expect(wrapper.state()).toEqual({ count: 1 });
    expect(wrapper.props().color).toEqual('red');
});
